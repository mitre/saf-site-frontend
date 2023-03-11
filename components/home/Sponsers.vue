<template>
  <div>
    <div class="bg-white mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        <div v-if=left>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ partners_h2 }}</h2>
          <p class="mt-3 max-w-3xl text-lg text-gray-500">{{ partners_desc }}</p>
        </div>
        <div class="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
          <div v-for="partner in partners" :key="partner.name" class="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
            <a :href="partner.link" target="_blank">
              <img class="max-h-12" :src="partner.icon" :alt="partner.name" />
            </a>
          </div>
        </div>
        <div v-if=!left>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{{ partners_h2 }}</h2>
          <p class="mt-3 max-w-3xl text-lg text-gray-500">{{ partners_desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    const props = defineProps({
      partners: { type: Array },
      partners_h2: { type: String },
      partners_desc: { type: String }
    });
</script>