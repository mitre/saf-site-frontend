<template>
  <div class="sticky top-0 z-50 w-full ">
    <Popover class="bg-white dark:bg-dark-bg border-b-2 border-gray-100 dark:border-gray-500 ">
      <div class="max-w-8xl mx-auto px-4 sm:px-1">
        <div class="flex justify-between items-center py-3 pl-0 sm:pl-3 md:pl-3 md:justify-start md:space-x-10">
          <div class="flex justify-left md:flex-1 lg:w-0 lg:flex-1">
            <NuxtLink to="/">
              <span class="sr-only">Workflow</span>
              <img src="@/assets/safLogo.svg" class="w-12 md:w-14" aria-hidden="true" alt="SAF© Logo" />
            </NuxtLink>
            <NuxtLink to="/" class="flex">
              <h1
                class="text-2xl tracking-tighter p-2 font-extrabold whitespace-nowrap text-gray-900 dark:text-MITRE-silver  md:text-3xl xl:text-4xl">
                <span class="block xl:inline">MITRE SAF</span>
              </h1>
              <p class="mt-1 text-xs dark:text-dark-text">©</p>
            </NuxtLink>
          </div>

          <div id="mobile-components" class="-mr-2 -my-2 flex sm:pr-3 md:hidden">
            <!-- <div class="flex-1 flex justify-end px-2 lg:ml-6">
              <div class="max-w-lg w-1/8 lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                    <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input id="search" name="search"
                    class="block w-0 focus:w-full pl-5 focus:pl-10 pr-4 py-3 border border-transparent rounded-md leading-5 bg-white dark:bg-dark-bg text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-MITRE-light-silver focus:border-white dark:focus:border-dark-bg focus:ring-blue-400 dark:focus:ring-dark-bg focus:text-gray-900 sm:text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                    placeholder="Search" type="search" />
                </div>
              </div>
            </div> -->
            <PopoverButton
              class="bg-white dark:bg-dark-bg rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Open menu</span>
              <DotsVerticalIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
            </PopoverButton>
          </div>


          <PopoverGroup as="nav" class="hidden md:flex space-x-7 xl:space-x-10">
            <Popover class="relative" v-slot="{ open }">
              <PopoverButton :class="[
                open
                  ? 'text-gray-900 dark:text-gray-200'
                  : '',
                framework.some(e => e.href === route.fullPath) ? 'text-sky-500' : 'text-gray-600',
                'group bg-white dark:bg-dark-bg rounded-md inline-flex items-center text-base font-medium  hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              ]">
                <span>Framework</span>
                <ChevronDownIcon :class="[
                  open ? 'text-gray-900 dark:text-gray-300'
                    : 'text-gray-400 dark:text-dark-text',
                  framework.some(e => e.href === route.fullPath) ? 'text-sky-500' : 'text-gray-600',
                  'ml-2 h-5 w-5 group-hover:text-gray-900 dark:group-hover:text-gray-200'
                ]" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel
                  class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div class="rounded-lg shadow-lg ring-1 ring-black dark:ring-gray-500 ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white dark:bg-dark-bg px-5 py-6 sm:gap-8 sm:p-8">
                      <NuxtLink v-for="item in framework" :key="item.name" :to="item.href" :class="[
                        '-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700',
                        item.href == route.fullPath
                          ? 'bg-gray-300 dark:bg-gray-700'
                          : 'text-gray-600 dark:text-gray-400'
                      ]">
                        <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900 dark:text-MITRE-silver">
                            {{ item.name }}
                          </p>
                          <p class="mt-1 text-sm text-gray-500">
                            {{ item.description }}
                          </p>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>

            <NuxtLink to="/blog" :class="['text-base font-medium  hover:text-gray-900 dark:hover:text-gray-200',
              route.fullPath == '/blog'
                ? 'text-sky-500'
                : 'text-gray-600 dark:text-gray-400'
            ]">
              Blog
            </NuxtLink>

            <NuxtLink to="/docs" :class="['text-base font-medium hover:text-gray-900 dark:hover:text-gray-200',
              route.fullPath == '/docs'
                ? 'text-sky-500'
                : 'text-gray-600 dark:text-gray-400'
            ]">
              Docs
            </NuxtLink>

            <Popover class="relative" v-slot="{ open }">
              <PopoverButton :class="[
                open
                  ? 'text-gray-900 dark:text-gray-200'
                  : '',
                resources.some(e => e.href === route.fullPath) ? 'text-sky-500' : 'text-gray-600',
                'group bg-white dark:bg-dark-bg rounded-md inline-flex items-center text-base font-medium  hover:text-gray-900 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              ]">
                <span>More</span>
                <ChevronDownIcon :class="[
                  open ? 'text-gray-900 dark:text-gray-300'
                    : 'text-gray-400 dark:text-dark-text',
                  resources.some(e => e.href === route.fullPath) ? 'text-sky-500' : '',
                  'ml-2 h-5 w-5 group-hover:text-gray-900 dark:group-hover:text-gray-200'
                ]" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel
                  class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                  <div class="rounded-lg shadow-lg ring-1 ring-black dark:ring-gray-500 ring-opacity-5 overflow-hidden">
                    <div class="relative grid gap-6 bg-white dark:bg-dark-bg px-5 py-6 sm:gap-8 sm:p-8">
                      <NuxtLink v-for="item in resources" :key="item.name" :to="item.href" :class="[
                        '-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700',
                        item.href == route.fullPath
                          ? 'bg-gray-300 dark:bg-gray-700'
                          : ''
                      ]">
                        <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                        <div class="ml-4">
                          <p class="text-base font-medium text-gray-900 dark:text-MITRE-silver">
                            {{ item.name }}
                          </p>
                          <p class="mt-1 text-sm text-gray-500 dark:text-dark-text">
                            {{ item.description }}
                          </p>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
          <div class="hidden md:flex items-center justify-end flex-1 pr-2 md:w-0">
            <div class="hidden md:flex items-center justify-end flex-1 md:w-0">
              <!-- Possible Sign in functionalilty -->
              <!-- <a href="#" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"> Sign in </a>
              <a href="#" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-indigo-700"> Sign up </a> -->

              <!-- Uncomment once search is added -->
              <!-- <div class="flex-1 flex justify-end px-2 lg:ml-6">
                <div class="max-w-lg w-1/8 lg:max-w-xs">
                  <label for="search" class="sr-only">Search</label>
                  <div class="relative pl-0">
                    <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                      <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input id="search" name="search"
                      class="block w-0 focus:w-full pl-5 focus:pl-10 pr-4 py-3 border border-transparent rounded-md leading-5 bg-white dark:bg-dark-bg text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white dark:focus:bg-MITRE-light-silver focus:border-white dark:focus:border-dark-bg focus:ring-blue-400 dark:focus:ring-dark-bg focus:text-gray-900 sm:text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                      placeholder="Search" type="search" />
                  </div>
                </div>
              </div> -->
            </div>
            <div id="theme-toggle" type="button"
              class="text-gray-500 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
              <div class="relative flex items-center ">
                <SunIcon :class="selected == 'Light' ? 'h-6 w-6' : 'hidden'" />
                <MoonIcon :class="selected == 'Dark' ? 'h-6 w-6' : 'hidden'" />
                <DesktopComputerIcon :class="selected == 'System' ? 'h-6 w-6' : 'hidden'" />
                <select name="theme" id="theme"
                  class="absolute appearance-none pr-3 w-full h-fit opacity-0 dark:bg-slate-600 dark:text-white"
                  @change="switchSelect($event)">
                  <option :selected="selected == 'Light'">Light</option>
                  <option :selected="selected == 'Dark'">Dark</option>
                  <option :selected="selected == 'System'">System</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile Formatting -->
      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <div class="fixed z-50 top-4 right-4 w-full max-w-xs px-6">
          <PopoverOverlay class="fixed z-auto inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
          <PopoverPanel focus class="fixed w-full max-w-xs px-6">
            <div
              class="rounded-lg shadow-lg ring-1 ring-black dark:ring-gray-500 ring-opacity-5 bg-white dark:bg-dark-bg divide-y-2 divide-gray-50">
              <div class="pt-2 pb-4 px-5">
                <div class="flex items-center justify-between">
                  <div class="-mr-2">
                    <PopoverButton
                      class="bg-white dark:bg-dark-bg rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="my-3">
                  <nav class="grid gap-y-8 py-2">
                    <NuxtLink v-for="item in framework" :key="item.name" :to="item.href" :class="[
                      '-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700',
                      item.href == route.fullPath
                        ? 'bg-gray-300 dark:bg-gray-700'
                        : ''
                    ]">
                      <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                      <span class="ml-3 text-base font-medium text-gray-900 dark:text-MITRE-silver">
                        {{ item.name }}
                      </span>
                    </NuxtLink>
                    <NuxtLink v-for="item in resources" :key="item.name" :to="item.href" :class="[
                      '-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700',
                      item.href == route.fullPath
                        ? 'bg-gray-300 dark:bg-gray-700'
                        : ''
                    ]">
                      <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                      <span class="ml-3 text-base font-medium text-gray-900 dark:text-MITRE-silver">
                        {{ item.name }}
                      </span>
                    </NuxtLink>
                    <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" :class="[
                      '-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700',
                      item.href == route.fullPath
                        ? 'bg-gray-300 dark:bg-gray-700'
                        : ''
                    ]">
                      <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                      <span class="ml-3 text-base font-medium text-gray-900 dark:text-MITRE-silver">
                        {{ item.name }}
                      </span>
                    </NuxtLink>
                  </nav>
                </div>
              </div>
              <div class="flex items-center justify-between py-6 px-3">
                <label class="text-gray-900 text-base font-medium dark:text-MITRE-silver">Switch Theme</label>
                <div
                  class="relative flex items-center ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200">
                  <SunIcon :class="selected == 'Light' ? 'h-6 w-6' : 'hidden'" />
                  <MoonIcon :class="selected == 'Dark' ? 'h-6 w-6' : 'hidden'" />
                  <DesktopComputerIcon :class="selected == 'System' ? 'h-6 w-6' : 'hidden'" />
                  <div class="ml-2">{{ selected }}</div>
                  <ChevronDownIcon class="w-5 h-6  text-slate-400" />
                  <select id="theme"
                    class="absolute appearance-none inset-0 w-full h-full opacity-0 dark:bg-slate-600 dark:text-white"
                    @change="switchSelect($event)">
                    <option :selected="selected == 'Light'">Light</option>
                    <option :selected="selected == 'Dark'">Dark</option>
                    <option :selected="selected == 'System'">System</option>
                  </select>
                </div>
              </div>
            </div>
          </PopoverPanel>
        </div>
      </transition>
    </Popover>
    <!-- TODO: Check back later on banner -->
    <!-- <div id="newsBannerDIV" class="relative bg-blue-600">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="pr-16 text-center px-16">
          <p class="font-medium text-white">
            <span class="md:hidden"> We have new changes! </span>
            <span class="hidden md:inline">
              Big news! We're excited to announce new changes!
            </span>
            <span class="block ml-2 sm:inline-block">
              <a href="#" class="text-white font-bold underline">
                Learn more <span aria-hidden="true">&rarr;</span></a>
            </span>
          </p>
        </div>
        <div class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button type="button" id="dismiss-banner-button"
            class="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
            @click="hideBanner()">
            <span class="sr-only">Dismiss</span>
            <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  PopoverOverlay,
} from '@headlessui/vue';
import { ref } from 'vue';
import {
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
  ViewGridIcon,
  XIcon,
  CubeIcon,
  ClipboardCheckIcon,
  SearchIcon,
  DotsVerticalIcon,
  DesktopComputerIcon,
  MoonIcon,
  SunIcon,
  PencilAltIcon,
  UserGroupIcon
} from '@heroicons/vue/outline';
import { AcademicCapIcon, BookOpenIcon, ChevronDownIcon, RssIcon } from '@heroicons/vue/solid';

////  Data  ////
const selected = ref("")
const route = useRoute()
// const options = ref(['Light', 'Dark', 'System'])
const framework = ref([
  {
    name: 'Plan',
    description:
      'Choose, tailor, and create security guidance appropriate for your mission.',
    href: '/framework/plan',
    icon: PencilAltIcon
  },
  {
    name: 'Harden',
    description:
      'Implement security baselines using our Ansible, Chef, and Terraform content.',
    href: '/framework/harden',
    icon: ShieldCheckIcon
  },
  {
    name: 'Validate',
    description:
      'Generate detailed security testing results through automated tests and manual attestation.',
    href: '/framework/validate',
    icon: ClipboardCheckIcon
  },
  {
    name: 'Normalize',
    description:
      'Convert security results from all your security tools into a common data format.',
    href: '/framework/normalize',
    icon: CubeIcon
  },
  {
    name: 'Visualize',
    description:
      'Identify overall security status and deep-dive to solve specific security defects',
    href: '/framework/visualize',
    icon: ViewGridIcon
  }
]);
const navigation = ref([
  {
    name: 'Docs',
    description:
      'Documentation of SAF tools.',
    href: '/docs',
    icon: BookOpenIcon
  },
  {
    name: 'Blog',
    description:
      'Learn more.',
    href: '/blog',
    icon: RssIcon
  }
]);
const resources = ref([
  {
    name: 'FAQ',
    description:
      'Get answers to commonly asked questions and view our contact information.',
    href: '/faq',
    icon: QuestionMarkCircleIcon
  },
  {
    name: 'Training',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '/training',
    icon: AcademicCapIcon
  },
  {
    name: 'Admin Login',
    description:
      'Update and mantain content as an admin.',
    href: 'https://saf-site-backend.herokuapp.com/admin/',
    icon: UserGroupIcon
  }
]);


////  Methods  ////
const switchSelect = (event) => {
  if (event.target.value === 'Light') {
    disableDarkMode()
    localStorage.setItem('user-theme', 'light');
    selected.value = "Light"
    setThemeState(selected.value)
  }
  else if (event.target.value == 'Dark') {
    enableDarkMode()
    localStorage.setItem('user-theme', 'dark');
    selected.value = "Dark"
    setThemeState(selected.value)
  }
  else if (event.target.value == 'System') {
    const userIsInDarkModeOS = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (userIsInDarkModeOS) {
      enableDarkMode()
      localStorage.setItem('user-theme', 'dark');
      selected.value = "System";
      setThemeState(selected.value)
    }
    else {
      disableDarkMode()
      selected.value = "System";
    }
  }
}
const setThemeState = (mode) => {
  localStorage.setItem('theme', mode)
}
const getThemeState = () => {
  let theme = localStorage.getItem('theme')
  selected.value = theme
}
const enableDarkMode = () => {
  document.documentElement.classList.add('dark');
}
const disableDarkMode = () => {
  document.documentElement.classList.remove('dark');
}
const hideBanner = () => {
  let bannerDIV = document.getElementById("newsBannerDIV")
  bannerDIV.style.display = "none"
}


////  Lifecycle  ////
onMounted(() => {
  if (localStorage.getItem('wasVisited') == undefined) {
    selected.value = "Light"
    setThemeState(selected.value)
    localStorage.setItem('wasVisited', true)
  }

  getThemeState()

  if (selected.value === 'Light') {
    disableDarkMode()
    localStorage.setItem('user-theme', 'light');
    selected.value = "Light"
    setThemeState(selected.value)
  }
  else if (selected.value == 'Dark') {
    enableDarkMode()
    localStorage.setItem('user-theme', 'dark');
    selected.value = "Dark"
    setThemeState(selected.value)
  }
  else if (selected.value == 'System') {
    const userIsInDarkModeOS = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (userIsInDarkModeOS) {
      enableDarkMode()
      localStorage.setItem('user-theme', 'dark')
      selected.value = "System"
      setThemeState(selected.value)
    }
    else {
      disableDarkMode()
      selected.value = "System";
    }
  }
});
</script>