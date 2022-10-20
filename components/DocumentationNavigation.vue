<template>
    <div class="max-w-8xl z-50 mb-10 sticky top-0 mr-5 bg-white dark:bg-slate-900 relative pointer-events-auto">
        <div class="hidden lg:block h-10 w-100 bg-slate-50 dark:bg-dark-bg -ml-0.5"></div>
        <button type="button" class="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
            <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-3 flex-none"><path d="m19 19-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <circle cx="11" cy="11" r="6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle></svg>
                Quick search...<span class="ml-auto pl-3 flex-none text-xs font-semibold">Ctrl K</span>
        </button>
    </div>
    
    <!-- <div class="mb-10 sticky top-0 -ml-0.5 pointer-events-none">
    <label for="search" class="block text-sm font-medium text-gray-700 dark:text-white">Quick search</label>
    <div class="relative mt-1 flex items-center">
        TODO: Give functionality to quick search bar
      <input type="text" name="search" id="search" class="block w-full rounded-md border-gray-300 mr-5 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
      <div class="absolute inset-y-0 right-0 flex py-1.5 pr-6">
        <kbd class="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">⌘K</kbd>
      </div>
    </div>
  </div> -->

    <div class="w-64 pr-8 xl:w-72 xl:pr-16">
        <nav class='text-base lg:text-sm'>
            <!-- TODO: When adding other items in the list, implement an isActive function to highlight current active icon/text-->
            <ul class="mb-10">
                <li>
                    <a href="/" class="group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold text-sky-500 dark:text-sky-400">
                        <div class="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 bg-sky-300 dark:highlight-white/10">
                            <HomeIcon class="h-6 w-6 p-0.5 stroke-slate-900 " />
                        </div>
                        SAF Home
                    </a>
                </li>
            </ul>

            <ul role="list" class="space-y-9">
            <div v-for="(section, key) in props.docData" :key="key">
                <li key={{section.section_title}}>
                <h2 class="font-display font-medium text-slate-900 dark:text-slate-200">
                    {{section.section_title}}
                </h2>
                <ul
                    role="list"
                    class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
                >
                    <div v-for="subsection in section.subsections">
                    <li key={{subsection.title}} class="relative">
                        <a :href ="`/docs/${subsection.href}`" :class="[
                        'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                        subsection.href==props.currentSubsectionHref
                        ? 'font-semibold text-sky-500 before:bg-sky-500'
                        : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                        ]"
                        >
                        {{subsection.title}}
                    </a>
                    </li>
                    </div>
                </ul>
                </li>
            </div>
            </ul>
        </nav>
    </div>
</template>
  
<script setup>
import { HomeIcon } from '@heroicons/vue/outline'

const props = defineProps(["docData","currentSubsectionHref"]);

</script>