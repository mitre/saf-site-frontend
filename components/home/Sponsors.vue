<template>
  <div class="px-6">
    <div class="mx-auto max-w-md px-6 py-6 md:max-w-2xl lg:max-w-7xl lg:py-12">
      <div
        class="mx-auto grid w-full max-w-3xl grid-cols-2 items-center gap-x-10 gap-y-12 overflow-hidden rounded-lg bg-neutral-1 sm:gap-px sm:gap-x-6 sm:gap-y-14 sm:divide-y-0 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:gap-x-6 xl:grid-cols-7"
      >
        <div
          v-for="entry in data"
          :key="entry.orderID"
          class="group relative h-full border-2 border-accent bg-neutral-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 hover:bg-neutral-3"
        >
          <div class="mt-6 sm:mt-6">
            <h3 class="text-base font-semibold leading-6">
              <NuxtLink :to="entry.link" class="focus:outline-none">
                <div class="aspect-auto">
                  <img
                    :src="entry.icon.url"
                    :alt="entry.icon.alt"
                    class="mx-auto max-h-24 object-cover text-base"
                    aria-hidden="true"
                  />
                </div>
                <p class="mt-6 hidden text-center text-base md:block">
                  {{ entry.nameLong }}
                </p>
                <p class="mt-6 text-center text-base md:hidden">
                  {{ entry.name }}
                </p>
              </NuxtLink>
            </h3>
          </div>
          <span
            class="pointer-events-none absolute right-0 top-0 text-base group-hover:text-nav-active sm:right-0 sm:top-0"
            aria-hidden="true"
          >
            <DiagonalArrow />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DiagonalArrow from 'assets/icons/DiagonalArrow.vue';

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
});

const {data} = toRefs(props);
</script>
