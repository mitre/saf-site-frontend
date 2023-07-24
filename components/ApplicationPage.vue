<template>
  <div class="min-h-[calc(100vh-252px)]">
    <div class="relative h-full px-4 pt-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-7xl text-center">
        <img
          :src="`${productIcon}`"
          class="aspect-square mx-auto my-2 w-14 md:w-20"
          aria-hidden="true"
          alt="Alt text here"
        />
        <h2 class="text-4xl font-bold tracking-tight text-header sm:text-4xl">
          {{ title }}
        </h2>
        <h3 class="mx-auto mt-6 text-center leading-8">
          {{ grabber }}
        </h3>
        <div
          class="prose mx-auto mt-8 max-w-none text-left leading-8 dark:prose-invert"
          v-html="description"
        ></div>
      </div>
    </div>
    <div class="mx-auto mb-10 sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <div class="mt-16 space-y-16">
          <div
            v-for="(feature, featureIdx) in features"
            :key="feature.name"
            :class="[
              featureIdx % 2 === 0 ? '' : 'bg-neutral-2 ',
              'flex flex-col-reverse p-4 lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8'
            ]"
          >
            <div
              :class="[
                featureIdx % 2 === 0
                  ? 'lg:col-start-1 lg:ml-10'
                  : 'lg:col-start-8 lg:mr-10 xl:col-start-9',
                'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 '
              ]"
            >
              <h3 class="text-2xl font-bold">{{ feature.name }}</h3>
              <p class="mt-2 text-lg">{{ feature.description }}</p>
            </div>
            <div
              :class="[
                featureIdx % 2 === 0
                  ? 'lg:col-start-6 lg:mr-10 xl:col-start-5'
                  : 'lg:col-start-1 lg:ml-10',
                'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8 '
              ]"
            >
              <div
                class="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg drop-shadow-2xl"
              >
                <img
                  :src="feature.imageSrc"
                  :alt="feature.imageAlt ?? 'Unknown Image'"
                  class="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/// /  Data  ////
const props = defineProps({
  productIcon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  grabber: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  features: {
    type: Array<ApplicationPageFeature>,
    required: true
  }
});

const {title, grabber, description, features, productIcon} = toRefs(props);
</script>
