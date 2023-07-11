<template>
  <div>
    <ScrollToTop />
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="my-8 flex flex-col">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8"
          >
            <!-- Filter Search -->
            <label for="table-search" class="block font-bold">Search</label>
            <div
              class="border-base relative mb-1 max-w-xs rounded-md border px-3 py-2 shadow-sm focus-within:border-accent focus-within:ring-1 focus-within:ring-accent sm:max-w-md"
            >
              <input
                id="table-search"
                v-model="filter"
                name="table-search"
                type="text"
                class="dark:placeholder-dark-subtext block w-full border-0 bg-neutral-1 p-0 placeholder-muted focus:ring-0"
                placeholder="Search for ..."
              />
            </div>
            <div
              class="ring-base overflow-hidden shadow ring-1 ring-opacity-5 md:rounded-lg"
            >
              <table class="min-w-full font-semibold">
                <!-- Table Headers -->
                <thead class="bg-neutral-1">
                  <tr class="text-md font-bold">
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left sm:pl-6">
                      <button
                        class="group inline-flex cursor-pointer"
                        @click="sort('name')"
                      >
                        Name
                        <span
                          v-if="currentSort === 'name'"
                          class="ml-2 flex-none rounded text-muted group-hover:visible group-focus:visible"
                        >
                          <ChevronDownIcon
                            :class="
                              currentSortDir === 'desc' ? 'h-5 w-5' : 'hidden'
                            "
                            aria-hidden="true"
                          />
                          <ChevronUpIcon
                            :class="
                              currentSortDir === 'asc' ? 'h-5 w-5' : 'hidden'
                            "
                            aria-hidden="true"
                          />
                        </span>
                        <span v-else>
                          <SwitchVerticalIcon
                            class="ml-2 h-5 w-5 flex-none rounded text-muted group-hover:visible group-focus:visible"
                          />
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-left sm:table-cell"
                    >
                      <button
                        class="group inline-flex cursor-pointer"
                        @click="sort('platform')"
                      >
                        Platform
                        <span
                          v-if="currentSort === 'platform'"
                          class="ml-2 flex-none rounded text-muted group-hover:visible group-focus:visible"
                        >
                          <ChevronDownIcon
                            :class="
                              currentSortDir === 'desc' ? 'h-5 w-5' : 'hidden'
                            "
                            aria-hidden="true"
                          />
                          <ChevronUpIcon
                            :class="
                              currentSortDir === 'asc' ? 'h-5 w-5' : 'hidden'
                            "
                            aria-hidden="true"
                          />
                        </span>
                        <span v-else>
                          <SwitchVerticalIcon
                            class="ml-2 h-5 w-5 flex-none rounded text-muted group-hover:visible group-focus:visible"
                          />
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      class="hidden px-3 py-3.5 text-left sm:table-cell"
                    >
                      <button
                        class="focus group inline-flex cursor-pointer focus-visible:ring-2"
                        @click="sort('partner')"
                      >
                        Partner
                        <span
                          v-if="currentSort === 'partner'"
                          class="ml-2 flex-none rounded text-muted group-hover:visible group-focus:visible"
                        >
                          <ChevronDownIcon
                            :class="
                              currentSortDir === 'desc' ? 'h-5 w-5' : 'hidden'
                            "
                            aria-hidden="true"
                          />
                          <ChevronUpIcon
                            :class="
                              currentSortDir === 'asc' ? 'h-5 w-5' : 'hidden'
                            "
                            aria-hidden="true"
                          />
                        </span>
                        <span v-else>
                          <SwitchVerticalIcon
                            class="ml-2 h-5 w-5 flex-none rounded text-muted group-hover:visible group-focus:visible"
                          />
                        </span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      class="relative hidden py-3.5 pl-3 pr-4 sm:pr-6 xl:table-cell"
                    >
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <!-- Table Contents -->
                <tbody>
                  <div
                    v-for="[key, value] of Object.entries(sortedEntries)"
                    :key="key"
                  >
                    <tr class="border-t border-accent">
                      <th
                        colspan="5"
                        scope="colgroup"
                        class="bg-neutral-4 px-4 py-3 text-left dark:bg-neutral-2 sm:px-6"
                      >
                        {{ key }}
                      </th>
                    </tr>
                    <div v-for="(entry, index) in value" :key="index">
                      <tr
                        :class="[
                          index % 2 === 0
                            ? 'bg-neutral-3'
                            : 'bg-neutral-2 dark:bg-neutral-4',
                          'border-t'
                        ]"
                      >
                        <td class="py-4 pl-4 pr-3 sm:pl-6">
                          <span v-if="entry.version !== 0"
                            >{{ entry.name }} | {{ entry.version }}
                          </span>
                          <span v-else>{{ entry.name }}</span>
                          <!-- Mobile Stacked View -->
                          <div class="xl:hidden">
                            <span class="sr-only">Title</span>
                            <div class="mt-2 flex items-center">
                              <span class="mr-2 flex sm:mr-6 sm:hidden">
                                <NuxtLink
                                  target="_blank"
                                  :to="entry.platform.link"
                                  class="mr-1 flex items-center"
                                >
                                  <img
                                    class="mr-1 h-8 w-8 rounded-full"
                                    :src="entry.platform.icon.url"
                                    :alt="entry.platform.icon.alt"
                                  />
                                </NuxtLink>
                                <NuxtLink
                                  target="_blank"
                                  :to="entry.partner.link"
                                  class="flex items-center"
                                >
                                  <img
                                    class="h-8 w-8 rounded-full"
                                    :src="entry.partner.icon.url"
                                    :alt="entry.platform.icon.alt"
                                  />
                                </NuxtLink>
                              </span>
                              <span
                                class="relative flex items-center whitespace-nowrap py-2 text-right sm:pr-6"
                              >
                                <img
                                  class="mr-3 h-6 w-6 rounded-full dark:bg-white dark:p-1"
                                  src="@/assets/logos/GitHubLogoBlack.svg"
                                  alt="Github Logo"
                                />
                                <NuxtLink :to="entry.source" target="_blank">
                                  <button
                                    class="mr-2 flex items-center rounded-lg bg-button-accent p-2 text-button-text sm:mr-5"
                                  >
                                    View Code
                                    <span class="sr-only"
                                      >,
                                      {{ entry.name }}
                                    </span>
                                    <ExternalLinkIcon class="h-4 w-4" />
                                  </button>
                                </NuxtLink>
                                <NuxtLink
                                  class="mr-2"
                                  :to="`/libs/guidance/${slugify(
                                    entry.name
                                  )}?id=${entry.benchmarkID}`"
                                >
                                  <button
                                    class="rounded-lg bg-button-accent p-2 text-button-text"
                                  >
                                    View Details<span class="sr-only"
                                      >, {{ entry.name }}</span
                                    >
                                  </button>
                                </NuxtLink>
                              </span>
                            </div>
                          </div>
                        </td>
                        <!-- Full View -->
                        <td
                          class="hidden truncate whitespace-nowrap px-3 py-4 sm:table-cell"
                        >
                          <div class="flex items-center">
                            <img
                              class="h-10 w-10 rounded-full"
                              :src="entry.platform.icon.url"
                              :alt="entry.platform.icon.alt"
                            />
                            <NuxtLink
                              target="_blank"
                              :to="entry.platform.link"
                              class="ml-3 hover:text-nav-active"
                            >
                              {{ entry.platform.name }}
                            </NuxtLink>
                          </div>
                        </td>
                        <td
                          class="hidden truncate whitespace-nowrap px-3 py-4 sm:table-cell"
                        >
                          <div class="flex items-center">
                            <img
                              class="h-10 w-10 rounded-full"
                              :src="entry.partner.icon.url"
                              :alt="entry.partner.icon.alt"
                            />
                            <NuxtLink
                              :to="entry.partner.link"
                              class="ml-3 hover:text-nav-active"
                              target="_blank"
                            >
                              {{ entry.partner.name }}
                            </NuxtLink>
                          </div>
                        </td>
                        <td
                          class="relative hidden items-center whitespace-nowrap py-6 pl-3 pr-4 text-right sm:pr-6 xl:flex"
                        >
                          <img
                            class="mr-3 h-7 w-7 rounded-full dark:bg-white dark:p-1"
                            src="@/assets/logos/GitHubLogoBlack.svg"
                            alt="Github Logo"
                          />
                          <NuxtLink :to="entry.source" target="_blank">
                            <button
                              class="mr-2 flex items-center rounded-lg bg-button-accent p-2 text-button-text sm:mr-5"
                            >
                              View Code
                              <span class="sr-only"
                                >,
                                {{ entry.name }}
                              </span>
                              <ExternalLinkIcon class="h-4 w-4" />
                            </button>
                          </NuxtLink>
                          <NuxtLink
                            :to="`/libs/guidance/${slugify(entry.name)}?id=${
                              entry.benchmarkID
                            }`"
                            class="mr-2"
                          >
                            <button
                              class="rounded-lg bg-button-accent p-2 text-button-text"
                            >
                              View Details<span class="sr-only"
                                >, {{ entry.name }}</span
                              >
                            </button>
                          </NuxtLink>
                        </td>
                      </tr>
                    </div>
                  </div>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ChevronDownIcon,
  ChevronUpIcon,
  SwitchVerticalIcon,
  ExternalLinkIcon
} from '@heroicons/vue/solid';

export default {
  components: {
    ChevronDownIcon,
    ChevronUpIcon,
    SwitchVerticalIcon,
    ExternalLinkIcon
  },
  props: {
    entries: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      categories: [
        'Cloud Service Providers',
        'Virtual Platforms',
        'Operating Systems',
        'Databases',
        'Network',
        'Application Logic',
        'Web Servers'
      ],
      currentSort: 'name',
      currentSortDir: 'asc',
      filter: '',
      filteredData: {}
    };
  },
  computed: {
    sortedEntries() {
      this.categories.forEach((category) => {
        this.filteredEntries[category].sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === 'desc') modifier = -1;
          if (this.currentSort === 'name') {
            if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
            if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          } else if (
            this.currentSort === 'platform' ||
            this.currentSort === 'partner'
          ) {
            if (a[this.currentSort].name < b[this.currentSort].name)
              return -1 * modifier;
            if (a[this.currentSort].name > b[this.currentSort].name)
              return 1 * modifier;
          } else if (this.currentSort === 'version') {
            if (a[this.currentSort][0].version < b[this.currentSort][0].version)
              return -1 * modifier;
            if (a[this.currentSort][0].version > b[this.currentSort][0].version)
              return 1 * modifier;
          }
        });
      });
      return this.filteredData;
    },
    filteredEntries() {
      this.categories.forEach((category) => {
        this.filteredData[category] = this.entries[category].filter((entry) => {
          if (this.filter === '') return true;
          return (
            entry.name.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0 ||
            entry.platform.name
              .toLowerCase()
              .indexOf(this.filter.toLowerCase()) >= 0 ||
            entry.partner.name
              .toLowerCase()
              .indexOf(this.filter.toLowerCase()) >= 0 ||
            (entry.version !== 0 &&
              entry.version.toLowerCase().indexOf(this.filter.toLowerCase()) >=
                0)
          );
        });
      });
      return this.filteredData;
    }
  },
  methods: {
    sort(s) {
      // if s === current sort then reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = s;
    },
    slugify(str) {
      let newStr = str;
      newStr = newStr.toLowerCase();
      newStr = newStr.trim();
      newStr = newStr.replace(/[^\w\s-]/g, '');
      newStr = newStr.replace(/[\s_-]+/g, '-');
      newStr = newStr.replace(/^-+|-+$/g, '');
      return newStr;
    }
  }
};
</script>
