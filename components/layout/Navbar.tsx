"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const localeSwitchHref = /^\/blogs\/[^/]+$/.test(pathname) ? "/blogs" : pathname;

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileServicesTapped, setMobileServicesTapped] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownItemsRef = useRef<HTMLAnchorElement[]>([]);
  const servicesBackdropRef = useRef<HTMLDivElement>(null);

  const handleScrollTop = (href: string) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("contacto");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        window.history.replaceState(null, "", window.location.pathname);
      }, 100);
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (!dropdownRef.current) return;
    gsap.set(dropdownRef.current, {
      opacity: 0,
      y: -8,
      pointerEvents: "none",
      display: "none",
    });
    gsap.set(dropdownItemsRef.current, { x: -8, opacity: 0 });
  }, []);

  const openServices = () => {
    if (servicesOpen) return;
    setServicesOpen(true);

    gsap.set(dropdownRef.current, { display: "flex" });

    const tl = gsap.timeline();
    tl.to(dropdownRef.current, {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      duration: 0.3,
      ease: "power3.out",
    }).to(
      dropdownItemsRef.current,
      {
        x: 0,
        opacity: 1,
        duration: 0.25,
        ease: "power2.out",
        stagger: 0.06,
      },
      "-=0.15"
    );

    gsap.to(servicesBackdropRef.current, {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.2,
    });
  };

  const closeServices = () => {
    if (!servicesOpen) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setServicesOpen(false);
        gsap.set(dropdownRef.current, { display: "none" });
        gsap.set(dropdownItemsRef.current, { x: -8, opacity: 0 });
      },
    });

    tl.to(dropdownItemsRef.current, {
      x: -6,
      opacity: 0,
      duration: 0.15,
      ease: "power2.in",
      stagger: { each: 0.04, from: "end" },
    }).to(
      dropdownRef.current,
      {
        opacity: 0,
        y: -6,
        pointerEvents: "none",
        duration: 0.25,
        ease: "power3.in",
      },
      "-=0.05"
    );

    gsap.to(servicesBackdropRef.current, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.2,
    });
  };

  useEffect(() => {
    if (!isOpen) {
      setMobileServicesOpen(false);
      setMobileServicesTapped(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        setIsAtTop(currentScrollY < 10);

        if (isOpen) return;
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
          closeServices();
        } else {
          setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Subopciones del menú desplegable de la barra de navegación superior (desktop)
  const navDropdownServices = [
    { href: "/posicionamiento-seo", label: "Posicionamiento SEO" },
    { href: "/servicios/google-ads", label: "Google Ads / SEM" },
    { href: "/tiendas-virtuales-lima", label: "Tiendas Virtuales" },
    { href: "/servicios/web-development", label: "Diseño Web" },
    { href: "/servicios/socialmedia", label: "Social Media" },
    { href: "/servicios/branding", label: "Branding" },
  ];

  // Subopciones para MARKETING DIGITAL en el menú lateral completo
  const marketingDigitalSublinks = [
    { href: "/servicios/socialmedia", label: "REDES SOCIALES" },
    { href: "/servicios/contenido-ugc", label: "CONTENIDO UGC" },
    { href: "/servicios/google-ads", label: "GOOGLE ADS" },
    { href: "/servicios/branding", label: "BRANDING" },
    { href: "/servicios/relaciones-publicas", label: "RELACIONES PÚBLICAS" },
    { href: "/servicios/influencer-marketing", label: "INFLUENCER MARKETING" },
  ];

  // Enlaces principales del menú lateral tal cual la imagen
  const menuLinks = [
    { name: "INICIO", href: "/" },
    { name: "NOSOTROS", href: "/nosotros" },
    { name: "DESARROLLO DE PÁGINAS WEBS", href: "/servicios/web-development" },
    { name: "DESARROLLO DE TIENDAS VIRTUALES", href: "/tiendas-virtuales-lima" },
    { name: "POSICIONAMIENTO SEO", href: "/posicionamiento-seo" },
    { name: "MARKETING DIGITAL", href: "#", isMarketing: true },
    { name: "CASOS DE ÉXITO", href: "/casos-de-exito" },
    { name: "PRECIOS", href: "/precios" },
    { name: "BLOG", href: "/blogs" },
    { name: "CONTÁCTANOS", href: "#contacto", isContact: true },
  ];

  const socialLinks = [
    { name: "FACEBOOK", href: "https://www.facebook.com/3Rcore/" },
    { name: "INSTAGRAM", href: "https://www.instagram.com/3rcore_/?hl=es" },
    { name: "LINKEDIN", href: "https://www.linkedin.com/company/3r-core/" },
    { name: "TIKTOK", href: "https://www.tiktok.com/@3rcore" },
  ];

  return (
    <>
      <div
        ref={servicesBackdropRef}
        className="fixed inset-0 z-[49]"
        style={{ opacity: 0, pointerEvents: "none" }}
        onClick={closeServices}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-50 text-white transition-all duration-500 ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
          ${isAtTop && !isOpen ? "bg-transparent" : "bg-[#130218]"}`}
      >
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-24 lg:h-18 xl:h-24 relative">
            <div className="flex items-center gap-6 flex-shrink-0 relative z-[60]">
              <Link href="/" onClick={() => handleScrollTop("/")}>
                <div className="relative h-15 w-28 cursor-pointer">
                  <Image
                    src="/icons/LogoFull.webp"
                    alt="3RCORE Logo"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
              
              <div className="relative hidden md:block">
                <button
                  onMouseEnter={openServices}
                  onClick={() => servicesOpen ? closeServices() : openServices()}
                  className="flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-200 focus:outline-none group"
                >
                  <span className="px-3 py-1.5 rounded-full transition-colors duration-200">
                    {t("nav.services")}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div
                  ref={dropdownRef}
                  className="absolute top-[calc(100%+12px)] left-0 flex-col gap-1 py-3 px-1 rounded-xl shadow-2xl min-w-[200px] border border-white/10"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgba(19,2,24,0.98) 0%, rgba(30,4,40,0.98) 100%)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <div
                    className="absolute top-0 left-4 right-4 h-[1px] rounded-full"
                    style={{
                      backgroundImage: "linear-gradient(to right, #9C27B0, #FF1A55)",
                    }}
                  />

                  {navDropdownServices.map((service, i) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      ref={(el) => { if (el) dropdownItemsRef.current[i] = el; }}
                      onClick={() => {
                        handleScrollTop(service.href);
                        closeServices();
                      }}
                      className="group/item flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-200 group-hover/item:scale-125"
                        style={{
                          background: "linear-gradient(to right, #9C27B0, #FF1A55)",
                        }}
                      />
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs tracking-wide transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              <span className="text-white">{t("regular")}</span>
              <span className="font-bold ml-2 text-white">{t("bold")}</span>
            </div>

            <div className="flex items-center gap-6 relative z-[60]">
              <div
                className={`flex items-center gap-4 text-xs font-bold tracking-widest transition-opacity duration-300 ${
                  isOpen ? "opacity-0 delay-0" : "opacity-100 delay-300"
                } text-gray-400`}
              >
                <Link
                  href={localeSwitchHref}
                  locale="es"
                  className="hover:text-[#E91E63] transition-colors cursor-pointer uppercase"
                >
                  ES
                </Link>
                <Link
                  href={localeSwitchHref}
                  locale="en"
                  className="hover:text-[#E91E63] transition-colors cursor-pointer uppercase"
                >
                  EN
                </Link>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center gap-3 text-xs font-bold focus:outline-none tracking-widest uppercase hover:text-gray-300 transition-colors"
              >
                <span className="hidden sm:block">MENU</span>
                <div className="flex flex-col justify-center items-end w-6 h-6 gap-[5px] cursor-pointer">
                  <span
                    className={`block h-[2px] bg-white transition-all duration-500 ease-in-out ${
                      isOpen ? "w-6" : "w-4 group-hover:w-6"
                    }`}
                  />
                  <span
                    className={`block h-[2px] bg-white transition-all duration-500 ease-in-out ${
                      isOpen ? "w-6" : "w-6"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-[#130218] flex overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
          ${isOpen
            ? "left-0 opacity-100 visible pointer-events-auto"
            : "left-1/2 opacity-0 invisible pointer-events-none"
          }`}
        style={{ width: isOpen ? "100%" : "0%", left: isOpen ? "0%" : "50%" }}
      >
        <div className="w-full h-full flex flex-col lg:flex-row">
          <div
            onClick={() => { setIsOpen(false); handleScrollTop("/"); }}
            className="hidden lg:flex flex-1 items-center justify-center bg-[#130218] relative border-r border-white/10"
          >
            <Link
              href="/"
              className={`relative h-100 w-100 cursor-pointer transition-all duration-700 delay-300 transform ${
                isOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-10"
              }`}
            >
              <Image
                src="/icons/LogoFull.webp"
                alt="3RCORE Logo Large"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <div className="flex-1 flex flex-col justify-between bg-[#130218] p-8 sm:p-16 pt-20 lg:pt-12 overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-sm font-bold tracking-widest uppercase text-white/70 hover:text-white transition-colors cursor-pointer z-20"
            >
              {t("clo")}
            </button>

            <ul className="flex flex-col space-y-0">
              {menuLinks.map((link, index) => (
                <li key={link.name} className="group overflow-hidden">
                  {link.isMarketing ? (
                    <div>
                      <div
                        className={`flex items-center justify-between text-lg sm:text-2xl font-bold tracking-tight text-white py-3 sm:py-4 border-b border-white/20 relative transition-all duration-500 transform cursor-pointer
                          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
                          hover:text-white hover:pl-4
                        `}
                        style={{ transitionDelay: `${150 + index * 60}ms` }}
                        onClick={() => {
                          setMobileServicesOpen(!mobileServicesOpen);
                        }}
                      >
                        <span className="absolute top-0 left-0 w-0 h-full z-[-1] transition-all duration-500 group-hover:w-full bg-gradient-to-r from-[rgba(156,39,176,0.25)] to-[rgba(233,30,99,0.25)]" />
                        <span className="flex-1">{link.name}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 flex-shrink-0 transition-transform duration-300"
                          style={{
                            transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>

                      <div
                        className={`overflow-hidden transition-all duration-400 ease-in-out ${
                          mobileServicesOpen ? "max-h-96 opacity-100 py-2" : "max-h-0 opacity-0 py-0"
                        }`}
                      >
                        <div className="pl-4 py-2 flex flex-col gap-1.5 border-b border-white/10 bg-black/20 rounded-lg my-1">
                          {marketingDigitalSublinks.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => {
                                setIsOpen(false);
                                handleScrollTop(sub.href);
                              }}
                              className="flex items-center gap-2.5 py-1.5 text-xs sm:text-sm font-medium text-white/60 hover:text-white transition-colors duration-200"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{
                                  background: "linear-gradient(to right, #9C27B0, #FF1A55)",
                                }}
                              />
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if (link.isContact) {
                          scrollToContact(e);
                        } else {
                          setIsOpen(false);
                          handleScrollTop(link.href);
                        }
                      }}
                      className={`block text-lg sm:text-2xl font-bold tracking-tight text-white py-3 sm:py-4 border-b border-white/20 relative transition-all duration-500 transform
                        ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
                        hover:text-white hover:pl-4
                      `}
                      style={{ transitionDelay: `${150 + index * 60}ms` }}
                    >
                      <span className="absolute top-0 left-0 w-0 h-full z-[-1] transition-all duration-500 group-hover:w-full bg-gradient-to-r from-[rgba(156,39,176,0.25)] to-[rgba(233,30,99,0.25)]" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div
              className={`flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] sm:text-xs font-bold tracking-widest text-white/50 mt-8 transition-all duration-700 delay-700 transform ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-0">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;