<template>
  <div>
    <div class="bg-gray-50 dark:bg-gray-700 mx-auto py-12 px-6 lg:py-16 lg:px-8 lg:max-w-4xl md:max-w-xl max-w-sm">

      <div class="mx-auto grid w-full max-w-2xl grid-cols-2 lg:grid-cols-3 items-center gap-y-12 gap-x-8 sm:gap-y-14 lg:mx-0 lg:max-w-none">
        <div v-for="entry in data" :key="entry" class="text-center">
          <NuxtLink :to="entry.link" target="_blank" class="flex-1 items-center mx-8" >
            <img :src="entry.icon.url" :alt="entry.icon.name" class="h-16 sm:h-20 object-contain 4 object-center mx-auto aspect-auto dark:bg-gray-700" />
            <p class="dark:text-white mt-6 mx-8">{{ entry.nameLong  }}</p>
          </NuxtLink>
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