<template>
  <div class="overscroll-none bg-neutral-1 text-foreground">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <!-- <NuxtLoadingBar :duration="1000" /> -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import './assets/tailwind.css';
</script>
