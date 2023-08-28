<template>
  <div>
    <div class="relative bg-neutral-1 py-12">
      <div
        class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8"
      >
        <div class="mx-auto max-w-3xl flex-row text-left">
          <h2
            class="mt-2 max-w-prose text-center text-3xl font-bold tracking-tight text-header sm:text-4xl"
          >
            {{ title }}
          </h2>
        </div>
        <div class="mt-12">
          <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
            <div
              v-for="item in data"
              :key="item.id"
              class="border-2 border-neutral-3 bg-neutral-1 pt-6 hover:border-nav-active hover:bg-neutral-2"
            >
              <NuxtLink :to="item.link">
                <div
                  class="flex h-full flex-col justify-between rounded-lg px-6 pb-8"
                >
                  <div
                    class="inline-flex w-full items-center justify-center rounded-xl bg-neutral-2 p-4 shadow-lg dark:bg-white h-1/2"
                  >
                    <img
                      :src="item.icon.url ?? ''"
                      :alt="item.icon.alt ?? 'Unknown Image'"
                      class="aspect-auto m-6 max-h-24 rounded-lg object-cover dark:bg-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    class="pt-8 text-2xl font-bold leading-8 tracking-tight h-1/2"
                  >
                    {{ item.nameLong }}
                  </h3>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {LogoCloudEntry} from 'global';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  data: {
    type: Array<LogoCloudEntry>,
    required: true
  }
});

const {title, data} = toRefs(props);
</script>
