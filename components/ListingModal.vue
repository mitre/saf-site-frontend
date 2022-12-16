<template>
  <div>
    <div v-if="isLoaded">
      <!-- Benchmark Content -->
      <div class="overflow-hidden bg-white dark:bg-gray-700 shadow sm:rounded-lg mt-8">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">Benchmark Overview</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-dark-text">Extra details for the benchmark overview.</p>
        </div>
        <div class="sm:flex">
          <div class="flex-1 border-t border-gray-200">
            <dl>
              <div class="bg-gray-50 dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Category</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{benchmark[0].category.replaceAll('_', ' ')}}</dd>
              </div>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Name</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{benchmark[0].name}}</dd>
              </div>
              <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Version</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{benchmark[0].version[0].version}}</dd>
              </div>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Type</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{benchmark[0].type}}</dd>
              </div>
              <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Date</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0" >{{benchmark[0].date}}</dd>
              </div>
              <div class="bg-white dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Url</dt>
                <a class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline" target="_blank" :href="benchmark[0].source_link">{{benchmark[0].source_link}}</a>
              </div>
            </dl>
          </div>
          <div class="flex-1 border-t border-gray-200">
            <dl>
              <div class="bg-gray-50 dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Full Name</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">test</dd>
              </div>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Name</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{benchmark[0].name}}</dd>
              </div>
              <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Platform</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{}}</dd>
              </div>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Type</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{benchmark[0].type}}</dd>
              </div>
              <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Version</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0" >{{benchmark[0].version[0].version}}</dd>
              </div>
              <div class="bg-white dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Url</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{benchmark[0].source_link}}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <!-- Harden / Validate Content -->
      <div class="overflow-hidden bg-white dark:bg-gray-700 shadow sm:rounded-lg mt-8">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-white">Related Content</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-dark-text">Related hardening and validation content for benchmark.</p>
        </div>
        <hr class="my-1 h-px bg-gray-200 border-0 dark:bg-gray-500">
        <div class="sm:flex bg-gray-50 dark:bg-gray-700 px-4 py-5  sm:gap-4 sm:px-6">
          <div class="flex-1">
            <dt class="text-sm text-center font-medium text-gray-700 dark:text-white">Harden</dt>
          </div>
          <div class="flex-1">
            <dt class="text-sm text-center font-medium text-gray-700 dark:text-white">Validate</dt>
          </div>
        </div>
        <div class="sm:flex">
          <div class="flex-1 border-t border-gray-200">
            <dl>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Platform</dt>
                <a class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline" target="_blank" :href="benchmark[0].hardening.platform.link">{{benchmark[0].hardening.platform.name}}</a>
              </div>
              <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Partner</dt>
                <a class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline" target="_blank" :href="benchmark[0].hardening.partner.link">{{benchmark[0].hardening.partner.name}}</a>
              </div>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Link</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{benchmark[0].hardening.source}}</dd>
              </div>
            </dl>
          </div>
          <div class="flex-1 border-t border-gray-200">
            <dl>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Platform</dt>
                <a class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline" target="_blank" :href="benchmark[0].validation.platform.link">{{benchmark[0].validation.platform.name}}</a>
              </div>
              <div class="bg-white dark:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Partner</dt>
                <a class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 hover:text-blue-500 hover:underline" target="_blank" :href="benchmark[0].validation.partner.link">{{benchmark[0].validation.partner.name}}</a>
              </div>
              <div class="bg-gray-50 dark:bg-gray-300 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">Link</dt>
                <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{benchmark[0].validation.source}}</dd>
              </div>
            </dl>
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
import { PaperClipIcon } from '@heroicons/vue/solid'

export default{
  components: {PaperClipIcon},
  data(){
    return{
      benchmark: [],
      isLoaded: false,
    }
  },
  mounted() {
      this.$nextTick(async () => {
        await this.getBenchmark()
        this.showInfo()
        this.isLoaded = true
      });
    },
  // props: {
  //   benchmark: {
  //     type: Object,
  //     required: true,
  //   }
  // },
  methods: {
    async getBenchmark() {
      this.benchmark = await useAsyncData('getBenchmarkDataFromID', () => GqlGetBenchmarkDataFromID({id: this.$route.query.id}))
        .then(({ data }) => {
          console.log("Benchmarks return: ", data._value.benchmarks.data)
          return data._value.benchmarks.data.map((benchmark) => ({
            name: benchmark.attributes.name,
            id: benchmark.id,
            type: benchmark.attributes.type,
            category: benchmark.attributes.category,
            source_link: benchmark.attributes.source_link,
            date: benchmark.attributes.date,
            version: benchmark.attributes.version,
            hardening:{
              id: benchmark.attributes.hardening.data[0].id,
              name: benchmark.attributes.hardening.data[0].attributes.name,
              name_long: benchmark.attributes.hardening.data[0].attributes.name_long,
              source: benchmark.attributes.hardening.data[0].attributes.source,
              platform: {
                name: benchmark.attributes.hardening.data[0].attributes.platform.data.attributes.name,
                link: benchmark.attributes.hardening.data[0].attributes.platform.data.attributes.link,
                icon: {
                  name: benchmark.attributes.hardening.data[0].attributes.platform.data.attributes.icon.data ? benchmark.attributes.hardening.data[0].attributes.platform.data.attributes.icon.data.attributes.name : null,
                  url: benchmark.attributes.hardening.data[0].attributes.platform.data.attributes.icon.data ? benchmark.attributes.hardening.data[0].attributes.platform.data.attributes.icon.data.attributes.url : null,
                }
              },
              partner: {
                name: benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.name,
                name_long: benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.name_long,
                link: benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.link,
                icon: {
                  name: benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.icon.data ? benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.icon.data.attributes.name : null,
                  url: benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.icon.data ? benchmark.attributes.hardening.data[0].attributes.partner.data.attributes.icon.data.attributes.url : null,
                }
              }
            },
            validation:{
              id: benchmark.attributes.validation.data[0].id,
              name: benchmark.attributes.validation.data[0].attributes.name,
              name_long: benchmark.attributes.validation.data[0].attributes.name_long,
              source: benchmark.attributes.validation.data[0].attributes.source,
              platform: {
                name: benchmark.attributes.validation.data[0].attributes.platform.data.attributes.name,
                link: benchmark.attributes.validation.data[0].attributes.platform.data.attributes.link,
                icon: {
                  name: benchmark.attributes.validation.data[0].attributes.platform.data.attributes.icon.data ? benchmark.attributes.validation.data[0].attributes.platform.data.attributes.icon.data.attributes.name: null,
                  url: benchmark.attributes.validation.data[0].attributes.platform.data.attributes.icon.data ? benchmark.attributes.validation.data[0].attributes.platform.data.attributes.icon.data.attributes.url : null,
                }
              },
              partner: {
                name: benchmark.attributes.validation.data[0].attributes.partner.data.attributes.name,
                name_long: benchmark.attributes.validation.data[0].attributes.partner.data.attributes.name_long,
                link: benchmark.attributes.validation.data[0].attributes.partner.data.attributes.link,
                icon: {
                  name: benchmark.attributes.validation.data[0].attributes.partner.data.attributes.icon.data ? benchmark.attributes.validation.data[0].attributes.partner.data.attributes.icon.data.attributes.name : null,
                  url: benchmark.attributes.validation.data[0].attributes.partner.data.attributes.icon.data ? benchmark.attributes.validation.data[0].attributes.partner.data.attributes.icon.data.attributes.url : null,
                }
              }
            },
          }))
        });
      },
    showInfo() {
      console.log(this.benchmark)
    }
  }
}

</script>