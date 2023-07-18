<template>
  <footer class="bg-neutral-1">
    <div class="mx-auto max-w-full border-b-2 border-accent px-4 sm:px-1" />
    <div
      class="justify-right mx-auto max-w-4xl px-4 py-12 sm:px-6 md:flex md:items-center md:justify-between lg:px-5"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a href="https://github.com/" aria-label="GitHub Link">
          <img
            src="@/assets/logos/GitHubLogoBlack.svg"
            class="aspect-square w-12 dark:hidden md:w-10"
            aria-hidden="true"
            alt="GitHubLogo"
          />
          <img
            src="@/assets/logos/GitHubLogoWhite.svg"
            class="aspect-square hidden w-12 dark:flex md:w-10"
            aria-hidden="true"
            alt="GitHubLogo"
          />
        </a>
        <a
          href="https://www.netlify.com"
          class="mx-auto hidden w-24 dark:flex"
          aria-label="Netlify Link"
        >
          <img
            src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg"
            alt="Deploys by Netlify"
          />
        </a>
        <a
          href="https://www.netlify.com"
          class="mx-auto w-24 dark:hidden"
          aria-label="Netlify Link"
        >
          <img
            src="https://www.netlify.com/v3/img/components/netlify-color-bg.svg"
            alt="Deploys by Netlify"
          />
        </a>
      </div>
      <div class="mr-4 mt-8 md:order-1 md:mt-0">
        <p class="block text-center text-base">
          Copyright © {{ copyrightYear }}, The MITRE Corporation. All rights
          reserved.
        </p>
        <p class="block text-center text-base">
          MITRE is a registered trademark of The MITRE Corporation. Material on
          this site may be copied and distributed with permission only.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const copyrightYear = `1997-${new Date().getFullYear()}`;
</script>
