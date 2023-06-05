<template>
  <div class="bg-light-backdrop-primary dark:bg-dark-backdrop-primary px-6">
    <div class="relative py-24 sm:py-32 lg:py-40">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-light-header dark:text-dark-header sm:text-4xl">The SAF
            Is
          </h1>
        </div>
        <dl class="mt-24 grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-3">
          <div v-for="tenet in tenets" :key="tenet.orderID" class="lg:mx-auto flex max-w-sm gap-y-4">
            <div class="px-2">
              <div class="flex items-center">
                <CurrencyDollarIcon v-if="tenet.name === 'Free'"
                  class="h-12 w-12 mr-2 text-light-text dark:text-dark-text" />
                <BeakerIcon v-if="tenet.name === 'Open Source'"
                  class="h-12 w-12 mr-2 text-light-text dark:text-dark-text" />
                <GlobeIcon v-if="tenet.name === 'Community Project'"
                  class="h-12 w-12 mr-2 text-light-text dark:text-dark-text" />
                <AnnotationIcon v-else class="h-12 w-12 mr-2 text-light-text dark:text-dark-text" />
                <dd
                  class="text-start text-2xl font-semibold tracking-tight text-light-text dark:text-dark-text sm:text-3xls">
                  {{ tenet.name }}</dd>
              </div>
              <dd class="text-start mt-3 leading-7 text-light-text dark:text-dark-text" v-html="tenet.description"></dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GlobeIcon, CurrencyDollarIcon, BeakerIcon, AnnotationIcon } from '@heroicons/vue/outline';

const props = defineProps({
  tenets: {
    type: Array,
    required: true,
  },
})

const { tenets } = toRefs(props)

</script>