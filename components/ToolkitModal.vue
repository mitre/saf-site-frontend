<template>
  <div>
    <!-- Guidance Content -->
    <div
      class="mx-auto mt-8 max-w-5xl overflow-hidden bg-gray-300 shadow dark:bg-gray-700 sm:rounded-lg"
    >
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">
          Guidance Overview
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-dark-text">
          Extra details for the guidance overview.
        </p>
      </div>
      <div class="sm:flex">
        <div class="flex-1 border-t border-gray-200">
          <dl>
            <div
              class="bg-white px-4 py-5 dark:bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Category</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {{ guidance.category.replaceAll('_', ' ') }}
              </dd>
            </div>
            <div
              class="bg-gray-50 px-4 py-5 dark:bg-gray-300 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Name</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {{ guidance.name }}
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 dark:bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Version</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {{ guidance.version[0].version }}
              </dd>
            </div>
            <div
              class="bg-gray-50 px-4 py-5 dark:bg-gray-300 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Type</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {{ guidance.type }}
              </dd>
            </div>
            <div
              class="bg-white px-4 py-5 dark:bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Date</dt>
              <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {{ guidance.date }}
              </dd>
            </div>
            <div
              class="bg-gray-50 px-4 py-5 dark:bg-gray-300 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
            >
              <dt class="text-sm font-medium text-gray-500">Url</dt>
              <a
                class="mt-1 flex items-center text-sm text-gray-900 hover:text-blue-500 hover:underline sm:col-span-2 sm:mt-0"
                target="_blank"
                :href="guidance.source"
                >{{ guidance.source }}
                <ExternalLinkIcon class="h-4 w-4" />
              </a>
            </div>
          </dl>
        </div>
      </div>

      <!-- Harden / Validate Content -->
      <div
        class="overflow-hidden bg-gray-300 shadow dark:bg-gray-700 sm:rounded-lg"
      >
        <div class="px-4 py-5 sm:px-6">
          <h3
            class="text-lg font-medium leading-6 text-gray-900 dark:text-white"
          >
            Related Content
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-dark-text">
            Related hardening and validation content for the guidance.
          </p>
        </div>
        <hr class="my-1 h-px border-0 bg-gray-200 dark:bg-gray-500" />
        <div
          class="bg-gray-300 px-4 py-5 dark:bg-gray-700 sm:flex sm:gap-4 sm:px-6"
        >
          <div class="flex-1">
            <dt
              class="text-center text-sm font-medium text-gray-700 dark:text-white"
            >
              Harden
            </dt>
          </div>
          <div class="flex-1">
            <div class="hidden sm:block">
              <dt
                class="text-center text-sm font-medium text-gray-700 dark:text-white"
              >
                Validate
              </dt>
            </div>
          </div>
        </div>
        <div class="sm:flex">
          <div
            v-if="guidance.hardening != null"
            class="flex-1 border-t border-gray-200 dark:border-gray-500"
          >
            <dl v-for="hardening in guidance.hardening" :key="hardening">
              <div
                class="bg-white px-4 py-5 dark:bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-3 sm:px-6"
              >
                <dt class="flex items-center text-sm font-medium text-gray-500">
                  Name
                </dt>
                <div class="flex items-center">
                  <span
                    class="mt-1 ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                  >
                    {{ hardening.name }}
                  </span>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-5 dark:bg-gray-300 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="flex items-center text-sm font-medium text-gray-500">
                  Platform
                </dt>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="hardening.platform.icon.url"
                      :alt="hardening.platform.icon.name"
                    />
                  </div>
                  <a
                    class="mt-1 ml-3 text-sm text-gray-900 hover:text-blue-500 hover:underline sm:col-span-2 sm:mt-0"
                    target="_blank"
                    :href="hardening.platform.link"
                    >{{ hardening.platform.name }}</a
                  >
                </div>
              </div>
              <div
                class="bg-white px-4 py-5 dark:bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="flex items-center text-sm font-medium text-gray-500">
                  Partner
                </dt>
                <div class="flex items-center">
                  <div class="h-10 w-10 flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="hardening.partner.icon.url"
                      :alt="hardening.partner.icon.name"
                    />
                  </div>
                  <a
                    class="mt-1 ml-3 text-sm text-gray-900 hover:text-blue-500 hover:underline sm:col-span-2 sm:mt-0"
                    target="_blank"
                    :href="hardening.partner.link"
                    >{{ hardening.partner.name }}</a
                  >
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-5 dark:bg-gray-300 sm:grid sm:grid-cols-3 sm:gap-3 sm:px-6"
              >
                <dt class="flex items-center text-sm font-medium text-gray-500">
                  Last Updated
                </dt>
                <div class="flex items-center">
                  <span
                    class="mt-1 ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                  >
                    {{ hardening.last_update }}
                  </span>
                </div>
              </div>
              <div
                class="mb-2 bg-white px-4 py-5 dark:bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
              >
                <dt class="flex items-center text-sm font-medium text-gray-500">
                  Link
                </dt>
                <a
                  class="mt-1 flex items-center text-sm text-gray-900 hover:text-blue-500 hover:underline sm:col-span-2 sm:mt-0"
                  target="_blank"
                  :href="hardening.source"
                >
                  {{ hardening.source }}
                  <ExternalLinkIcon class="h-5 w-5" />
                </a>
              </div>
            </dl>
          </div>
          <div class="flex-1 border-t border-gray-200 dark:border-gray-500">
            <div class="sm:hidden">
              <!-- Mobile Formatting -->
              <hr class="h-px border-0 bg-gray-300 dark:bg-gray-500" />
              <div
                class="bg-gray-300 px-4 py-5 dark:bg-gray-700 sm:flex sm:gap-4 sm:px-6"
              >
                <div class="flex-1">
                  <dt
                    class="text-center text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Validate
                  </dt>
                </div>
              </div>
            </div>
            <div v-if="guidance.validation != null">
              <dl v-for="validation in guidance.validation" :key="validation">
                <div
                  class="bg-white px-4 py-5 dark:bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt
                    class="flex items-center text-sm font-medium text-gray-500"
                  >
                    Name
                  </dt>
                  <div class="flex items-center">
                    <span
                      class="mt-1 ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                    >
                      {{ validation.name }}
                    </span>
                  </div>
                </div>
                <div
                  class="bg-gray-50 px-4 py-5 dark:bg-gray-300 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt
                    class="flex items-center text-sm font-medium text-gray-500"
                  >
                    Platform
                  </dt>
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full"
                        :src="validation.platform.icon.url"
                        :alt="validation.platform.icon.name"
                      />
                    </div>
                    <a
                      class="mt-1 ml-3 text-sm text-gray-900 hover:text-blue-500 hover:underline sm:col-span-2 sm:mt-0"
                      target="_blank"
                      :href="validation.platform.link"
                      >{{ validation.platform.name }}</a
                    >
                  </div>
                </div>
                <div
                  class="bg-white px-4 py-5 dark:bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt
                    class="flex items-center text-sm font-medium text-gray-500"
                  >
                    Partner
                  </dt>
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full"
                        :src="validation.partner.icon.url"
                        :alt="validation.partner.icon.name"
                      />
                    </div>
                    <a
                      class="mt-1 ml-3 text-sm text-gray-900 hover:text-blue-500 hover:underline sm:col-span-2 sm:mt-0"
                      target="_blank"
                      :href="validation.partner.link"
                      >{{ validation.partner.name }}</a
                    >
                  </div>
                </div>
                <div
                  class="bg-gray-50 px-4 py-5 dark:bg-gray-300 sm:grid sm:grid-cols-3 sm:gap-3 sm:px-6"
                >
                  <dt
                    class="flex items-center text-sm font-medium text-gray-500"
                  >
                    Last Updated
                  </dt>
                  <div class="flex items-center">
                    <span
                      class="mt-1 ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                    >
                      {{ validation.last_update }}
                    </span>
                  </div>
                </div>
                <div
                  class="mb-2 bg-white px-4 py-5 dark:bg-gray-200 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <dt
                    class="flex items-center text-sm font-medium text-gray-500"
                  >
                    Link
                  </dt>
                  <a
                    class="mt-1 flex items-center text-sm text-gray-900 hover:text-blue-500 hover:underline sm:col-span-2 sm:mt-0"
                    target="_blank"
                    :href="validation.source"
                  >
                    {{ validation.source }}
                    <ExternalLinkIcon class="h-5 w-5" />
                  </a>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ExternalLinkIcon} from '@heroicons/vue/solid';
export default {
  components: {ExternalLinkIcon},
  props: {
    guidance: {
      type: Object,
      required: true
    }
  }
};
</script>
