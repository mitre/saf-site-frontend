<template>
  <div>
    <!-- Guidance Content -->
    <div
      class="mx-auto mt-8 max-w-5xl overflow-hidden bg-neutral-2 shadow sm:rounded-lg"
    >
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-xl font-bold leading-6">Guidance Overview</h3>
        <p class="mt-1 max-w-2xl text-lg text-muted">
          Extra details for the guidance overview.
        </p>
      </div>
      <div class="font-semibold sm:flex">
        <div class="flex-1 border-t border-accent">
          <div>
            <div
              class="flex grid-cols-3 flex-col gap-4 border-b bg-neutral-1 px-4 py-5 sm:grid"
            >
              <span class="underline sm:no-underline">Category</span>
              <span class="mt-1 sm:col-span-2 sm:mt-0"
                >{{ guidance.category.replaceAll('_', ' ') }}
              </span>
            </div>
            <div
              class="flex grid-cols-3 flex-col gap-4 border-b bg-neutral-2 px-4 py-5 sm:grid"
            >
              <span class="underline sm:no-underline">Name</span>
              <span class="mt-1 sm:col-span-2 sm:mt-0">{{
                guidance.name
              }}</span>
            </div>
            <div
              class="flex grid-cols-3 flex-col gap-4 border-b bg-neutral-1 px-4 py-5 sm:grid"
            >
              <span class="underline sm:no-underline">Version</span>
              <span
                v-if="guidance.version != 0"
                class="mt-1 sm:col-span-2 sm:mt-0"
                >{{ guidance.version }}</span
              >
              <span v-else class="mt-1 sm:col-span-2 sm:mt-0"> N/A </span>
            </div>
            <div
              class="flex grid-cols-3 flex-col gap-4 border-b bg-neutral-2 px-4 py-5 sm:grid"
            >
              <span class="underline sm:no-underline">Type</span>
              <span class="mt-1 sm:col-span-2 sm:mt-0">{{
                guidance.type
              }}</span>
            </div>
            <div
              class="flex grid-cols-3 flex-col gap-4 border-b bg-neutral-1 px-4 py-5 sm:grid"
            >
              <span class="underline sm:no-underline">Date</span>
              <span v-if="guidance.date" class="mt-1 sm:col-span-2 sm:mt-0">{{
                guidance.date
              }}</span>
              <span v-else class="mt-1 sm:col-span-2 sm:mt-0"> N/A </span>
            </div>
            <div
              class="flex grid-cols-3 flex-col gap-4 border-b bg-neutral-2 px-4 py-5 sm:grid"
            >
              <span class="underline sm:no-underline">Url</span>
              <a
                class="hover:text-nav-light-active dark:hover:text-nav-dark-active mt-1 flex items-center after:content-['_↗'] hover:underline sm:col-span-2 sm:mt-0"
                target="_blank"
                :href="guidance.source"
                >{{ guidance.source }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Harden / Validate Content -->
      <div class="overflow-hidden border-t-2 border-accent bg-neutral-2 shadow">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg font-bold leading-6">Related Content</h3>
          <p class="mt-1 max-w-2xl text-lg text-muted">
            Related hardening and validation content for the guidance.
          </p>
        </div>
        <hr class="my-1 h-px border-0 bg-neutral-1" />
        <div
          class="border-b-2 border-neutral-1 bg-neutral-2 px-4 py-5 sm:flex sm:gap-4 sm:px-6"
        >
          <div class="flex-1">
            <span class="text-center font-bold">Harden</span>
          </div>
          <div class="flex-1">
            <div class="hidden sm:block">
              <span class="text-center font-bold">Validate</span>
            </div>
          </div>
        </div>
        <div class="h-full font-semibold sm:flex md:max-h-96">
          <div
            v-if="guidance.hardening != null"
            class="flex-1 overflow-y-scroll border-r-2 border-neutral-1"
          >
            <div v-for="hardening in guidance.hardening" :key="hardening.name">
              <div
                class="border-b bg-neutral-1 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6"
              >
                <span class="flex items-center underline sm:no-underline"
                  >Name</span
                >
                <div class="flex items-center">
                  <span class="mt-1 sm:col-span-2 sm:ml-3 sm:mt-0">
                    {{ hardening.name }}
                  </span>
                </div>
              </div>
              <div
                class="border-b bg-neutral-2 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6"
              >
                <span class="flex items-center underline sm:no-underline"
                  >Platform
                </span>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="hardening.platform.icon.url"
                      :alt="hardening.platform.icon.name"
                    />
                  </div>
                  <a
                    class="hover:text-nav-light-active dark:hover:text-nav-dark-active ml-3 mt-1 hover:underline sm:col-span-2 sm:mt-0"
                    target="_blank"
                    :href="hardening.platform.link"
                    >{{ hardening.platform.name }}</a
                  >
                </div>
              </div>
              <div
                class="border-b bg-neutral-1 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6"
              >
                <span class="flex items-center underline sm:no-underline"
                  >Partner</span
                >
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="hardening.partner.icon.url"
                      :alt="hardening.partner.icon.name"
                    />
                  </div>
                  <a
                    class="hover:text-nav-light-active dark:hover:text-nav-dark-active ml-3 mt-1 hover:underline sm:col-span-2 sm:mt-0"
                    target="_blank"
                    :href="hardening.partner.link"
                    >{{ hardening.partner.name }}</a
                  >
                </div>
              </div>
              <div
                class="border-b bg-neutral-2 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6"
              >
                <span class="flex items-center underline sm:no-underline"
                  >Last Updated
                </span>
                <div class="flex items-center">
                  <span class="mt-1 sm:col-span-2 sm:ml-3 sm:mt-0">
                    {{ hardening.last_update }}
                  </span>
                </div>
              </div>
              <div
                class="border-b-4 border-accent bg-neutral-1 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6"
              >
                <span class="flex items-center underline sm:no-underline"
                  >Link</span
                >
                <a
                  class="hover:text-nav-light-active dark:hover:text-nav-dark-active mt-1 inline-block items-center break-all after:content-['_↗'] hover:underline sm:col-span-1 sm:mt-0"
                  target="_blank"
                  :href="hardening.source"
                >
                  {{ hardening.source }}
                </a>
              </div>
            </div>
          </div>
          <div class="flex-1 overflow-y-auto border-r-2 border-neutral-1">
            <div class="sm:hidden">
              <!-- Mobile Formatting -->
              <hr class="h-px border-0 bg-neutral-1" />
              <div
                class="border-b-2 border-neutral-1 bg-neutral-2 px-4 py-5 sm:flex sm:gap-4 sm:px-6"
              >
                <div class="flex-1">
                  <span class="text-center font-medium">Validate</span>
                </div>
              </div>
            </div>
            <div v-if="guidance.validation != null">
              <div
                v-for="validation in guidance.validation"
                :key="validation.name"
                class="overflow-y-scroll"
              >
                <div
                  class="border-b bg-neutral-1 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6"
                >
                  <span class="flex items-center underline sm:no-underline"
                    >Name</span
                  >
                  <div class="flex items-center">
                    <span class="mt-1 sm:col-span-2 sm:ml-3 sm:mt-0">
                      {{ validation.name }}
                    </span>
                  </div>
                </div>
                <div
                  class="border-b bg-neutral-2 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6"
                >
                  <span class="flex items-center underline sm:no-underline"
                    >Platform
                  </span>
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full"
                        :src="validation.platform.icon.url"
                        :alt="validation.platform.icon.name"
                      />
                    </div>
                    <a
                      class="hover:text-nav-light-active dark:hover:text-nav-dark-active ml-3 mt-1 hover:underline sm:col-span-2 sm:mt-0"
                      target="_blank"
                      :href="validation.platform.link"
                      >{{ validation.platform.name }}</a
                    >
                  </div>
                </div>
                <div
                  class="border-b bg-neutral-1 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6"
                >
                  <span class="flex items-center underline sm:no-underline"
                    >Partner
                  </span>
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full"
                        :src="validation.partner.icon.url"
                        :alt="validation.partner.icon.name"
                      />
                    </div>
                    <a
                      class="hover:text-nav-light-active dark:hover:text-nav-dark-active ml-3 mt-1 hover:underline sm:col-span-2 sm:mt-0"
                      target="_blank"
                      :href="validation.partner.link"
                      >{{ validation.partner.name }}</a
                    >
                  </div>
                </div>
                <div
                  class="border-b bg-neutral-2 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6"
                >
                  <span class="flex items-center underline sm:no-underline"
                    >Last Updated
                  </span>
                  <div class="flex items-center">
                    <span class="mt-1 sm:col-span-2 sm:ml-3 sm:mt-0">
                      {{ validation.last_update }}
                    </span>
                  </div>
                </div>
                <div
                  class="border-b-4 border-accent bg-neutral-1 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6"
                >
                  <span class="flex items-center underline sm:no-underline"
                    >Link</span
                  >
                  <a
                    class="hover:text-nav-light-active dark:hover:text-nav-dark-active mt-1 inline-block items-center break-all after:content-['_↗'] hover:underline sm:col-span-1 sm:mt-0"
                    target="_blank"
                    :href="validation.source"
                  >
                    {{ validation.source }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  guidance: {
    type: Object,
    required: true
  }
});

const {guidance} = toRefs(props);
</script>
