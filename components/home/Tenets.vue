<template>
  <div class="bg-neutral-1 px-6">
    <div class="relative py-24 sm:py-32 lg:py-40">
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h1
            class="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-header"
          >
            MITRE SAF <sup>©</sup> Is
          </h1>
        </div>
        <div class="mt-24 grid grid-cols-1 gap-y-16 lg:grid-cols-3">
          <div
            v-for="tenet in tenets"
            :key="tenet.orderID"
            class="flex max-w-sm gap-y-4 lg:mx-auto"
          >
            <div class="px-5">
              <div class="flex items-center">
                <CurrencyDollarIcon
                  v-if="tenet.name === 'Free'"
                  class="mr-1 h-12 w-12"
                />
                <OsiKeyhole
                  v-else-if="tenet.name === 'Open Source'"
                  class="mr-1 h-12 w-12 dark:fill-white fill-black dark:stroke-white stroke-black"
                />
                <GlobeIcon
                  v-else-if="tenet.name === 'A Community'"
                  class="mr-1 h-12 w-12"
                />
                <AnnotationIcon v-else class="mr-1 h-12 w-12" />
                <div
                  class="text-start text-4xl font-extrabold tracking-tight sm:text-4xl"
                >
                  {{ tenet.name }}
                </div>
              </div>
              <div
                class="prose prose-lg dark:prose-invert mt-3 text-start text-xl leading-7"
                v-html="tenet.description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  GlobeIcon,
  CurrencyDollarIcon,
  AnnotationIcon
} from '@heroicons/vue/outline';
import OsiKeyhole from '@/assets/icons/OsiKeyhole.vue';

/*   Data   */
const props = defineProps({
  tenets: {
    type: Array<Tenet>,
    required: true
  }
});

const {tenets} = toRefs(props);
</script>
