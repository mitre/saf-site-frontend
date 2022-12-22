<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="my-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full">
              <thead class="bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  sm:pl-6">
                    <a @click="sort('name')" class="group inline-flex cursor-pointer">
                      Name
                      <span class="ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                        <ChevronDownIcon :class="currentSortDir =='desc' ?  'h-6 w-6' : 'hidden'" aria-hidden="true" />
                        <ChevronUpIcon :class="currentSortDir =='asc' ?  'h-6 w-6' : 'hidden'" aria-hidden="true" />
                      </span>
                    </a>
                  </th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Platform</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Partner</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Version</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white dark:bg-gray-200">
                <template v-for="category in categories">
                  <tr class="border-t border-gray-300 ">
                    <th colspan="5" scope="colgroup"
                      class="bg-gray-100 dark:bg-gray-600 px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white sm:px-6">{{
                          category
                      }}</th>
                  </tr>
                  <template v-for="(entry, index) in sortedEntries" :key="index">
                    <tr v-if="entry.category.replaceAll('_', ' ') == category "
                      :class="[index === 0 ? 'border-gray-300' : 'border-gray-200', 'border-t']">
                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{
                            entry.name
                        }}</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-800">
                          <div class="flex items-center">
                            <div class="h-10 w-10 flex-shrink-0">
                              <img class="h-10 w-10 rounded-full" :src="entry.platform.icon.url" :alt="entry.platform.icon.name" />
                            </div>
                            <NuxtLink target="_blank" :to="entry.platform.link" class="ml-3 hover:text-blue-500 hover:underline"> {{ entry.platform.name }} </NuxtLink>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-800">
                          <div class="flex items-center">
                            <div class="h-10 w-10 flex-shrink-0">
                              <img class="h-10 w-10 rounded-full" :src="entry.partner.icon.url" :alt="entry.partner.icon.name" />
                            </div>
                            <NuxtLink :to="entry.partner.link" class="ml-3 hover:text-blue-500 hover:underline" target="_blank"> {{ entry.partner.name }} </NuxtLink>
                          </div>
                        </td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 dark:text-gray-800">{{ entry.version[0].version }}</td>
                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <NuxtLink :to="entry.source" target="_blank">
                            <button @click="" class="mr-5 text-blue-600 hover:text-blue-900">View Code<span class="sr-only">,
                                {{
                                  entry.name
                                }}</span>
                            </button>

                          </NuxtLink>
                          <NuxtLink :to="`/toolkit/modal/${slugify(entry.name)}?id=${entry.benchmarkID}`">
                            <button @click="" class="text-blue-600 hover:text-blue-900">View Details<span class="sr-only">,
                                {{
                                  entry.name
                                }}</span>
                            </button>

                          </NuxtLink>
                        </td>
                    </tr>
                  </template>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  

<script>
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/solid';
export default {
  components: {ChevronDownIcon, ChevronUpIcon},
  data(){
    return{
      showModal: false,
      categories: [
      'Cloud Service Providers',
      'Virtual Platforms',
      'Operating Systems',
      'Databases',
      'Network',
      'Application Logic',
      'Web Servers',
      ],
      currentSort: 'name',
      currentSortDir: 'asc'
    }
  },
  props: {
    entries: {
      type: Array,
      required: true,
    },
  },
  computed: {
    sortedEntries:function() {
      return this.entries.sort((a,b) => {
        let modifier = 1;
        if(this.currentSortDir === 'desc') modifier = -1;
        if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    } 
  },
  methods: {
    showDetails(){
      this.showModal = !this.showModal;
    },
    sort:function(s) {
      //if s == current sort, reverse
      if(s === this.currentSort) {
        this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
      }
      this.currentSort = s;
    },
    slugify(str) {
      str = str.toLowerCase()
      str = str.trim()
      str = str.replace(/[^\w\s-]/g, '')
      str = str.replace(/[\s_-]+/g, '-')
      str = str.replace(/^-+|-+$/g, '')
      return str
    },
  }
}
</script>