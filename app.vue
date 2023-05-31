<template>
  <div class="bg-light-backdrop-primary dark:bg-dark-backdrop-primary overscroll-none">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <!-- <NuxtLoadingBar :duration="1000" /> -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template> 


<script setup>
import './assets/tailwind.css'
</script> 

