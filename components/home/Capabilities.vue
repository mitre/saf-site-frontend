<template>
  <div class="bg-neutral-2 px-6">
    <div class=" py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-6xl lg:text-center">
          <h1 class="font-extrabold text-4xl sm:text-5xl mt-2 tracking-tight text-header">Jump
            Start
            Your Security Journey</h1>
          <p class="mt-6 text-xl leading-8">MITRE SAF(c) offers open-source support
            for
            multiple workflow capabilities.</p>
        </div>
        <div
          class="divide-y divide-accent overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 mt-8">
          <div v-for="(capability) in capabilities.slice(0, -1)" :key="capability.orderID"
            :class="[capability.orderID === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', capability.orderID === 1 ? '' : '', capability.orderID === capabilities.length - 2 ? 'sm:rounded-bl-lg' : '', capability.orderID === capabilities.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'group relative bg-neutral-1  p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 hover:bg-opacity-60 ']">
            <div>
              <div class="inline-flex rounded-lg p-3 ring-4 ring-accent ">
                <img :src="capability.icon.url" :alt="capability.icon.alt" class="h-14 sm:h-16 text-base "
                  aria-hidden="true" />
              </div>
            </div>
            <div class="mt-8">
              <h3 class="text-base font-semibold leading-6">
                <NuxtLink :to="capability.link" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true" />
                  <h2 class="text-xl font-extrabold leading-7"> {{ capability.name }}
                  </h2>
                  <span class="mt-2 leading-7" v-html="capability.description">
                  </span>
                </NuxtLink>
              </h3>
            </div>
            <span class="pointer-events-none absolute right-6 top-6 text-base  group-hover:text-nav-active "
              aria-hidden="true">
              <DiagonalArrow />
            </span>
          </div>
        </div>
        <div
          class="divide-y divide-accent  overflow-hidden rounded-lg shadow sm:grid sm:max-w-[50%] sm:gap-px sm:divide-y-0 mt-0.5 sm:mx-auto">
          <div v-for="(capability) in capabilities.slice(-1)" :key="capability.orderID"
            :class="[capability.orderID === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', capability.orderID === 1 ? 'sm:rounded-tr-lg' : '', capability.orderID === capabilities.length - 2 ? 'sm:rounded-bl-lg' : '', capability.orderID === capabilities.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'group relative bg-neutral-1  p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 hover:bg-opacity-60 ']">
            <div>
              <div class="inline-flex rounded-lg p-3 ring-4 ring-accent ">
                <img :src="capability.icon.url" :alt="capability.icon.alt" class="h-14 sm:h-16 text-base "
                  aria-hidden="true" />
              </div>
            </div>
            <div class="mt-8">
              <h3 class="text-base font-semibold leading-6 text-base ">
                <NuxtLink :to="capability.link" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true" />
                  <h2 class="text-xl font-extrabold leading-7 text-base "> {{ capability.name }}
                  </h2>
                  <span class="mt-2 text-base leading-7 text-base " v-html="capability.description">
                  </span>
                </NuxtLink>
              </h3>
            </div>
            <span class="pointer-events-none absolute right-6 top-6 text-base  group-hover:text-nav-active "
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

import DiagonalArrow from 'assets/icons/DiagonalArrow.vue'

const props = defineProps({
  capabilities: {
    type: Array,
    required: true,
  },
})

const { capabilities } = toRefs(props)

</script>