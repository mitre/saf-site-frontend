<template>
  <div class="px-6">
    <div class=" mx-auto py-6 px-6 lg:py-12 lg:max-w-7xl md:max-w-2xl max-w-md">
      <div
        class="overflow-hidden rounded-lg bg-light-backdrop-primary dark:bg-dark-backdrop-primary mx-auto grid w-full max-w-3xl lg:max-w-none grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 items-center sm:gap-px sm:divide-y-0 gap-y-12 gap-x-10 sm:gap-x-6 sm:gap-y-14 lg:mx-0 lg:gap-x-6 ">
        <div v-for="(entry) in data" :key="entry.orderID"
          class=" group relative hover:bg-light-backdrop-tertiary dark:hover:bg-dark-backdrop-tertiary bg-light-backdrop-secondary dark:bg-dark-backdrop-secondary focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 h-full border-2 border-light-border-primary dark:border-dark-border-primary">
          <div class="mt-6 sm:mt-6">
            <h3 class="text-base font-semibold leading-6 text-light-text dark:text-dark-text">
              <NuxtLink :to="entry.link" class="focus:outline-none">
                <div class="aspect-auto">
                  <img :src="entry.icon.url" :alt="entry.icon.name"
                    class="max-h-24 object-cover text-light-text dark:text-dark-text mx-auto" aria-hidden="true" />
                </div>
                <p class="text-light-text dark:text-dark-text mt-6 text-center hidden md:block">{{ entry.nameLong }}</p>
                <p class="text-light-text dark:text-dark-text mt-6 text-center md:hidden">{{ entry.name }}</p>
              </NuxtLink>
            </h3>
          </div>
          <span
            class="pointer-events-none absolute right-0 top-0 sm:right-0 sm:top-0 text-light-text dark:text-dark-text group-hover:text-nav-light-active dark:group-hover:text-nav-dark-active"
            aria-hidden="true">
            <DiagonalArrow />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import DiagonalArrow from 'assets/DiagonalArrow.vue'

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
})

const { data } = toRefs(props)

</script>