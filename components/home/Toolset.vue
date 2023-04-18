<template>
  <div>
    <div class="relative bg-white dark:bg-dark-bg py-24 sm:py-32 lg:py-40">
      <div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <div class="flex-row mx-auto  max-w-3xl text-left" >
          <p class="mt-2 max-w-prose sm:text-4xl text-3xl tracking-tight font-bold text-blue-700">Our Open Source Toolset</p>
          <p class="mt-5 max-w-prose sm:text-xl text-lg  text-gray-500 dark:text-gray-100"> MITRE SAF maintains a toolset of utilities to support automation.</p>
          <p class="mt-5 max-w-prose sm:text-xl text-lg text-gray-500 dark:text-dark-text">            
            SAF tools are built to be modular. Slot them into your existing pipelines and integrate them with your favorite security tools. You can use SAF tools on their own with no pipeline at all.
          </p>
        </div>
        <div class="mt-20">
          <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="tool in toolset" :key="tool.orderID" class="pt-6 bg-gray-50 hover:bg-gray-200 border-2 hover:border-blue-600 dark:hover:border-blue-600 dark:border-gray-700 dark:bg-dark-bg dark:hover:bg-gray-800">
              <NuxtLink :to="tool.link">
                <div class="flow-root rounded-lg  px-6 pb-8">
                    <div>
                      <div class="inline-flex items-center justify-center rounded-xl bg-gray-100 p-6 shadow-lg">
                          <img :src="tool.icon.url" class="max-w-full w-16 h-16" :alt="tool.icon.name" />
                      </div>
                    <h3 class="mt-8 text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">{{ tool.name }}</h3>
                    <p class="mt-5 text-left ml-8 text-base leading-7 text-gray-600 dark:text-dark-text" v-html="tool.description"></p>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
    toolset: {
        type: Array,
        required: true,
    },
})

const { toolset } = toRefs(props)

</script>
