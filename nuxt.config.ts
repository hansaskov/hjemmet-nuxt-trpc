// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    'trpc-nuxt',
    '@nuxtjs/tailwindcss',
  ],
  trpc: {
    baseURL: '', // Set empty string (default) to make requests by relative address 
    endpoint: '/trpc', // defaults to /trpc
  },
  typescript: {
    strict: true // required to make input/output types work
  },
  colorMode: { classSuffix: '' }
})