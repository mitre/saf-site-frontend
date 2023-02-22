<template>
  <div class="bg-gray-50 dark:bg-dark-bg overscroll-none" >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <!-- <NuxtLoadingBar :duration="1000" /> -->
      <NuxtPage />
      <scrollToTop />
    </NuxtLayout>
  </div>
</template> 


<script setup>
import './assets/tailwind.css'
</script> 

