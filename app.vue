<template>
  <div class="overscroll-none bg-neutral-1 text-foreground text-lg">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <!-- <NuxtLoadingBar :duration="1000" /> -->
      <NuxtPage />
      <ConsentBanner />
    </NuxtLayout>
  </div>
</template>

<script setup ts="lang">
import './assets/tailwind.css';
</script>
