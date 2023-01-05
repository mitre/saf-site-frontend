<template>
  <div>
    <div v-if="isLoaded">
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
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ guidance[0].category.replaceAll('_', ' ')}}
                </dd>
              </div>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Name</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ guidance[0].name }}</dd>
              </div>
              <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Version</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ guidance[0].version[0].version }}</dd>
              </div>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Type</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ guidance[0].type }}</dd>
              </div>
              <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Date</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ guidance[0].date }}</dd>
              </div>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Url</dt>
                <a class="flex items-center mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline"
                  target="_blank" :href="guidance[0].source">{{ guidance[0].source }}
                  <ExternalLinkIcon class="h-4 w-4"/>
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
          <div class="sm:flex">
            <div class="flex-1 border-t border-gray-200 dark:border-gray-500">
              <dl v-if="guidance[0].hardening != null" v-for="hardening in guidance[0].hardening">
                <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-3 sm:px-6">
                  <dt class="flex items-center text-sm font-medium text-gray-500">Name</dt>
                  <div class="flex items-center">
                    <span class="mt-1 ml-3 text-sm text-gray-900  sm:col-span-2 sm:mt-0">
                      {{ hardening.name }}
                    </span>
                  </div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="flex items-center text-sm font-medium text-gray-500">Platform</dt>
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img class="h-10 w-10 rounded-full" :src="hardening.platform.icon.url"
                        :alt="hardening.platform.icon.name" />
                    </div>
                    <a class="mt-1 ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline"
                      target="_blank"
                      :href="hardening.platform.link">{{ hardening.platform.name }}</a>
                  </div>
                </div>
                <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="flex items-center text-sm font-medium text-gray-500">Partner</dt>
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img class="h-10 w-10 rounded-full" :src="hardening.partner.icon.url"
                        :alt="hardening.partner.icon.name" />
                    </div>
                    <a class="mt-1 ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline"
                      target="_blank"
                      :href="hardening.partner.link">{{ hardening.partner.name }}</a>
                  </div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-300 mb-2 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="flex items-center text-sm font-medium text-gray-500">Link</dt>
                  <a class="flex items-center mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline"
                    target="_blank" :href="hardening.source">
                    {{ hardening.source }} 
                    <ExternalLinkIcon class="h-5 w-5" />
                  </a>
                </div>
              </dl>
            </div>
            <div class="flex-1 border-t border-gray-200 dark:border-gray-500">
              <div class="sm:hidden"> <!-- Mobile Formatting -->
                <hr class="h-px bg-gray-300 border-0 dark:bg-gray-500">
                <div class="sm:flex bg-gray-300 dark:bg-gray-700 px-4 py-5  sm:gap-4 sm:px-6">
                  <div class="flex-1">
                    <dt class="text-sm text-center font-medium text-gray-700 dark:text-white">Validate</dt>
                  </div>
                </div>
              </div>
              <dl v-if="guidance[0].validation != null" v-for="validation in guidance[0].validation">
                <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="flex items-center text-sm font-medium text-gray-500">Name</dt>
                  <div class="flex items-center">
                    <span class="mt-1 ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {{ validation.name }}
                    </span>
                  </div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="flex items-center text-sm font-medium text-gray-500">Platform</dt>
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img class="h-10 w-10 rounded-full" :src="validation.platform.icon.url"
                        :alt="validation.platform.icon.name" />
                    </div>
                    <a class="mt-1 ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline"
                      target="_blank"
                      :href="validation.platform.link">{{ validation.platform.name }}</a>
                  </div>
                </div>
                <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="flex items-center text-sm font-medium text-gray-500">Partner</dt>
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img class="h-10 w-10 rounded-full" :src="validation.partner.icon.url"
                        :alt="validation.partner.icon.name" />
                    </div>
                    <a class="mt-1 ml-3 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline"
                      target="_blank"
                      :href="validation.partner.link">{{ validation.partner.name }}</a>
                  </div>
                </div>
                <div class="bg-gray-50 dark:bg-gray-300 mb-2 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="flex items-center text-sm font-medium text-gray-500">Link</dt>
                  <a class="flex items-center mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline"
                    target="_blank" :href="validation.source">
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
    <div v-else>
      <p> Loading ...</p>
    </div>
  </div>
</template>
  
<script>
import { PaperClipIcon, ExternalLinkIcon } from '@heroicons/vue/solid'

export default {
  components: { PaperClipIcon, ExternalLinkIcon },
  data() {
    return {
      guidance: [],
      isLoaded: false,
    }
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getBenchmark()
      this.isLoaded = true
    });
  },
  methods: {
    async getBenchmark() {
      this.guidance = await useAsyncData('getGuidanceDataFromID', () => GqlGetGuidanceDataFromID({ id: this.$route.query.id }))
        .then(({ data }) => {
          return data._value.guidances.data.map((guidance) => ({
            name: guidance.attributes.name,
            id: guidance.id,
            type: guidance.attributes.type,
            category: guidance.attributes.category,
            source: guidance.attributes.source,
            date: guidance.attributes.date,
            version: guidance.attributes.version,
            hardening: guidance.attributes.hardening.data ? guidance.attributes.hardening.data.map((harden) => ({
              id: harden.id,
              name: harden.attributes.name,
              name_long: harden.attributes.name_long,
              source: harden.attributes.source,
              platform: {
                name: harden.attributes.platform.data.attributes.name,
                link: harden.attributes.platform.data.attributes.link,
                icon: {
                  name: harden.attributes.platform.data.attributes.icon.data ? harden.attributes.platform.data.attributes.icon.data.attributes.name : null,
                  url: harden.attributes.platform.data.attributes.icon.data ? harden.attributes.platform.data.attributes.icon.data.attributes.url : null,
                }
              },
              partner: {
                name: harden.attributes.partner.data.attributes.name,
                name_long: harden.attributes.partner.data.attributes.name_long,
                link: harden.attributes.partner.data.attributes.link,
                icon: {
                  name: harden.attributes.partner.data.attributes.icon.data ? harden.attributes.partner.data.attributes.icon.data.attributes.name : null,
                  url: harden.attributes.partner.data.attributes.icon.data ? harden.attributes.partner.data.attributes.icon.data.attributes.url : null,
                }
              }
            })): null,
            validation: guidance.attributes.validation.data ? guidance.attributes.validation.data.map((validate) => ({
              id: validate.id,
              name: validate.attributes.name,
              name_long: validate.attributes.name_long,
              source: validate.attributes.source,
              platform: {
                name: validate.attributes.platform.data.attributes.name,
                link: validate.attributes.platform.data.attributes.link,
                icon: {
                  name: validate.attributes.platform.data.attributes.icon.data ? validate.attributes.platform.data.attributes.icon.data.attributes.name : null,
                  url: validate.attributes.platform.data.attributes.icon.data ? validate.attributes.platform.data.attributes.icon.data.attributes.url : null,
                }
              },
              partner: {
                name: validate.attributes.partner.data.attributes.name,
                name_long: validate.attributes.partner.data.attributes.name_long,
                link: validate.attributes.partner.data.attributes.link,
                icon: {
                  name: validate.attributes.partner.data.attributes.icon.data ? validate.attributes.partner.data.attributes.icon.data.attributes.name : null,
                  url: validate.attributes.partner.data.attributes.icon.data ? validate.attributes.partner.data.attributes.icon.data.attributes.url : null,
                }
              }
            })): null,
          }))
        });
    },
  }
}

</script>