<template>
  <div class="my-10">
    <div
      class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8"
    >
      <div class="mx-auto max-w-3xl flex-row text-left">
        <h1
          class="mt-2 max-w-prose text-3xl font-bold tracking-tight text-center text-header sm:text-4xl"
        >
          Our Documentation Collection
        </h1>
        <!-- <p class="mt-5 max-w-prose text-lg sm:text-xl">
            MITRE SAF <sup>©</sup> maintains a toolset of utilities to support automation.
          </p>
          <p class="mt-5 max-w-prose text-lg sm:text-xl">
            MITRE SAF <sup>©</sup> tools are built to be modular. Slot them into your existing
            pipelines and integrate them with your favorite security tools. You
            can use MITRE SAF <sup>©</sup> tools on their own with no pipeline at all.
          </p> -->
      </div>
      <div class="mt-20">
        <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(elem, index) in collection"
            :key="index"
            class="border-2 border-neutral-3 bg-neutral-1 pt-6 hover:border-nav-active hover:bg-opacity-60"
          >
            <NuxtLink :to="elem.link">
              <div class="flow-root rounded-lg px-6 pb-8">
                <div>
                  <div
                    class="inline-flex items-center justify-center rounded-xl bg-neutral-2 p-6 shadow-lg"
                  >
                    <component
                      :is="elem.icon"
                      class="h-12 w-12 flex-shrink-0 text-fill"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 class="mt-8 text-xl font-bold leading-8 tracking-tight">
                    {{ elem.name }}
                  </h3>
                  <p
                    class="ml-8 mt-5 text-left leading-7"
                    v-html="elem.description"
                  ></p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/*   Data   */
const props = defineProps({
  collection: {
    type: Array,
    required: true
  }
});

const {collection} = toRefs(props);
</script>
