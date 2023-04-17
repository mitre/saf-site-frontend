<template>
  <div>
    <div class="bg-gray-50 dark:bg-gray-800 mx-auto py-6 px-6 lg:py-16 lg:px-8 lg:max-w-4xl md:max-w-xl max-w-sm">
      <div class="overflow-hidden rounded-lg  dark:bg-gray-800 mx-auto grid w-full max-w-3xl grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center sm:gap-px sm:divide-y-0 gap-y-12 gap-x-10 sm:gap-x-2 sm:gap-y-14 lg:mx-0 lg:max-w-none">
        <div v-for="(entry) in data" :key="entry.orderID" class="group relative hover:bg-gray-200 dark:hover:bg-gray-800  bg-gray-50 dark:bg-gray-800 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 h-full">
          <div class="mt-4">
            <h3 class="text-base font-semibold leading-6 text-gray-900">
              <NuxtLink :to="entry.link" class="focus:outline-none">
                <div class="aspect-auto">
                  <img :src="entry.icon.url" :alt="entry.icon.name" class="max-h-24 object-cover  text-black mx-auto" aria-hidden="true" />
                </div>
                <p class="dark:text-white mt-6 text-center hidden md:flex">{{ entry.nameLong  }}</p>
                <p class="dark:text-white mt-6 text-center flex md:hidden">{{ entry.name  }}</p>
              </NuxtLink>
            </h3>
          </div>
          <span class="pointer-events-none absolute right-6 top-6 sm:right-0 sm:top-0 text-gray-300 dark:text-gray-100 group-hover:text-blue-500" aria-hidden="true">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
})

const { data } = toRefs(props)

</script>