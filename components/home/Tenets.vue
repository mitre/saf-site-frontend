<template>
  <div class="bg-neutral-1 px-6">
    <div class="relative py-24 sm:py-32 lg:py-40">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h1
            class="mt-2 text-3xl font-bold tracking-tight text-header sm:text-4xl"
          >
            The SAF Is
          </h1>
        </div>
        <div class="mt-24 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
          <div
            v-for="tenet in tenets"
            :key="tenet.orderID"
            class="flex max-w-sm gap-y-4 lg:mx-auto"
          >
            <div class="px-2">
              <div class="flex items-center">
                <CurrencyDollarIcon
                  v-if="tenet.name === 'Free'"
                  class="mr-2 h-12 w-12"
                />
                <BeakerIcon
                  v-else-if="tenet.name === 'Open Source'"
                  class="mr-2 h-12 w-12"
                />
                <GlobeIcon
                  v-else-if="tenet.name === 'Community Project'"
                  class="mr-2 h-12 w-12"
                />
                <AnnotationIcon v-else class="mr-2 h-12 w-12" />
                <div
                  class="text-start text-2xl font-extrabold tracking-tight sm:text-3xl"
                >
                  {{ tenet.name }}
                </div>
              </div>
              <div
                class="prose dark:prose-invert mt-3 text-start text-lg leading-7"
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
  BeakerIcon,
  AnnotationIcon
} from '@heroicons/vue/outline';
import {Tenet} from 'global';

const props = defineProps({
  tenets: {
    type: Array<Tenet>,
    required: true
  }
});

const {tenets} = toRefs(props);
</script>
