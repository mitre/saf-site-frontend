<template>
  <div>
    <div class="bg-white dark:bg-dark-bg py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">Jump Start Your Security Journey</p>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-dark-text">MITRE SAF(c) offers open-source support for multiple workflow capabilities.</p>
        </div>
        <!-- <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-24 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 ">
            <div v-for="capability in capabilities.slice(0,-1)" :key="capability.orderID" class="relative rounded-md dark:border-gray-700 shadow-md border-2 p-4">
              <NuxtLink :to="capability.link">
                <dt class="flex items-center ">
                  <div class="relative flex items-center justify-center rounded-lg mr-5">
                      <img :src="capability.icon.url" :alt="capability.icon.name" class="h-14 sm:h-20 text-white" aria-hidden="true" />
                  </div>
                  <div class="flex-1">
                    <p class="text-large font-semibold leading-7 text-gray-900 dark:text-gray-100"> {{ capability.name }} </p>
                    <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-dark-text" v-html="capability.description"></dd>
                  </div>
                </dt>
              </NuxtLink>
            </div>
          </dl>
        </div> -->
        <!-- <div class="mx-auto mt-12 max-w-2xl lg:mt-24 lg:max-w-6xl lg:w-5/12">
          <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-4 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
            <div v-for="capability in capabilities.slice(-1)" :key="capability.orderID" class="relative rounded-md dark:border-gray-700 shadow-md border-2 p-4">
              <NuxtLink :to="capability.link">
                <dt class="flex items-center">
                  <div class="relative flex items-center justify-center rounded-lg mr-5">
                      <img :src="capability.icon.url" :alt="capability.icon.name" class="h-14 sm:h-20 text-white" aria-hidden="true" />
                  </div>
                  <div class="flex-1">
                    <p class="text-large font-semibold leading-7 text-gray-900 dark:text-gray-100"> {{ capability.name }} </p>
                    <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-dark-text" v-html="capability.description"></dd>
                  </div>
                </dt>
              </NuxtLink>
            </div>
          </dl>
        </div> -->

        <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 dark:bg-dark-bg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 mt-8">
          <div v-for="(capability) in capabilities" :key="capability.orderID" :class="[capability.orderID === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '', capability.orderID === 1 ? 'sm:rounded-tr-lg' : '', capability.orderID === capabilities.length - 2 ? 'sm:rounded-bl-lg' : '', capability.orderID === capabilities.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '', 'group relative bg-white dark:bg-gray-700 p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500']">
            <div>
              <div class="inline-flex rounded-lg p-3 ring-4 ring-white">
                <img :src="capability.icon.url" :alt="capability.icon.name" class="h-14 sm:h-16 text-white" aria-hidden="true" />
              </div>
            </div>
            <div class="mt-8">
              <h3 class="text-base font-semibold leading-6 text-gray-900">
                <NuxtLink :to="capability.link" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-large font-semibold leading-7 text-gray-900 dark:text-gray-100"> {{ capability.name }} </p>
                  <dd class="mt-2 text-base leading-7 text-gray-600 dark:text-dark-text" v-html="capability.description"></dd>
                </NuxtLink>
              </h3>
            </div>
            <span class="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>  

const props = defineProps({
    capabilities: {
        type: Array,
        required: true,
    },
})

const { capabilities } = toRefs(props)

</script>