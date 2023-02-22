<template>
  <div class="bg-gray-50 dark:bg-dark-bg overscroll-none" >
    <NuxtLayout>
      <!-- <Header /> -->
      <NuxtLoadingIndicator />
      <!-- <NuxtLoadingBar :duration="1000" /> -->
      <NuxtPage />
      <scrollToTop />
      <!-- <Footer /> -->
    </NuxtLayout>
  </div>
</template> 


<script setup>
import './assets/tailwind.css'
</script> 

