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
      // ── SEO: consolidación de canibalización ──────────────────────────────
      // Las páginas /servicios/* y /posicionamiento-seo duplicaban el intent de
      // las money pages /agencia-*-lima (title/H1 casi gemelos), partiendo la
      // autoridad en Google. 301 permanente hacia la única página objetivo por
      // keyword. Reversible: basta quitar la entrada. (2026-07-01)
      { source: '/:locale(es|en)/servicios/branding', destination: '/:locale/agencia-branding-lima', permanent: true },
      { source: '/servicios/branding', destination: '/es/agencia-branding-lima', permanent: true },
      { source: '/:locale(es|en)/servicios/socialmedia', destination: '/:locale/agencia-redes-sociales-lima', permanent: true },
      { source: '/servicios/socialmedia', destination: '/es/agencia-redes-sociales-lima', permanent: true },
      { source: '/:locale(es|en)/servicios/google-ads', destination: '/:locale/agencia-google-ads-lima', permanent: true },
      { source: '/servicios/google-ads', destination: '/es/agencia-google-ads-lima', permanent: true },
      { source: '/:locale(es|en)/servicios/web-development', destination: '/:locale/diseno-web-lima', permanent: true },
      { source: '/servicios/web-development', destination: '/es/diseno-web-lima', permanent: true },
      { source: '/:locale(es|en)/servicios/seo-sem', destination: '/:locale/agencia-seo-lima', permanent: true },
      { source: '/servicios/seo-sem', destination: '/es/agencia-seo-lima', permanent: true },
      { source: '/:locale(es|en)/posicionamiento-seo', destination: '/:locale/agencia-seo-lima', permanent: true },
      { source: '/posicionamiento-seo', destination: '/es/agencia-seo-lima', permanent: true },
      // Typo histórico → ahora apunta directo a la money page (sin salto doble).
      {
        source: '/:locale(es|en)/servicios/web-deveploment',
        destination: '/:locale/diseno-web-lima',
        permanent: true,
      },
      {
        source: '/servicios/web-deveploment',
        destination: '/es/diseno-web-lima',
        permanent: true,
      },
      {
        source: '/:locale(es|en)/blog',
        destination: '/:locale/blogs',
        permanent: true,
      },
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
