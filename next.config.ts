import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '3rcore.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '3rcore-server.com.pe',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '**',
      }
    ],
  },
  async rewrites() {
    // Internal operations panel — proxied to its standalone Vercel deployment.
    // The panel app is built with basePath "/panel", so every asset/API lives
    // under /panel/* on the upstream and maps 1:1 here. Excluded from the i18n
    // middleware via the matcher in proxy.ts so it is never locale-prefixed.
    // Repointed 2026-06-25 to the hardened panel deployment (demo creds removed,
    // password hashing + brute-force lockout + security headers + Supabase env).
    const PANEL = 'https://3rcore-work.vercel.app';
    return [
      { source: '/panel', destination: `${PANEL}/panel` },
      { source: '/panel/:path*', destination: `${PANEL}/panel/:path*` },
    ];
  },
  async redirects() {
    return [
      // ── REVERSIÓN a páginas de servicio (2026-07-15) ──────────────────────
      // El equipo comercial vende con las páginas /servicios/* y
      // /posicionamiento-seo (mejor diseñadas: hero, proceso, portafolio,
      // reviews, FAQ). Se restauran como páginas objetivo y las money pages
      // /agencia-*-lima 301 hacia ellas para conservar la autoridad acumulada.
      // Posicionamiento en 3 pilares: SEO (/posicionamiento-seo), SEM
      // (/servicios/google-ads) y Web/Tiendas (/servicios/web-development +
      // /tiendas-virtuales-lima). Reversible: basta quitar la entrada.
      { source: '/:locale(es|en)/agencia-branding-lima', destination: '/:locale/servicios/branding', permanent: true },
      { source: '/agencia-branding-lima', destination: '/es/servicios/branding', permanent: true },
      { source: '/:locale(es|en)/agencia-redes-sociales-lima', destination: '/:locale/servicios/socialmedia', permanent: true },
      { source: '/agencia-redes-sociales-lima', destination: '/es/servicios/socialmedia', permanent: true },
      { source: '/:locale(es|en)/agencia-google-ads-lima', destination: '/:locale/servicios/google-ads', permanent: true },
      { source: '/agencia-google-ads-lima', destination: '/es/servicios/google-ads', permanent: true },
      { source: '/:locale(es|en)/diseno-web-lima', destination: '/:locale/servicios/web-development', permanent: true },
      { source: '/diseno-web-lima', destination: '/es/servicios/web-development', permanent: true },
      { source: '/:locale(es|en)/agencia-seo-lima', destination: '/:locale/posicionamiento-seo', permanent: true },
      { source: '/agencia-seo-lima', destination: '/es/posicionamiento-seo', permanent: true },
      { source: '/:locale(es|en)/agencia-marketing-digital-lima', destination: '/:locale/servicios', permanent: true },
      { source: '/agencia-marketing-digital-lima', destination: '/es/servicios', permanent: true },
      // Typo histórico → página web real.
      {
        source: '/:locale(es|en)/servicios/web-deveploment',
        destination: '/:locale/servicios/web-development',
        permanent: true,
      },
      {
        source: '/servicios/web-deveploment',
        destination: '/es/servicios/web-development',
        permanent: true,
      },
      {
        source: '/:locale(es|en)/blog',
        destination: '/:locale/blogs',
        permanent: true,
      },
      // ── Consolidación de canibalización del blog (2026-07-16) ─────────────
      // Varios posts atacaban la MISMA keyword y se dividían las señales:
      // 3× "cuánto cuesta página web", 3× "agencia diseño web lima" (dos con
      // slug roto "es-blogs-*" de la migración), 2× "mejores agencias" y 2×
      // "crear tienda con shopify/woocommerce". Se consolida cada grupo en su
      // post canónico (el más completo) con 301. Los slugs viejos también se
      // excluyen del sitemap (app/sitemap.ts).
      { source: '/:locale(es|en)/blogs/es-blogs-diseno-web-lima-peru', destination: '/:locale/blogs/como-elegir-agencia-diseno-web-lima', permanent: true },
      { source: '/blogs/es-blogs-diseno-web-lima-peru', destination: '/es/blogs/como-elegir-agencia-diseno-web-lima', permanent: true },
      { source: '/:locale(es|en)/blogs/es-blogs-mejor-agencia-web-lima-peru', destination: '/:locale/blogs/como-elegir-agencia-diseno-web-lima', permanent: true },
      { source: '/blogs/es-blogs-mejor-agencia-web-lima-peru', destination: '/es/blogs/como-elegir-agencia-diseno-web-lima', permanent: true },
      { source: '/:locale(es|en)/blogs/cuanto-cuesta-una-pagina-web-en-peru-en-2026-precios-reales', destination: '/:locale/blogs/cuanto-cuesta-pagina-web-peru-2026', permanent: true },
      { source: '/blogs/cuanto-cuesta-una-pagina-web-en-peru-en-2026-precios-reales', destination: '/es/blogs/cuanto-cuesta-pagina-web-peru-2026', permanent: true },
      { source: '/:locale(es|en)/blogs/cuanto-cuesta-crear-una-pagina-web-en-peru-este-ano', destination: '/:locale/blogs/cuanto-cuesta-pagina-web-peru-2026', permanent: true },
      { source: '/blogs/cuanto-cuesta-crear-una-pagina-web-en-peru-este-ano', destination: '/es/blogs/cuanto-cuesta-pagina-web-peru-2026', permanent: true },
      { source: '/:locale(es|en)/blogs/mejores-agencias-de-publicidad', destination: '/:locale/blogs/mejores-agencias-de-marketing-digital', permanent: true },
      { source: '/blogs/mejores-agencias-de-publicidad', destination: '/es/blogs/mejores-agencias-de-marketing-digital', permanent: true },
      { source: '/:locale(es|en)/blogs/crear-tienda-online-en-peru-con-shopify-o-woocommerce-guia-2026', destination: '/:locale/blogs/como-crear-tienda-online-que-venda-peru', permanent: true },
      { source: '/blogs/crear-tienda-online-en-peru-con-shopify-o-woocommerce-guia-2026', destination: '/es/blogs/como-crear-tienda-online-que-venda-peru', permanent: true },
      {
        source: '/:locale(es|en)/blog/:slug*',
        destination: '/:locale/blogs/:slug*',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/es/blogs',
        permanent: true,
      },
      {
        source: '/blog/:slug*',
        destination: '/es/blogs/:slug*',
        permanent: true,
      },
      {
        source: '/:locale(es|en)/contacto',
        destination: '/:locale#contacto',
        permanent: true,
      },
      {
        source: '/contacto',
        destination: '/es#contacto',
        permanent: true,
      },
    ];
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://3rcore.com' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
