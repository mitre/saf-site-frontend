<template>
  <div>
    <div class="relative bg-gray-50 dark:bg-gray-800 py-24 sm:py-32 lg:py-40">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <p class="mt-2 text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl">The SAF Is</p>
        </div>
        <dl class="mt-24 grid grid-cols-1  gap-y-16 gap-x-8 lg:grid-cols-3">
          <div v-for="tenet in tenets" :key="tenet.orderID" class="lg:mx-auto flex max-w-sm gap-y-4">
            <div class="px-2">
              <div class="flex items-center"> 
                <img :src=tenet.icon.url :alt="tenet.icon.name" class="h-12 w-12 mr-2" />
                <dd class="text-start text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xls">{{ tenet.name }}</dd>
              </div>
              <dd class="text-start mt-3 leading-7 text-gray-600 dark:text-dark-text" v-html="tenet.description"></dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>  


const props = defineProps({
    tenets: {
        type: Array,
        required: true,
    },
})

const { tenets } = toRefs(props)

</script>