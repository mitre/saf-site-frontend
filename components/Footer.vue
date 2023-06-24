<template>
  <footer class="bg-neutral-1 ">
    <div class="border-b-2 border-accent  max-w-full mx-auto px-4 sm:px-1" />
    <div class="max-w-4xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between justify-right lg:px-5">
      <div class="flex justify-center space-x-6 md:order-2">
        <a href="https://github.com/" aria-label="GitHub Link">
          <img src="@/assets/GitHubLogoBlack.svg" class="dark:hidden w-12 md:w-10 aspect-square" aria-hidden="true"
            alt="GitHubLogo" />
          <img src="@/assets/GitHubLogoWhite.svg" class="hidden dark:flex w-12 md:w-10 aspect-square" aria-hidden="true"
            alt="GitHubLogo" />
        </a>
        <a href="https://www.netlify.com" class="mx-auto w-24 hidden dark:flex" aria-label="Netlify Link">
          <img src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" alt="Deploys by Netlify" />
        </a>
        <a href="https://www.netlify.com" class="mx-auto w-24 dark:hidden" aria-label="Netlify Link">
          <img src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg" alt="Deploys by Netlify" />
        </a>
      </div>
      <div class="mt-8 mr-4 md:mt-0 md:order-1">
        <p class="block text-center text-base ">Copyright © {{ copyrightYear }}, The MITRE
          Corporation. All rights
          reserved. </p>
        <p class="block text-center text-base text-base ">MITRE is a registered trademark of The
          MITRE Corporation.
          Material on this site may be copied and distributed with permission only.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const copyrightYear = '1997-' + new Date().getFullYear()
</script>
