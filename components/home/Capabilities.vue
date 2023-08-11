<template>
  <div class="bg-neutral-2 px-6">
    <div class="py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-6xl lg:text-center">
          <h1
            class="mt-2 text-5xl font-extrabold tracking-tight text-header sm:text-6xl"
          >
            Jump Start Your Security Journey
          </h1>
          <p class="mt-6 text-2xl leading-8">
            MITRE SAF© supports security processes at all stages of the
            software lifecycle, from planning secure system design to analyzing
            operational security data. All of MITRE SAF©'s tools can work in
            concert or standalone; adopt the parts of the Framework that make
            sense for your environment.
          </p>
        </div>
        <div
          class="mt-8 divide-y divide-accent overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0"
        >
          <div
            v-for="capability in capabilities.slice(0, -1)"
            :key="capability.orderID"
            :class="[
              capability.orderID === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : '',
              capability.orderID === 1 ? '' : '',
              capability.orderID === capabilities.length - 2
                ? 'sm:rounded-bl-lg'
                : '',
              capability.orderID === capabilities.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              'group relative bg-neutral-1  p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 hover:bg-opacity-60 '
            ]"
          >
            <div>
              <div class="inline-flex rounded-lg p-3 ring-4 ring-accent">
                <img
                  :src="capability.icon.url ?? ''"
                  :alt="capability.icon.alt ?? 'Unknown Image'"
                  class="h-14 sm:h-16"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div class="mt-8">
              <h3 class="font-semibold leading-6">
                <NuxtLink :to="capability.link" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true" />
                  <h2 class="text-2xl font-extrabold leading-7">
                    {{ capability.name }}
                  </h2>
                  <span class="mt-2 leading-7" v-html="capability.description">
                  </span>
                </NuxtLink>
              </h3>
            </div>
            <span
              class="pointer-events-none absolute right-6 top-6 group-hover:text-nav-active"
              aria-hidden="true"
            >
              <DiagonalArrow />
            </span>
          </div>
        </div>
        <div
          class="mt-0.5 divide-y divide-accent overflow-hidden rounded-lg shadow sm:mx-auto sm:grid sm:max-w-[50%] sm:gap-px sm:divide-y-0"
        >
          <div
            v-for="capability in capabilities.slice(-1)"
            :key="capability.orderID"
            :class="[
              capability.orderID === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : '',
              capability.orderID === 1 ? 'sm:rounded-tr-lg' : '',
              capability.orderID === capabilities.length - 2
                ? 'sm:rounded-bl-lg'
                : '',
              capability.orderID === capabilities.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              'group relative bg-neutral-1  p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 hover:bg-opacity-60 '
            ]"
          >
            <div>
              <div class="inline-flex rounded-lg p-3 ring-4 ring-accent">
                <img
                  :src="capability.icon.url ?? ''"
                  :alt="capability.icon.alt ?? 'Unknown Image'"
                  class="h-14 sm:h-16"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div class="mt-8">
              <h3 class="font-semibold leading-6">
                <NuxtLink :to="capability.link" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true" />
                  <h2 class="text-2xl font-extrabold leading-7">
                    {{ capability.name }}
                  </h2>
                  <span class="mt-2 leading-7" v-html="capability.description">
                  </span>
                </NuxtLink>
              </h3>
            </div>
            <span
              class="pointer-events-none absolute right-6 top-6 group-hover:text-nav-active"
              aria-hidden="true"
            >
              <DiagonalArrow />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DiagonalArrow from '@/assets/icons/DiagonalArrow.vue';
import {Capability} from 'global';

const props = defineProps({
  capabilities: {
    type: Array<Capability>,
    required: true
  }
});

const {capabilities} = toRefs(props);
</script>
