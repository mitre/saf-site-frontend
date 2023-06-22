<template>
  <div>
    <!-- Guidance Content -->
    <div
      class="overflow-hidden mx-auto max-w-5xl bg-light-backdrop-secondary dark:bg-dark-backdrop-secondary shadow sm:rounded-lg mt-8">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-light-text dark:text-dark-text">Guidance Overview</h3>
        <p class="mt-1 max-w-2xl text-sm text-light-subtext dark:text-dark-subtext">Extra details for the guidance
          overview.
        </p>
      </div>
      <div class="sm:flex">
        <div class="flex-1 border-t border-light-border-primary dark:border-dark-border-primary">
          <div>
            <div
              class="bg-light-backdrop-primary dark:bg-dark-backdrop-tertiary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span class="text-sm font-medium text-light-subtext dark:text-dark-subtext">Category</span>
              <span class="mt-1 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0">{{
                guidance.category.replaceAll('_', ' ') }}
              </span>
            </div>
            <div
              class="bg-light-backdrop-secondary dark:bg-dark-backdrop-quaternary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span class="text-sm font-medium text-light-subtext dark:text-dark-subtext">Name</span>
              <span class="mt-1 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0">{{ guidance.name
              }}</span>
            </div>
            <div
              class="bg-light-backdrop-primary dark:bg-dark-backdrop-tertiary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span class="text-sm font-medium text-light-subtext dark:text-dark-subtext">Version</span>
              <span v-if="guidance.version != 0"
                class="mt-1 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0">{{
                  guidance.version }}</span>
              <span v-else class="mt-1 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0"> N/A </span>
            </div>
            <div
              class="bg-light-backdrop-secondary dark:bg-dark-backdrop-quaternary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span class="text-sm font-medium text-light-subtext dark:text-dark-subtext">Type</span>
              <span class="mt-1 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0">{{ guidance.type
              }}</span>
            </div>
            <div
              class="bg-light-backdrop-primary dark:bg-dark-backdrop-tertiary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span class="text-sm font-medium text-light-subtext dark:text-dark-subtext">Date</span>
              <span v-if="guidance.date" class="mt-1 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0">{{
                guidance.date }}</span>
              <span v-else class="mt-1 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0"> N/A </span>
            </div>
            <div
              class="bg-light-backdrop-secondary dark:bg-dark-backdrop-quaternary px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span class="text-sm font-medium text-light-subtext dark:text-dark-subtext">Url</span>
              <a class="flex items-center after:content-['_↗'] mt-1 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0  hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
                target="_blank" :href="guidance.source">{{ guidance.source }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Harden / Validate Content -->
      <div class="overflow-hidden bg-light-backdrop-tertiary dark:bg-dark-backdrop-secondary shadow sm:rounded-lg ">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-light-text dark:text-dark-text">Related Content</h3>
          <p class="mt-1 max-w-2xl text-sm text-light-subtext dark:text-dark-subtext">Related hardening and validation
            content
            for the guidance.</p>
        </div>
        <hr class="my-1 h-px border-0 bg-light-backdrop-primary dark:bg-dark-backdrop-primary">
        <div class="sm:flex bg-light-backdrop-tertiary dark:bg-dark-backdrop-secondary px-4 py-5  sm:gap-4 sm:px-6">
          <div class="flex-1">
            <span class="text-sm text-center font-medium text-light-text dark:text-dark-text">Harden</span>
          </div>
          <div class="flex-1">
            <div class="hidden sm:block">
              <span class="text-sm text-center font-medium text-light-text dark:text-dark-text">Validate</span>
            </div>
          </div>
        </div>
        <div class="sm:flex md:max-h-96 h-full">
          <div
            class="flex-1 border-r-2 border-light-backdrop-primary dark:border-dark-backdrop-primary overflow-y-scroll">
            <div v-if="guidance.hardening != null" v-for="hardening in guidance.hardening">
              <div
                class="bg-light-backdrop-primary dark:bg-dark-backdrop-tertiary px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6">
                <span class="flex items-center text-sm font-medium text-light-subtext dark:text-dark-subtext">Name</span>
                <div class="flex items-center">
                  <span class="mt-1 sm:ml-3 text-sm text-light-text dark:text-dark-text  sm:col-span-2 sm:mt-0">
                    {{ hardening.name }}
                  </span>
                </div>
              </div>
              <div
                class="bg-light-backdrop-secondary dark:bg-dark-backdrop-quaternary px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span class="flex items-center text-sm font-medium text-light-subtext dark:text-dark-subtext">Platform
                </span>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="hardening.platform.icon.url"
                      :alt="hardening.platform.icon.name" />
                  </div>
                  <a class="mt-1 ml-3 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0 hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
                    target="_blank" :href="hardening.platform.link">{{ hardening.platform.name }}</a>
                </div>
              </div>
              <div
                class="bg-light-backdrop-primary dark:bg-dark-backdrop-tertiary px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span
                  class="flex items-center text-sm font-medium text-light-subtext dark:text-dark-subtext">Partner</span>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="hardening.partner.icon.url"
                      :alt="hardening.partner.icon.name" />
                  </div>
                  <a class="mt-1 ml-3 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0 hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
                    target="_blank" :href="hardening.partner.link">{{ hardening.partner.name }}</a>
                </div>
              </div>
              <div
                class="bg-light-backdrop-secondary dark:bg-dark-backdrop-quaternary px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6">
                <span class="flex items-center text-sm font-medium text-light-subtext dark:text-dark-subtext">Last
                  Updated
                </span>
                <div class="flex items-center">
                  <span class="mt-1 sm:ml-3 text-sm text-light-text dark:text-dark-text  sm:col-span-2 sm:mt-0">
                    {{ hardening.last_update }}
                  </span>
                </div>
              </div>
              <div
                class="bg-light-backdrop-primary dark:bg-dark-backdrop-tertiary border-b-4 border-light-backdrop-primary dark:border-dark-backdrop-primary px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span class="flex items-center text-sm font-medium text-light-subtext dark:text-dark-subtext">Link</span>
                <a class="inline-block break-all after:content-['_↗'] items-center mt-1 text-sm text-light-text dark:text-dark-text sm:col-span-1 sm:mt-0 hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
                  target="_blank" :href="hardening.source">
                  {{ hardening.source }}
                </a>
              </div>
            </div>
          </div>
          <div
            class="flex-1 border-r-2 border-light-backdrop-primary dark:border-dark-backdrop-quaternary overflow-y-auto">
            <div class="sm:hidden"> <!-- Mobile Formatting -->
              <hr class="h-px border-0 bg-light-backdrop-primary dark:bg-dark-backdrop-primary">
              <div class="sm:flex bg-light-backdrop-tertiary dark:bg-dark-backdrop-secondary px-4 py-5 sm:gap-4 sm:px-6">
                <div class="flex-1">
                  <span class="text-sm text-center font-medium text-light-text dark:text-dark-text">Validate</span>
                </div>
              </div>
            </div>
            <div v-if="guidance.validation != null" v-for="validation in guidance.validation"
              class="border-r-2 border-light-backdrop-primary dark:border-dark-backdrop-primary overflow-y-scroll">
              <div
                class="bg-light-backdrop-primary dark:bg-dark-backdrop-tertiary px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span class="flex items-center text-sm font-medium text-light-subtext dark:text-dark-subtext">Name</span>
                <div class="flex items-center">
                  <span class="mt-1 sm:ml-3 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0">
                    {{ validation.name }}
                  </span>
                </div>
              </div>
              <div
                class="bg-light-backdrop-secondary dark:bg-dark-backdrop-quaternary px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span class="flex items-center text-sm font-medium text-light-subtext dark:text-dark-subtext">Platform
                </span>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="validation.platform.icon.url"
                      :alt="validation.platform.icon.name" />
                  </div>
                  <a class="mt-1 ml-3 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0 hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
                    target="_blank" :href="validation.platform.link">{{ validation.platform.name }}</a>
                </div>
              </div>
              <div
                class="bg-light-backdrop-primary dark:bg-dark-backdrop-tertiary px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span class="flex items-center text-sm font-medium text-light-subtext dark:text-dark-subtext">Partner
                </span>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="validation.partner.icon.url"
                      :alt="validation.partner.icon.name" />
                  </div>
                  <a class="mt-1 ml-3 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0 hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
                    target="_blank" :href="validation.partner.link">{{ validation.partner.name }}</a>
                </div>
              </div>
              <div
                class="bg-light-backdrop-secondary dark:bg-dark-backdrop-quaternary px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6">
                <span class="flex items-center text-sm font-medium text-light-subtext dark:text-dark-subtext">Last
                  Updated
                </span>
                <div class="flex items-center">
                  <span class="mt-1 sm:ml-3 text-sm text-light-text dark:text-dark-text sm:col-span-2 sm:mt-0">
                    {{ validation.last_update }}
                  </span>
                </div>
              </div>
              <div
                class="bg-light-backdrop-primary dark:bg-dark-backdrop-tertiary border-b-4 border-light-backdrop-primary dark:border-dark-backdrop-primary px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span class="flex items-center text-sm font-medium text-light-subtext dark:text-dark-subtext">Link</span>
                <a class="inline-block break-all after:content-['_↗'] items-center mt-1 text-sm text-light-text dark:text-dark-text sm:col-span-1 sm:mt-0 hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
                  target="_blank" :href="validation.source">
                  {{ validation.source }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    guidance: {
      type: Object,
      required: true,
    },
  },
}
</script>