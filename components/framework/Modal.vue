<template>
  <div>
    <!-- Guidance Content -->
    <div class="overflow-hidden mx-auto max-w-5xl bg-gray-300 dark:bg-gray-700 shadow sm:rounded-lg mt-8">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">Guidance Overview</h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-dark-text">Extra details for the guidance overview.
        </p>
      </div>
      <div class="sm:flex">
        <div class="flex-1 border-t border-gray-200">
          <dl>
            <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Category</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ guidance.category.replaceAll('_', ' ') }}
              </dd>
            </div>
            <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ guidance.name }}</dd>
            </div>
            <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Version</dt>
              <dd v-if="guidance.version != 0" class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ guidance.version }}</dd>
              <dd v-else class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> N/A </dd>
            </div>
            <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Type</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ guidance.type }}</dd>
            </div>
            <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Date</dt>
              <dd v-if="guidance.date" class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ guidance.date }}</dd>
              <dd v-else class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"> N/A </dd>
            </div>
            <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Url</dt>
              <a class="flex items-center after:content-['_↗'] mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline"
                target="_blank" :href="guidance.source">{{ guidance.source }}
              </a>
            </div>
          </dl>
        </div>
      </div>

      <!-- Harden / Validate Content -->
      <div class="overflow-hidden bg-gray-300 dark:bg-gray-700 shadow sm:rounded-lg ">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">Related Content</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-dark-text">Related hardening and validation content
            for the guidance.</p>
        </div>
        <hr class="my-1 h-px bg-gray-200 border-0 dark:bg-gray-500">
        <div class="sm:flex bg-gray-300 dark:bg-gray-700 px-4 py-5  sm:gap-4 sm:px-6">
          <div class="flex-1">
            <dt class="text-sm text-center font-medium text-gray-700 dark:text-white">Harden</dt>
          </div>
          <div class="flex-1">
            <div class="hidden sm:block">
              <dt class="text-sm text-center font-medium text-gray-700 dark:text-white">Validate</dt>
            </div>
          </div>
        </div>
        <div class="sm:flex md:max-h-96 h-full">
          <div class="flex-1 border-gray-200 border-r-2 dark:border-gray-500 overflow-y-scroll">
            <dl v-if="guidance.hardening != null" v-for="hardening in guidance.hardening">
              <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6">
                <dt class="flex items-center text-sm font-medium text-gray-500">Name</dt>
                <div class="flex items-center">
                  <span class="mt-1 sm:ml-3 text-sm text-gray-900  sm:col-span-2 sm:mt-0">
                    {{ hardening.name }}
                  </span>
                </div>
              </div>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt class="flex items-center text-sm font-medium text-gray-500">Platform</dt>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="hardening.platform.icon.url"
                      :alt="hardening.platform.icon.name" />
                  </div>
                  <a class="mt-1 ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline"
                    target="_blank" :href="hardening.platform.link">{{ hardening.platform.name }}</a>
                </div>
              </div>
              <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt class="flex items-center text-sm font-medium text-gray-500">Partner</dt>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="hardening.partner.icon.url"
                      :alt="hardening.partner.icon.name" />
                  </div>
                  <a class="mt-1 ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline"
                    target="_blank" :href="hardening.partner.link">{{ hardening.partner.name }}</a>
                </div>
              </div>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6">
                <dt class="flex items-center text-sm font-medium text-gray-500">Last Updated</dt>
                <div class="flex items-center">
                  <span class="mt-1 sm:ml-3 text-sm text-gray-900  sm:col-span-2 sm:mt-0">
                    {{ hardening.last_update }}
                  </span>
                </div>
              </div>
              <div
                class="bg-white dark:bg-gray-200 border-b-4 dark:border-gray-500 border-gray-200 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt class="flex items-center text-sm font-medium text-gray-500">Link</dt>
                <a class="inline-block break-all after:content-['_↗'] items-center mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0 hover:text-blue-500 hover:underline"
                  target="_blank" :href="hardening.source">
                  {{ hardening.source }}
                </a>
              </div>
            </dl>
          </div>
          <div class="flex-1 border-gray-200 border-r-2 dark:border-gray-500 overflow-y-auto">
            <div class="sm:hidden"> <!-- Mobile Formatting -->
              <hr class="h-px bg-gray-300 border-0 dark:bg-gray-500">
              <div class="sm:flex bg-gray-300 dark:bg-gray-700 px-4 py-5 sm:gap-4 sm:px-6">
                <div class="flex-1">
                  <dt class="text-sm text-center font-medium text-gray-700 dark:text-white">Validate</dt>
                </div>
              </div>
            </div>
            <dl v-if="guidance.validation != null" v-for="validation in guidance.validation" class="border-gray-200 border-r-2 dark:border-gray-500 overflow-y-scroll">
              <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt class="flex items-center text-sm font-medium text-gray-500">Name</dt>
                <div class="flex items-center">
                  <span class="mt-1 sm:ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ validation.name }}
                  </span>
                </div>
              </div>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt class="flex items-center text-sm font-medium text-gray-500">Platform</dt>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="validation.platform.icon.url"
                      :alt="validation.platform.icon.name" />
                  </div>
                  <a class="mt-1 ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline"
                    target="_blank" :href="validation.platform.link">{{ validation.platform.name }}</a>
                </div>
              </div>
              <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt class="flex items-center text-sm font-medium text-gray-500">Partner</dt>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" :src="validation.partner.icon.url"
                      :alt="validation.partner.icon.name" />
                  </div>
                  <a class="mt-1 ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline"
                    target="_blank" :href="validation.partner.link">{{ validation.partner.name }}</a>
                </div>
              </div>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6">
                <dt class="flex items-center text-sm font-medium text-gray-500">Last Updated</dt>
                <div class="flex items-center">
                  <span class="mt-1 sm:ml-3 text-sm text-gray-900  sm:col-span-2 sm:mt-0">
                    {{ validation.last_update }}
                  </span>
                </div>
              </div>
              <div
                class="bg-white dark:bg-gray-200 border-b-4 dark:border-gray-500 border-gray-200 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt class="flex items-center text-sm font-medium text-gray-500">Link</dt>
                <a class="inline-block break-all after:content-['_↗'] items-center mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0 hover:text-blue-500 hover:underline"
                  target="_blank" :href="validation.source">
                  {{ validation.source }}
                </a>
              </div>
            </dl>
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