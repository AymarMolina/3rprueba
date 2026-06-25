/* 3R CORE — tracker de comportamiento de la landing (propio, privacy-safe).
 * Envía señales agregadas (sin PII, sin keystrokes) al panel: /panel/api/ux-ingest.
 * Alimenta la vista "Comportamiento" del panel (heatmap, scroll, embudo, CTR, fricción).
 * Vanilla JS, sin dependencias. */
(function () {
  "use strict";
  try {
    if (window.__uxBooted) return; window.__uxBooted = true;
    var script = document.currentScript || {};
    var ENDPOINT = (script.getAttribute && script.getAttribute("data-endpoint")) || "/panel/api/ux-ingest";
    var ROWS = 24, COLS = 40, FLUSH_MS = 6000;
    var q = [];
    var page = location.pathname || "/";

    // ---- device ----
    var w = window.innerWidth || 1024;
    var device = w < 768 ? "mobile" : (w < 1024 ? "tablet" : "desktop");

    // ---- source (first-touch, cached for the session) ----
    var source = (function () {
      try {
        var cached = sessionStorage.getItem("_3rux_src");
        if (cached) return cached;
      } catch (e) {}
      var qs = new URLSearchParams(location.search);
      var med = (qs.get("utm_medium") || "").toLowerCase();
      var src = (qs.get("utm_source") || "").toLowerCase();
      var ref = document.referrer || "";
      var host = ""; try { host = ref ? new URL(ref).hostname.replace(/^www\./, "") : ""; } catch (e) {}
      var paidIds = qs.get("gclid") || qs.get("gbraid") || qs.get("wbraid") || qs.get("fbclid") || qs.get("ttclid") || qs.get("msclkid");
      var social = /(facebook|instagram|fb|tiktok|t\.co|twitter|x\.com|linkedin|youtube|pinterest|whatsapp)/;
      var search = /(google|bing|yahoo|duckduckgo|ecosia|brave)\./;
      var out = "direct";
      if (med === "email" || src === "newsletter" || med === "newsletter") out = "email";
      else if (paidIds || /cpc|ppc|paid|cpm|display/.test(med)) out = "paid";
      else if (social.test(src) || social.test(host)) out = "social";
      else if (search.test(host)) out = "organic";
      else if (host && host !== location.hostname.replace(/^www\./, "")) out = "referral";
      try { sessionStorage.setItem("_3rux_src", out); } catch (e) {}
      return out;
    })();

    function push(m, t, v) { q.push(v != null ? { m: m, t: t || "", v: v } : (t != null ? { m: m, t: t } : { m: m })); if (q.length > 180) flush(); }

    function flush() {
      if (!q.length) return;
      var batch = q.splice(0, q.length);
      var body = JSON.stringify({ page: page, source: source, device: device, events: batch });
      try {
        if (navigator.sendBeacon) {
          navigator.sendBeacon(ENDPOINT, new Blob([body], { type: "text/plain" }));
        } else {
          fetch(ENDPOINT, { method: "POST", body: body, headers: { "Content-Type": "text/plain" }, keepalive: true, credentials: "omit" });
        }
      } catch (e) {}
    }

    // ---- page_view + lifecycle ----
    push("page_view");
    setInterval(flush, FLUSH_MS);
    document.addEventListener("visibilitychange", function () { if (document.visibilityState === "hidden") { settleAttention(); flush(); } });
    window.addEventListener("pagehide", finalize);
    window.addEventListener("beforeunload", finalize);

    // ---- first interaction ----
    var firstDone = false;
    function firstInteraction() { if (firstDone) return; firstDone = true; push("first_interaction"); }
    ["click", "scroll", "keydown", "touchstart"].forEach(function (ev) {
      window.addEventListener(ev, firstInteraction, { once: true, passive: true });
    });

    // ---- scroll depth ----
    var maxPct = 0, buckets = { 25: false, 50: false, 75: false, 100: false };
    function onScroll() {
      var doc = document.documentElement;
      var h = Math.max(doc.scrollHeight, document.body.scrollHeight) - window.innerHeight;
      var pct = h > 0 ? Math.min(100, Math.round(((window.scrollY || doc.scrollTop) / h) * 100)) : 100;
      if (pct > maxPct) maxPct = pct;
      [25, 50, 75, 100].forEach(function (b) { if (!buckets[b] && maxPct >= b) { buckets[b] = true; push("scroll_depth", String(b)); } });
    }
    window.addEventListener("scroll", throttle(onScroll, 400), { passive: true });

    // ---- click: heatmap + rage + dead + cta + outbound ----
    var clickTimes = [], lastPos = null;
    document.addEventListener("click", function (e) {
      var docH = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) || 1;
      var col = clamp(Math.floor((e.clientX / (window.innerWidth || 1)) * COLS), 0, COLS - 1);
      var row = clamp(Math.floor(((window.scrollY + e.clientY) / docH) * ROWS), 0, ROWS - 1);
      push("click_heat", row + ":" + col);

      // rage: 3 clicks < 800ms close together
      var now = Date.now();
      clickTimes = clickTimes.filter(function (t) { return now - t < 800; }); clickTimes.push(now);
      if (lastPos && Math.abs(lastPos.x - e.clientX) < 40 && Math.abs(lastPos.y - e.clientY) < 40 && clickTimes.length >= 3) {
        push("rage_click", slug(nearestLabel(e.target))); clickTimes = [];
      }
      lastPos = { x: e.clientX, y: e.clientY };

      var a = e.target && e.target.closest ? e.target.closest("a,button,[role=button]") : null;
      if (a) {
        if (isCta(a)) push("cta_click", ctaId(a));
        if (a.tagName === "A" && a.href) {
          try { var u = new URL(a.href); if (u.hostname && u.hostname !== location.hostname) push("outbound_click", slug(u.hostname)); } catch (e2) {}
        }
      } else if (!e.target.closest("input,textarea,select,label,form")) {
        if (!window.getSelection || String(window.getSelection()) === "") push("dead_click", slug(nearestLabel(e.target)));
      }
    }, true);

    // ---- copy ----
    document.addEventListener("copy", function () { push("copy_intent"); });

    // ---- CTA impressions (once each) ----
    var seenCta = {};
    if ("IntersectionObserver" in window) {
      var ctaObs = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) {
          if (en.isIntersecting) { var id = ctaId(en.target); if (!seenCta[id]) { seenCta[id] = 1; push("cta_impression", id); } ctaObs.unobserve(en.target); }
        });
      }, { threshold: 0.6 });
      qsa("a,button,[role=button]").forEach(function (el) { if (isCta(el)) ctaObs.observe(el); });
    }

    // ---- sections: view + attention (visible time) ----
    var attn = {}; // id -> { ms, last, views, seen }
    var sections = pickSections();
    if ("IntersectionObserver" in window) {
      var secObs = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) {
          var id = sectionId(en.target);
          var a = attn[id] || (attn[id] = { ms: 0, last: 0, views: 0, seen: false });
          if (en.isIntersecting) { a.last = Date.now(); if (!a.seen) { a.seen = true; a.views++; push("section_view", id); } }
          else if (a.last) { a.ms += Date.now() - a.last; a.last = 0; }
        });
      }, { threshold: 0.5 });
      sections.forEach(function (s) { secObs.observe(s); });
    }
    function settleAttention() {
      var now = Date.now();
      Object.keys(attn).forEach(function (id) {
        var a = attn[id];
        if (a.last) { a.ms += now - a.last; a.last = now; }
        if (a.ms > 0) { push("attention", id, a.ms); a.ms = 0; }
      });
    }
    setInterval(settleAttention, FLUSH_MS);

    // ---- form funnel ----
    var form = document.querySelector("form");
    var formStarted = false, formSubmitted = false;
    if (form) {
      if ("IntersectionObserver" in window) {
        var fSeen = false;
        var fObs = new IntersectionObserver(function (ents) {
          ents.forEach(function (en) { if (en.isIntersecting && !fSeen) { fSeen = true; push("form_view"); fObs.disconnect(); } });
        }, { threshold: 0.3 });
        fObs.observe(form);
      } else { push("form_view"); }
      form.addEventListener("focusin", function (e) {
        if (!formStarted) { formStarted = true; push("form_start"); }
        var name = e.target && (e.target.name || e.target.id); if (name) push("field_focus", slug(String(name)));
      });
      form.addEventListener("submit", function () { formSubmitted = true; push("form_submit"); flush(); });
    }

    // ---- finalize ----
    var finalized = false;
    function finalize() {
      if (finalized) return; finalized = true;
      settleAttention();
      if (maxPct < 10) push("exit_no_scroll");
      if (formStarted && !formSubmitted) push("form_abandon");
      push("page_exit", "", maxPct);
      flush();
    }

    // ---- helpers ----
    function isCta(el) {
      if (!el) return false;
      if (el.hasAttribute("data-ux-cta")) return true;
      if (el.tagName === "BUTTON") return true;
      var cls = (el.className && el.className.baseVal != null) ? el.className.baseVal : (el.className || "");
      cls = String(cls).toLowerCase();
      if (/btn|cta|button/.test(cls)) return true;
      var href = el.getAttribute && el.getAttribute("href") || "";
      if (/wa\.me|tel:|mailto:|#contacto|#form|diagnost/.test(href.toLowerCase())) return true;
      return false;
    }
    function ctaId(el) {
      return slug(el.getAttribute("data-ux-cta") || el.getAttribute("aria-label") || (el.textContent || "").trim() || (el.getAttribute("href") || "cta")) || "cta";
    }
    function nearestLabel(el) {
      var n = el, i = 0;
      while (n && i < 3) { var tx = (n.getAttribute && n.getAttribute("aria-label")) || (n.id ? n.id : ""); if (tx) return tx; n = n.parentElement; i++; }
      return (el.tagName || "el").toLowerCase();
    }
    function pickSections() {
      var els = qsa("section[id],section,[data-ux-section]");
      if (els.length >= 2) return els.slice(0, 24);
      var main = document.querySelector("main") || document.body;
      return Array.prototype.slice.call(main.children).filter(function (c) { return c.offsetHeight > 120; }).slice(0, 24);
    }
    function sectionId(el) {
      if (el.dataset && el.dataset.uxSection) return slug(el.dataset.uxSection);
      if (el.id) return slug(el.id);
      var h = el.querySelector && el.querySelector("h1,h2,h3");
      return slug(h ? h.textContent : (el.getAttribute("aria-label") || el.tagName)) || "sec";
    }
    function slug(s) { return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 40) || ""; }
    function clamp(n, a, b) { return n < a ? a : (n > b ? b : n); }
    function qsa(sel) { try { return Array.prototype.slice.call(document.querySelectorAll(sel)); } catch (e) { return []; } }
    function throttle(fn, ms) { var t = 0, pend = false; return function () { var now = Date.now(); if (now - t >= ms) { t = now; fn(); } else if (!pend) { pend = true; setTimeout(function () { pend = false; t = Date.now(); fn(); }, ms - (now - t)); } }; }
  } catch (e) { /* analytics must never break the page */ }
})();
