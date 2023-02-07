<template>
  <footer class="bg-white dark:bg-dark-bg">
    <div class="border-b-2 border-gray-100 dark:border-gray-500 max-w-full mx-auto px-4 sm:px-1" />
    <div class="max-w-4xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between justify-right lg:px-5">
      <div class="flex justify-center space-x-6 md:order-2">
        <a v-for="item in footerLogos" :key="item.name" :href="item.href"
          class="text-gray-400 hover:text-gray-500 dark:hover:text-gray-200">
          <img :src="`${item.darkImage}`" class="dark:hidden w-12 md:w-10 aspect-square" aria-hidden="true"
            :alt="item.alt" />
          <img :src="`${item.lightImage}`" class="hidden dark:flex w-12 md:w-10 aspect-square" aria-hidden="true"
            :alt="item.alt" />
        </a>
        <a href="https://www.netlify.com" class="mx-auto w-24 hidden dark:flex ">
          <img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Deploys by Netlify" />
        </a>
        <a href="https://www.netlify.com" class="mx-auto w-24 dark:hidden">
          <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" />
        </a>
      </div>
      <div class="mt-8 mr-4 md:mt-0 md:order-1">
        <p class="block text-center text-gray-400">Copyright © {{ copyrightYear }}, The MITRE Corporation. All rights
          reserved. </p>
        <p class="block text-center text-base text-gray-400">MITRE is a registered trademark of The MITRE Corporation.
          Material on this site may be copied and distributed with permission only.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const copyrightYear = '1997-' + new Date().getFullYear()
const footerLogos = [
  {
    name: 'GitHub',
    href: 'https://github.com/',
    lightImage: '@/assets/GitHubLogoWhite.svg',
    darkImage: '@/assets/GitHubLogoBlack.svg',
    alt: 'GitHubLogo'
  },
]
</script>
