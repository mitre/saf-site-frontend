import {defineNuxtConfig} from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    prerender: {
      failOnError: false
    }
  },
  css: ['~/assets/tailwind.css'],
  modules: [
    '@nuxtjs/strapi',
    'nuxt-graphql-client',
    '@nuxtjs/tailwindcss',
    'nuxt-gtag'
  ],
  strapi: {
    url: process.env.STRAPI_URL,
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt'
  },
  gtag: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    initialConsent: false
  },
  runtimeConfig: {
    public: {
      GQL_HOST: process.env.GQL_HOST
    }
  },
  devtools: {enabled: true},
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      script: [
        {
          src: 'https://cmp.osano.com/AzyhULTdPkqmy4aDN/f0e8e901-3feb-47c4-bd04-96df98c75dab/osano.js'
        }
      ],
      link: [{rel: 'icon', type: 'image/svg', href: '/safLogoFavicon.svg'}]
    },
    baseURL: process.env.BASE_URL // baseURL: '/<repository>/' for github or '/' for local
  }
});
