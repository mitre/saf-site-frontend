<template>
  <div>
    <div class="relative bg-light-backdrop-secondary dark:bg-dark-backdrop-secondary py-24 sm:py-32 lg:py-40">
      <div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <div class="flex-row mx-auto max-w-3xl text-left">
          <h1
            class="mt-2 max-w-prose sm:text-4xl text-3xl tracking-tight font-bold text-light-header dark:text-dark-header">
            Our Open Source Toolset
          </h1>
          <p class="mt-5 max-w-prose sm:text-xl text-lg text-light-text dark:text-dark-text"> MITRE SAF maintains a
            toolset
            of utilities to support automation.</p>
          <p class="mt-5 max-w-prose sm:text-xl text-lg text-light-text dark:text-dark-text">
            SAF tools are built to be modular. Slot them into your existing pipelines and integrate them with your
            favorite security tools. You can use SAF tools on their own with no pipeline at all.
          </p>
        </div>
        <div class="mt-20">
          <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="tool in toolset" :key="tool.orderID"
              class="pt-6 bg-light-backdrop-primary dark:bg-dark-backdrop-primary hover:bg-light-backdrop-secondary dark:hover:bg-dark-backdrop-primary border-2 hover:border-nav-light-active dark:hover:border-nav-dark-active border-light-backdrop-tertiary dark:border-dark-backdrop-quaternary">
              <NuxtLink :to="tool.link">
                <div class="flow-root rounded-lg px-6 pb-8">
                  <div>
                    <div
                      class="inline-flex items-center justify-center rounded-xl bg-light-backdrop-secondary dark:bg-dark-backdrop-tertiary p-6 shadow-lg">
                      <img :src="tool.icon.url" class="max-w-full w-16 h-16" :alt="tool.icon.alt" />
                    </div>
                    <h3 class="mt-8 text-lg font-bold leading-8 tracking-tight text-light-text dark:text-dark-text">{{
                      tool.name }}</h3>
                    <p class="mt-5 text-left ml-8 text-base leading-7 text-light-text dark:text-dark-text"
                      v-html="tool.description"></p>
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
