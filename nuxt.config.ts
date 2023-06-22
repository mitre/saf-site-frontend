import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/tailwind.css"],
  modules: ['@nuxtjs/strapi', 'nuxt-graphql-client', '@nuxtjs/tailwindcss'],
  strapi: {
    // Options for strapi
    url: process.env.STRAPI_URL,
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST
    }
  },
  app:{
    head:{
      htmlAttrs:{
        lang: 'en',
      }
    }
  }
})
