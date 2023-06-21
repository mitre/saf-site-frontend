<template>
  <div class="bg-light-backdrop-secondary dark:bg-dark-backdrop-secondary px-6">
    <div class=" py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-light-header dark:text-dark-header sm:text-4xl">Jump
            Start
            Your Security Journey</h1>
          <p class="mt-6 text-lg leading-8 text-light-text dark:text-dark-text">MITRE SAF(c) offers open-source support
            for
            multiple workflow capabilities.</p>
        </div>
        <div
          class="divide-y divide-light-border-primary dark:divide-dark-border-primary overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 mt-8">
          <div v-for="(capability) in capabilities.slice(0, -1)" :key="capability.orderID"
            :class="[capability.orderID === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', capability.orderID === 1 ? '' : '', capability.orderID === capabilities.length - 2 ? 'sm:rounded-bl-lg' : '', capability.orderID === capabilities.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'group relative bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800']">
            <div>
              <div class="inline-flex rounded-lg p-3 ring-4 ring-light-border-primary dark:ring-dark-border-primary">
                <img :src="capability.icon.url" :alt="capability.icon.alt"
                  class="h-14 sm:h-16 text-light-text dark:text-dark-text" aria-hidden="true" />
              </div>
            </div>
            <div class="mt-8">
              <h3 class="text-base font-semibold leading-6">
                <NuxtLink :to="capability.link" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true" />
                  <h2 class="text-xl font-extrabold leading-7 text-light-text dark:text-dark-text"> {{ capability.name }}
                  </h2>
                  <dd class="mt-2 text-base leading-7 text-light-text dark:text-dark-text"
                    v-html="capability.description">
                  </dd>
                </NuxtLink>
              </h3>
            </div>
            <span
              class="pointer-events-none absolute right-6 top-6 text-light-text dark:text-dark-text group-hover:text-nav-light-active dark:group-hover:text-nav-dark-active"
              aria-hidden="true">
              <DiagonalArrow />
            </span>
          </div>
        </div>
        <div
          class="divide-y divide-light-border-primary dark:divide-dark-border-primary overflow-hidden rounded-lg shadow sm:grid sm:max-w-[50%] sm:gap-px sm:divide-y-0 mt-0.5 sm:mx-auto">
          <div v-for="(capability) in capabilities.slice(-1)" :key="capability.orderID"
            :class="[capability.orderID === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', capability.orderID === 1 ? 'sm:rounded-tr-lg' : '', capability.orderID === capabilities.length - 2 ? 'sm:rounded-bl-lg' : '', capability.orderID === capabilities.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'group relative bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800']">
            <div>
              <div class="inline-flex rounded-lg p-3 ring-4 ring-light-border-primary dark:ring-dark-border-primary">
                <img :src="capability.icon.url" :alt="capability.icon.alt"
                  class="h-14 sm:h-16 text-light-text dark:text-dark-text" aria-hidden="true" />
              </div>
            </div>
            <div class="mt-8">
              <h3 class="text-base font-semibold leading-6 text-light-text dark:text-dark-text">
                <NuxtLink :to="capability.link" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true" />
                  <h2 class="text-xl font-extrabold leading-7 text-light-text dark:text-dark-text"> {{ capability.name }}
                  </h2>
                  <dd class="mt-2 text-base leading-7 text-light-text dark:text-dark-text"
                    v-html="capability.description">
                  </dd>
                </NuxtLink>
              </h3>
            </div>
            <span
              class="pointer-events-none absolute right-6 top-6 text-light-text dark:text-dark-text group-hover:text-nav-light-active dark:group-hover:text-nav-dark-active"
              aria-hidden="true">
              <DiagonalArrow />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>

import DiagonalArrow from 'assets/DiagonalArrow.vue'

const props = defineProps({
  capabilities: {
    type: Array,
    required: true,
  },
})

const { capabilities } = toRefs(props)

</script>