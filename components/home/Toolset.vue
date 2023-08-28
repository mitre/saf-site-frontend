<template>
  <div>
    <div class="relative bg-neutral-2 py-24 sm:py-32 lg:py-40">
      <div
        class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8"
      >
        <div class="mx-auto max-w-5xl flex-row text-center">
          <h1
            class="mt-2 text-5xl sm:text-6xl font-bold tracking-tight text-header"
          >
            The MITRE SAF<sup>©</sup> Open Source Toolset
          </h1>
          <p class="mt-5 text-lg sm:text-xl">
            MITRE SAF<sup>©</sup> maintains a toolset of utilities that support
            security automation.
          </p>
          <p class="mt-5 text-lg sm:text-xl">
            MITRE SAF<sup>©</sup> tools are built to be modularand enhance 
            rather than replace existing toolsets. Slot them into your 
            existing pipelines and or use them to enhance your favorite
            security tools. You can use MITRE SAF<sup>©</sup> tools on their
            own with or without a pipeline.
          </p>
        </div>
        <div class="mt-20">
          <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="tool in toolset"
              :key="tool.orderID"
              class="border-2 border-neutral-3 bg-neutral-1 pt-6 hover:border-nav-active hover:bg-opacity-60"
            >
              <NuxtLink :to="tool.link">
                <div class="flow-root rounded-lg px-6 pb-8">
                  <div>
                    <div
                      class="inline-flex items-center justify-center rounded-xl bg-neutral-2 p-6 shadow-lg"
                    >
                      <img
                        :src="tool.icon.url ?? ''"
                        class="h-16"
                        :alt="tool.icon.alt ?? 'Unknown Image'"
                      />
                    </div>
                    <h3
                      class="mt-8 text-2xl font-bold leading-8 tracking-tight"
                    >
                      {{ tool.name }}
                    </h3>
                    <p
                      class="ml-8 mt-5 text-xl text-left leading-7"
                      v-html="tool.description"
                    ></p>
                  </div>
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
import {Toolset} from 'global';

const props = defineProps({
  toolset: {
    type: Array<Toolset>,
    required: true
  }
});

const {toolset} = toRefs(props);
</script>
