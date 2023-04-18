<template>
  <div class="sticky top-0 z-50 w-full ">
    <Popover
      class="bg-light-backdrop-primary dark:bg-dark-backdrop-primary border-b-2 border-light-border-primary dark:border-dark-border-primary">
      <div class="max-w-8xl mx-auto px-4 sm:px-1">
        <div class="flex justify-between items-center py-3 pl-0 sm:pl-3 md:pl-3 md:justify-start md:space-x-10">
          <div class="flex justify-left md:flex-1 lg:w-0 lg:flex-1">
            <NuxtLink to="/">
              <span class="sr-only">Workflow</span>
              <img src="@/assets/safLogo.svg" class="w-12 md:w-14" aria-hidden="true" alt="SAF© Logo" />
            </NuxtLink>
            <NuxtLink to="/" class="flex">
              <h1
                class="text-2xl tracking-tighter p-2 font-extrabold whitespace-nowrap text-light-text dark:text-dark-text  md:text-3xl xl:text-4xl">
                <span class="block xl:inline">MITRE SAF</span>
              </h1>
              <p class="mt-1 text-xs text-light-text dark:text-dark-text">©</p>
            </NuxtLink>
          </div>

          <div id="mobile-components" class="-mr-2 -my-2 flex sm:pr-3 md:hidden">
            <!-- TODO: Mobile Site Search-->
            <PopoverButton
              class="rounded-md p-2 inline-flex items-center justify-center text-nav-light-inactive hover:bg-nav-light-active focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-border-primary">
              <span class="sr-only">Open menu</span>
              <DotsVerticalIcon class="h-6 w-6 text-gray-400" aria-hidden="true" />
            </PopoverButton>
          </div>

          <PopoverGroup as="nav" class="hidden md:flex space-x-7 xl:space-x-10">
            <NuxtLink to="/getting-started" :class="['text-base font-medium hover:text-nav-light-hover dark:hover:text-nav-dark-hover',
              '/getting-started' == route.fullPath
                ? 'text-nav-light-active dark:text-nav-dark-active'
                : 'text-nav-light-inactive dark:text-nav-dark-inactive'
            ]">
              Getting Started
            </NuxtLink>

            <NavDropdown label="Framework" :items="framework" />

            <NavDropdown label="Apps" :items="applications" />

            <NavDropdown label="Libraries" :items="libraries" />

            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" :class="['text-base font-medium hover:text-nav-light-hover dark:hover:text-nav-dark-hover',
              item.href == route.fullPath
                ? 'text-nav-light-active dark:text-nav-dark-active'
                : 'text-nav-light-inactive dark:text-nav-dark-inactive'
            ]">
              {{ item.name }}
            </NuxtLink>

            <NavDropdown label="More" :items="resources" />

          </PopoverGroup>
          <div class="hidden md:flex items-center justify-end flex-1 pr-2 md:w-0">
            <div class="hidden md:flex items-center justify-end flex-1 md:w-0">
              <!-- TODO: Site search-->
            </div>
            <ThemeSwitcher :selected="selected" />
          </div>
        </div>
      </div>
      <!-- Mobile Formatting -->
      <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <div class="fixed z-50 top-4 right-4 w-full max-w-xs px-6">
          <PopoverOverlay class="fixed z-auto inset-0 bg-light-blur/20 backdrop-blur-sm dark:bg-dark-blur/80" />
          <PopoverPanel focus class="fixed w-full max-w-xs px-6">
            <div
              class="rounded-lg shadow-lg ring-1 ring-light-dropshadow dark:ring-dark-dropshadow ring-opacity-5 bg-light-backdrop-primary dark:bg-dark-backdrop-primary divide-y-2 divide-light-border-primary">
              <div class="pt-2 pb-4 px-5 overflow-y-scroll h-[calc(100vh-110px)]">
                <div class="flex items-center justify-between ">
                  <div class="-mr-2">
                    <PopoverButton
                      class="rounded-md my-2 inline-flex items-center justify-center text-nav-light-inactive focus:outline-none focus:ring-2 focus:ring-inset focus:ring-light-border-primary">
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="my-3">
                  <nav class="grid gap-y-8 py-2">
                    <h1 class="font-bold">Framework</h1>
                    <NavMobileLinks :items="framework" />

                    <hr class="drop-shadow" />

                    <h1 class="font-bold">Libraries</h1>
                    <NavMobileLinks :items="libraries" />

                    <hr class="drop-shadow" />

                    <h1 class="font-bold">Resources</h1>
                    <NavMobileLinks :items="navigation" />
                    <NavMobileLinks :items="resources" />
                  </nav>
                </div>
              </div>
              <div class="flex items-center justify-between py-6 px-3">
                <MobileThemeSwitcher :selected="selected" />
              </div>
            </div>
          </PopoverPanel>
        </div>
      </transition>
    </Popover>
    <!-- TODO: Check back later on banner -->
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
import { ref, markRaw } from 'vue';
import {
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
  XIcon,
  ClipboardCheckIcon,
  DotsVerticalIcon,
  UserGroupIcon
} from '@heroicons/vue/outline';
import { AcademicCapIcon, BookOpenIcon, RssIcon } from '@heroicons/vue/solid';

import PlanIcon from '../assets/PlanIcon.vue'
import HardenIcon from '../assets/HardenIcon.vue'
import ValidateIcon from '../assets/ValidateIcon.vue'
import NormalizeIcon from '../assets/NormalizeIcon.vue'
import VisualizeIcon from '../assets/VisualizeIcon.vue'

////  Data  ////
const selected = ref("")
const route = useRoute()
const framework = markRaw([
  {
    name: 'Plan',
    description:
      'Choose, tailor, and create security guidance appropriate for your mission.',
    href: '/framework/plan',
    icon: PlanIcon

  },
  {
    name: 'Harden',
    description:
      'Implement security baselines using our Ansible, Chef, and Terraform content.',
    href: '/framework/harden',
    icon: HardenIcon
  },
  {
    name: 'Validate',
    description:
      'Generate detailed security testing results through automated tests and manual attestation.',
    href: '/framework/validate',
    icon: ValidateIcon
  },
  {
    name: 'Normalize',
    description:
      'Convert security results from all your security tools into a common data format.',
    href: '/framework/normalize',
    icon: NormalizeIcon
  },
  {
    name: 'Visualize',
    description:
      'Identify overall security status and deep-dive to solve specific security defects',
    href: '/framework/visualize',
    icon: VisualizeIcon
  }
]);

const libraries = ref([
  {
    name: 'Harden',
    description:
      'Implement security baselines using our Ansible, Chef, and Terraform content.',
    href: '/libs/harden',
    icon: ShieldCheckIcon
  },
  {
    name: 'Validate',
    description:
      'Generate detailed security testing results through automated tests and manual attestation.',
    href: '/libs/validate',
    icon: ClipboardCheckIcon
  },
  {
    name: 'TS InSpec Objects',
    description:
      '??????????',
    href: '/libs/inspec-objects',
    icon: ClipboardCheckIcon
  },
  {
    name: 'eMASS Client',
    description:
      '?????????',
    href: '/libs/emass',
    icon: ClipboardCheckIcon
  }
]);

const applications = ref([
  {
    name: 'Heimdall',
    description:
      '?????',
    href: '/apps/heimdall',
    icon: ShieldCheckIcon
  },
  {
    name: 'Vulcan',
    description:
      '?????',
    href: '/apps/vulcan',
    icon: ShieldCheckIcon
  },
  {
    name: 'SAF CLI',
    description:
      '?????',
    href: '/apps/saf-cli',
    icon: ShieldCheckIcon
  },
  {
    name: 'eMASSer',
    description:
      '?????',
    href: '/apps/emasser',
    icon: ShieldCheckIcon
  },
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