<template>
  <div class="bg-white dark:bg-dark-bg overscroll-none" >
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

