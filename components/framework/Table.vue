<template>
  <ScrollToTop />
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="my-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <!-- Filter Search -->
          <label for="table-search" class="block text-sm font-medium text-light-text dark:text-dark-text">Search</label>
          <div
            class="relative max-w-xs sm:max-w-md mb-1 rounded-md border border-light-text dark:border-dark-text  px-3 py-2 shadow-sm focus-within:border-light-border-primary dark:focus-within:border-dark-border-primary focus-within:ring-1 focus-within:ring-light-border-primary dark:focus-within:ring-dark-border-primary">
            <input id="table-search" name="table-search" v-model="filter" type="text"
              class="block w-full border-0 p-0 text-light-text dark:text-dark-text placeholder-light-subtext dark:placeholder-dark-subtext focus:ring-0 sm:text-sm bg-light-backdrop-primary dark:bg-dark-backdrop-primary"
              placeholder="Search for ..." />
          </div>
          <div class="overflow-hidden shadow ring-1 ring-light-text dark:ring-dark-text ring-opacity-5 md:rounded-lg">
            <table class="min-w-full">
              <!-- Table Headers -->
              <thead class="bg-light-backdrop-primary dark:bg-dark-backdrop-primary text-light-text dark:text-dark-text">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6">
                    <button @click="sort('name')" class="group inline-flex cursor-pointer">
                      Name
                      <span v-if="this.currentSort === 'name'"
                        class="ml-2 flex-none rounded text-light-subtext dark:text-dark-subtext group-hover:visible group-focus:visible">
                        <ChevronDownIcon :class="currentSortDir == 'desc' ? 'h-5 w-5' : 'hidden'" aria-hidden="true" />
                        <ChevronUpIcon :class="currentSortDir == 'asc' ? 'h-5 w-5' : 'hidden'" aria-hidden="true" />
                      </span>
                      <span v-else>
                        <SwitchVerticalIcon
                          class="h-5 w-5 ml-2 flex-none rounded text-light-subtext dark:text-dark-subtext group-hover:visible group-focus:visible" />
                      </span>
                    </button>
                  </th>
                  <th scope="col" class="sm:table-cell hidden px-3 py-3.5 text-left text-sm font-semibold">
                    <button @click="sort('platform')" class="group inline-flex cursor-pointer">
                      Platform
                      <span v-if="this.currentSort === 'platform'"
                        class="ml-2 flex-none rounded text-light-subtext dark:text-dark-subtext group-hover:visible group-focus:visible">
                        <ChevronDownIcon :class="currentSortDir == 'desc' ? 'h-5 w-5' : 'hidden'" aria-hidden="true" />
                        <ChevronUpIcon :class="currentSortDir == 'asc' ? 'h-5 w-5' : 'hidden'" aria-hidden="true" />
                      </span>
                      <span v-else>
                        <SwitchVerticalIcon
                          class="h-5 w-5 ml-2 flex-none rounded text-light-subtext dark:text-dark-subtext group-hover:visible group-focus:visible" />
                      </span>
                    </button>
                  </th>
                  <th scope="col" class="sm:table-cell hidden px-3 py-3.5 text-left text-sm font-semibold">
                    <button @click="sort('partner')" class="focus focus-visible:ring-2 group inline-flex cursor-pointer">
                      Partner
                      <span v-if="this.currentSort === 'partner'"
                        class="ml-2 flex-none rounded text-light-subtext dark:text-dark-subtext group-hover:visible group-focus:visible">
                        <ChevronDownIcon :class="currentSortDir == 'desc' ? 'h-5 w-5' : 'hidden'" aria-hidden="true" />
                        <ChevronUpIcon :class="currentSortDir == 'asc' ? 'h-5 w-5' : 'hidden'" aria-hidden="true" />
                      </span>
                      <span v-else>
                        <SwitchVerticalIcon
                          class="h-5 w-5 ml-2 flex-none rounded text-light-subtext dark:text-dark-subtext group-hover:visible group-focus:visible" />
                      </span>
                    </button>
                  </th>
                  <th scope="col" class="xl:table-cell hidden relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <!-- Table Contents -->
              <tbody>
                <template v-for="[key, value] of Object.entries(sortedEntries)">
                  <tr class="border-t border-light-border-primary">
                    <th colspan="5" scope="colgroup"
                      class="bg-light-backdrop-quaternary dark:bg-dark-backdrop-secondary px-4 py-3 text-left text-sm font-semibold text-light-text dark:text-dark-text sm:px-6">
                      {{
                        key
                      }}</th>
                  </tr>
                  <template v-for="(entry, index) in value" :key="index">
                    <tr
                      :class="[index % 2 === 0 ? 'bg-light-backdrop-tertiary dark:bg-dark-backdrop-tertiary' : 'bg-light-backdrop-secondary dark:bg-dark-backdrop-quaternary', 'border-t']">
                      <td class="py-4 pl-4 pr-3 text-sm font-medium text-light-text dark:text-dark-text sm:pl-6">
                        <span v-if="entry.version != 0">{{ entry.name }} | {{ entry.version }} </span>
                        <span v-else>{{ entry.name }}</span>
                        <!-- Mobile Stacked View -->
                        <div class="font-normal xl:hidden">
                          <span class="sr-only">Title</span>
                          <div class="flex items-center mt-2">
                            <span class="sm:hidden flex mr-6">
                              <NuxtLink target="_blank" :to="entry.platform.link" class="flex items-center mr-1">
                                <img class="h-8 w-8 rounded-full mr-1" :src="entry.platform.icon.url"
                                  :alt="entry.platform.icon.alt" />
                              </NuxtLink>
                              <NuxtLink target="_blank" :to="entry.partner.link" class="flex items-center">
                                <img class="h-8 w-8 rounded-full" :src="entry.partner.icon.url"
                                  :alt="entry.platform.icon.alt" />
                              </NuxtLink>
                            </span>
                            <span
                              class="flex items-center relative whitespace-nowrap py-2 text-right text-sm font-medium sm:pr-6">
                              <img class="h-6 w-6 rounded-full mr-3 dark:bg-white dark:p-1"
                                src="@/assets/GitHubLogoBlack.svg" alt="Github Logo" />
                              <NuxtLink :to="entry.source" target="_blank">
                                <button @click=""
                                  class="flex items-center mr-5 text-nav-light-active dark:text-nav-dark-active">
                                  View Code
                                  <span class="sr-only">,
                                    {{ entry.name }}
                                  </span>
                                  <ExternalLinkIcon class="h-4 w-4" />
                                </button>
                              </NuxtLink>
                              <NuxtLink :to="`/libs/guidance/${slugify(entry.name)}?id=${entry.benchmarkID}`">
                                <button @click="" class="text-nav-light-active dark:text-nav-dark-active">View
                                  Details<span class="sr-only">,
                                    {{
                                      entry.name
                                    }}</span>
                                </button>
                              </NuxtLink>
                            </span>
                          </div>
                        </div>
                      </td>
                      <!-- Full View -->
                      <td class="sm:table-cell hidden truncate whitespace-nowrap px-3 py-4 text-sm">
                        <div class="flex items-center">
                          <img class="h-10 w-10 rounded-full" :src="entry.platform.icon.url"
                            :alt="entry.platform.icon.alt" />
                          <NuxtLink target="_blank" :to="entry.platform.link"
                            class="ml-3 text-light-text dark:text-dark-text hover:text-nav-light-active dark:hover:text-nav-dark-active">
                            {{
                              entry.platform.name
                            }} </NuxtLink>
                        </div>
                      </td>
                      <td class="sm:table-cell hidden truncate whitespace-nowrap px-3 py-4 text-sm">
                        <div class="flex items-center">
                          <img class="h-10 w-10 rounded-full" :src="entry.partner.icon.url"
                            :alt="entry.partner.icon.alt" />
                          <NuxtLink :to="entry.partner.link"
                            class="ml-3 text-light-text dark:text-dark-text hover:text-nav-light-active dark:hover:text-nav-dark-active"
                            target="_blank"> {{
                              entry.partner.name
                            }} </NuxtLink>
                        </div>
                      </td>
                      <td
                        class="xl:flex items-center hidden relative whitespace-nowrap py-6 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <img class="h-7 w-7 rounded-full mr-3 dark:bg-white dark:p-1" src="@/assets/GitHubLogoBlack.svg"
                          alt="Github Logo" />
                        <NuxtLink :to="entry.source" target="_blank">
                          <button @click=""
                            class="flex items-center mr-5 text-nav-light-active dark:text-nav-dark-active">
                            View Code
                            <span class="sr-only">,
                              {{ entry.name }}
                            </span>
                            <ExternalLinkIcon class="h-4 w-4" />
                          </button>
                        </NuxtLink>
                        <NuxtLink :to="`/libs/guidance/${slugify(entry.name)}?id=${entry.benchmarkID}`">
                          <button @click="" class="text-nav-light-active dark:text-nav-dark-active">View Details<span
                              class="sr-only">,
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
import { ChevronDownIcon, ChevronUpIcon, SwitchVerticalIcon, ExternalLinkIcon } from '@heroicons/vue/solid';
export default {
  components: { ChevronDownIcon, ChevronUpIcon, SwitchVerticalIcon, ExternalLinkIcon },
  data() {
    return {
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
      currentSortDir: 'asc',
      filter: '',
      filteredData: {}
    }
  },
  props: {
    entries: {
      type: Object,
      required: true,
    },
  },
  computed: {
    sortedEntries: function () {
      this.categories.forEach((category) => {
        this.filteredEntries[category].sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === 'desc') modifier = -1;
          if (this.currentSort === 'name') {
            if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
            if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          }
          else if (this.currentSort === 'platform' || this.currentSort === 'partner') {
            if (a[this.currentSort].name < b[this.currentSort].name) return -1 * modifier;
            if (a[this.currentSort].name > b[this.currentSort].name) return 1 * modifier;
          }
          else if (this.currentSort === 'version') {
            if (a[this.currentSort][0].version < b[this.currentSort][0].version) return -1 * modifier;
            if (a[this.currentSort][0].version > b[this.currentSort][0].version) return 1 * modifier;
          }
          return;
        });
      })
      return this.filteredData
    },
    filteredEntries() {
      this.categories.forEach((category) => {
        this.filteredData[category] = this.entries[category].filter(entry => {
          if (this.filter == '') return true;
          return entry.name.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
            entry.platform.name.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
            entry.partner.name.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
            entry.version != 0 && entry.version.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0;
        })
      })
      return this.filteredData
    },
  },
  methods: {
    sort: function (s) {
      //if s == current sort then reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
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