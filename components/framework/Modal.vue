<template>
  <div>
    <!-- Guidance Content -->
    <div class="overflow-hidden mx-auto max-w-5xl bg-neutral-2  shadow sm:rounded-lg mt-8">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-base ">Guidance Overview</h3>
        <p class="mt-1 max-w-2xl text-sm text-muted ">Extra details for the guidance
          overview.
        </p>
      </div>
      <div class="sm:flex">
        <div class="flex-1 border-t border-accent ">
          <div>
            <div class="bg-neutral-1  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span class="text-sm font-medium text-muted ">Category</span>
              <span class="mt-1 text-sm text-base  sm:col-span-2 sm:mt-0">{{
                guidance.category.replaceAll('_', ' ') }}
              </span>
            </div>
            <div class="bg-neutral-2  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span class="text-sm font-medium text-muted ">Name</span>
              <span class="mt-1 text-sm text-base  sm:col-span-2 sm:mt-0">{{ guidance.name
              }}</span>
            </div>
            <div class="bg-neutral-1  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span class="text-sm font-medium text-muted ">Version</span>
              <span v-if="guidance.version != 0" class="mt-1 text-sm text-base  sm:col-span-2 sm:mt-0">{{
                guidance.version }}</span>
              <span v-else class="mt-1 text-sm text-base  sm:col-span-2 sm:mt-0"> N/A </span>
            </div>
            <div class="bg-neutral-2  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span class="text-sm font-medium text-muted ">Type</span>
              <span class="mt-1 text-sm text-base  sm:col-span-2 sm:mt-0">{{ guidance.type
              }}</span>
            </div>
            <div class="bg-neutral-1  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span class="text-sm font-medium text-muted ">Date</span>
              <span v-if="guidance.date" class="mt-1 text-sm text-base  sm:col-span-2 sm:mt-0">{{
                guidance.date }}</span>
              <span v-else class="mt-1 text-sm text-base  sm:col-span-2 sm:mt-0"> N/A </span>
            </div>
            <div class="bg-neutral-2  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span class="text-sm font-medium text-muted ">Url</span>
              <a class="flex items-center after:content-['_↗'] mt-1 text-sm text-base  sm:col-span-2 sm:mt-0  hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
                target="_blank" :href="guidance.source">{{ guidance.source }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Harden / Validate Content -->
      <div class="overflow-hidden bg-neutral-2 border-t-2 border-accent shadow">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-base ">Related Content</h3>
          <p class="mt-1 max-w-2xl text-sm text-muted ">Related hardening and validation
            content
            for the guidance.</p>
        </div>
        <hr class="my-1 h-px border-0 bg-neutral-1 ">
        <div class="sm:flex bg-neutral-2 px-4 py-5 sm:gap-4 sm:px-6 border-b-2 border-neutral-1">
          <div class="flex-1">
            <span class="text-sm text-center font-medium text-base ">Harden</span>
          </div>
          <div class="flex-1">
            <div class="hidden sm:block">
              <span class="text-sm text-center font-medium text-base ">Validate</span>
            </div>
          </div>
        </div>
        <div class="sm:flex md:max-h-96 h-full">
          <div class="flex-1 border-r-2 border-neutral-1 overflow-y-scroll">
            <div v-if="guidance.hardening != null" v-for="hardening in guidance.hardening">
              <div class="bg-neutral-1  px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6">
                <span class="flex items-center text-sm font-medium text-muted ">Name</span>
                <div class="flex items-center">
                  <span class="mt-1 sm:ml-3 text-sm text-base   sm:col-span-2 sm:mt-0">
                    {{ hardening.name }}
                  </span>
                </div>
              </div>
              <div class="bg-neutral-2  px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span class="flex items-center text-sm font-medium text-muted ">Platform
                </span>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="hardening.platform.icon.url"
                      :alt="hardening.platform.icon.name" />
                  </div>
                  <a class="mt-1 ml-3 text-sm text-base  sm:col-span-2 sm:mt-0 hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
                    target="_blank" :href="hardening.platform.link">{{ hardening.platform.name }}</a>
                </div>
              </div>
              <div class="bg-neutral-1  px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span class="flex items-center text-sm font-medium text-muted ">Partner</span>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="hardening.partner.icon.url"
                      :alt="hardening.partner.icon.name" />
                  </div>
                  <a class="mt-1 ml-3 text-sm text-base  sm:col-span-2 sm:mt-0 hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
                    target="_blank" :href="hardening.partner.link">{{ hardening.partner.name }}</a>
                </div>
              </div>
              <div class="bg-neutral-2  px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6">
                <span class="flex items-center text-sm font-medium text-muted ">Last
                  Updated
                </span>
                <div class="flex items-center">
                  <span class="mt-1 sm:ml-3 text-sm text-base   sm:col-span-2 sm:mt-0">
                    {{ hardening.last_update }}
                  </span>
                </div>
              </div>
              <div class="bg-neutral-1 border-b-4 border-accent px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span class="flex items-center text-sm font-medium text-muted ">Link</span>
                <a class="inline-block break-all after:content-['_↗'] items-center mt-1 text-sm text-base  sm:col-span-1 sm:mt-0 hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
                  target="_blank" :href="hardening.source">
                  {{ hardening.source }}
                </a>
              </div>
            </div>
          </div>
          <div class="flex-1 border-r-2 border-neutral-1  overflow-y-auto">
            <div class="sm:hidden"> <!-- Mobile Formatting -->
              <hr class="h-px border-0 bg-neutral-1 ">
              <div class="sm:flex bg-neutral-2 px-4 py-5 sm:gap-4 sm:px-6 border-b-2 border-neutral-1">
                <div class="flex-1">
                  <span class="text-sm text-center font-medium text-base ">Validate</span>
                </div>
              </div>
            </div>
            <div v-if="guidance.validation != null" v-for="validation in guidance.validation" class="overflow-y-scroll">
              <div class="bg-neutral-1  px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span class="flex items-center text-sm font-medium text-muted ">Name</span>
                <div class="flex items-center">
                  <span class="mt-1 sm:ml-3 text-sm text-base  sm:col-span-2 sm:mt-0">
                    {{ validation.name }}
                  </span>
                </div>
              </div>
              <div class="bg-neutral-2  px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span class="flex items-center text-sm font-medium text-muted ">Platform
                </span>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="validation.platform.icon.url"
                      :alt="validation.platform.icon.name" />
                  </div>
                  <a class="mt-1 ml-3 text-sm text-base  sm:col-span-2 sm:mt-0 hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
                    target="_blank" :href="validation.platform.link">{{ validation.platform.name }}</a>
                </div>
              </div>
              <div class="bg-neutral-1  px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span class="flex items-center text-sm font-medium text-muted ">Partner
                </span>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="validation.partner.icon.url"
                      :alt="validation.partner.icon.name" />
                  </div>
                  <a class="mt-1 ml-3 text-sm text-base  sm:col-span-2 sm:mt-0 hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
                    target="_blank" :href="validation.partner.link">{{ validation.partner.name }}</a>
                </div>
              </div>
              <div class="bg-neutral-2  px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6">
                <span class="flex items-center text-sm font-medium text-muted ">Last
                  Updated
                </span>
                <div class="flex items-center">
                  <span class="mt-1 sm:ml-3 text-sm text-base  sm:col-span-2 sm:mt-0">
                    {{ validation.last_update }}
                  </span>
                </div>
              </div>
              <div class="bg-neutral-1 border-b-4 border-accent  px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <span class="flex items-center text-sm font-medium text-muted ">Link</span>
                <a class="inline-block break-all after:content-['_↗'] items-center mt-1 text-sm text-base  sm:col-span-1 sm:mt-0 hover:text-nav-light-active dark:hover:text-nav-dark-active hover:underline"
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