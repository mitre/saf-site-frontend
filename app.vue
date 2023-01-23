<template>
  <div class="overscroll-none bg-gray-50 dark:bg-dark-bg">
    <NuxtLayout>
      <!-- <header1 /> -->
      <NuxtLoadingIndicator />
      <!-- <NuxtLoadingBar :duration="1000" /> -->
      <NuxtPage />
      <!-- <footer1 /> -->
    </NuxtLayout>
  </div>
</template>

<script setup>
import './assets/tailwind.css';
</script>
