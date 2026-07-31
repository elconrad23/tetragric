import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'TetraGRIC',
      meta: [
        { name: 'theme-color', content: '#0f172a' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/brand/logo.png' },
        { rel: 'apple-touch-icon', href: '/brand/logo.png' }
      ]
    }
  },
  modules: ['nuxt-csurf', '@nuxtjs/color-mode', '@nuxt/image', '@nuxt/content', '@nuxtjs/i18n'],
  css: ['@/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  typescript:{
    strict: true,
    typeCheck: false
  },
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' }
    ]
  },
});