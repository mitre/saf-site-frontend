<template>
  <div>
    <div class="bg-white dark:bg-dark-bg py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">Jump Start Your Security Journey</p>
          <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-dark-text">MITRE SAF(c) offers open-source support for multiple workflow capabilities.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
          <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-24 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div v-for="capability in capabilities.slice(0,-1)" :key="capability.orderID" class="relative">
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
        </div>
        <div class="mx-auto mt-12 max-w-2xl lg:mt-24 lg:max-w-6xl lg:w-5/12">
          <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-4 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
            <div v-for="capability in capabilities.slice(-1)" :key="capability.orderID" class="relative">
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