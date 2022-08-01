<template>
  <NuxtLayout>
    <!-- <header1 /> -->
    <NuxtLoadingIndicator />
    <!-- <NuxtLoadingBar :duration="1000" /> -->
    <NuxtPage />
    <!-- <footer1 /> -->
  </NuxtLayout>
</template> 


<script setup>
import './assets/tailwind.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script> 

