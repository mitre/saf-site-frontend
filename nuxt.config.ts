import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["~/assets/tailwind.css"],
  modules: ['@nuxtjs/strapi', 'nuxt-graphql-client', '@nuxtjs/tailwindcss'],
  strapi: {
    // Options for strapi
    url: process.env.STRAPI_URL || 'https://saf-site-backend.herokuapp.com',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://saf-site-backend.herokuapp.com/graphql' //'http://localhost:1337/graphql'  //'https://saf-site-backend.herokuapp.com/graphql' // overwritten by process.env.GQL_HOST
    }
  }
})
