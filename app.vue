<template>
  <div class="bg-neutral-1 text-foreground overscroll-none">
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

