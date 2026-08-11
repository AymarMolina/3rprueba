"use client";

import { useTranslations } from "next-intl";

export default function HeroHome() {
  const t = useTranslations("HeroHome");

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full min-h-screen h-dvh bg-[#16021B] overflow-hidden flex items-center justify-center">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/final.mp4" type="video/mp4" />
      </video>

      {/* Capa oscura superpuesta */}
      <div className="absolute inset-0 bg-black/60 z-[5] pointer-events-none" />

      {/* Contenido Principal */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex flex-col justify-center items-center md:items-start h-full pt-24 pb-20">
        
        {/* Contenedor unificado centrado/alineado */}
        <div className="w-full max-w-4xl flex flex-col text-left">
          
          {/* Ubicación / Subtítulo superior opcional */}
          <p className="text-white text-[11px] sm:text-xs tracking-[0.25em] font-semibold uppercase mb-4">
            Lima, Perú - Tu éxito, nuestro éxito
          </p>

          {/* Títulos principales */}
          <p
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] bg-gradient-to-r from-[#a630cd] to-[#f4266e] 
              bg-clip-text text-transparent font-bold tracking-tighter leading-none"
          >
            3R CORE
          </p>

          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-medium text-white leading-tight my-2 md:my-3">
            {t("agency2") || "Agencia"} <span className="italic font-serif font-light">{t("d") || "de"}</span>
          </p>

          <p
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[6rem] bg-gradient-to-r from-[#f4266e] to-[#a630cd] 
              bg-clip-text text-transparent font-bold tracking-tighter leading-none mb-8 md:mb-10"
          >
            {t("marketing") || "Marketing Digital"}
          </p>

          {/* Botones debajo del texto con espacio adecuado */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-gradient-to-r from-[#f4266e] to-[#a630cd] hover:scale-105 transition-transform duration-300 text-white rounded-full px-8 md:px-10 py-3.5 font-semibold text-xs tracking-wider flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg shadow-pink-500/20 cursor-pointer">
              COTIZAR MI PROYECTO
              <span className="text-lg leading-none font-normal">↗</span>
            </button>
            <button className="border border-white/45 hover:bg-white/10 hover:border-white transition-all duration-300 text-white rounded-full px-7 md:px-8 py-3.5 font-bold text-xs md:text-sm tracking-wider flex items-center justify-center gap-3 w-full sm:w-auto cursor-pointer">
              VER SERVICIOS
              <span className="text-lg leading-none font-normal">→</span>
            </button>
          </div>

        </div>
      </div>

      {/* Indicador de scroll inferior */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer group flex flex-col items-center"
        onClick={handleScrollClick}
      >
        <div className="flex flex-col items-center gap-1">
          <div className="relative w-6 h-9 sm:w-7 sm:h-10 border-[1.5px] border-white/80 rounded-full flex items-start justify-center p-1 transition-colors group-hover:border-white">
            <div className="w-1 h-1.5 bg-white/70 rounded-full animate-bounce mt-0.5 group-hover:bg-white"></div>
          </div>
          
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="w-1 h-1 bg-[#f4266e] rounded-full"></div>
            <span className="text-white/90 text-[10px] font-medium tracking-[0.2em] uppercase transition-colors group-hover:text-white">
              Navegar
            </span>
          </div>

          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/90 mt-0.5 transition-colors group-hover:text-white"
            viewBox="0 0 30 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}