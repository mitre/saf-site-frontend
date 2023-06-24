<template>
  <div class="sticky top-0 z-50 w-full ">
    <Popover class="bg-neutral-1  border-b-2 border-accent ">
      <div class="max-w-8xl mx-auto px-4 sm:px-1">
        <div class="flex justify-between items-center py-3 pl-0 sm:pl-3 md:pl-3 md:justify-start md:space-x-10">
          <div class="flex justify-left md:flex-1 lg:w-0 lg:flex-1 min-w-max">
            <NuxtLink to="/" class="flex">
              <img src="@/assets/safLogo.svg" class="w-12 md:w-14" aria-hidden="true" alt="SAF© Logo" />
              <h1
                class="text-2xl tracking-tighter p-2 font-extrabold whitespace-nowrap text-base  md:text-3xl xl:text-4xl">
                <span class="block xl:inline font-mitre font-extrabold">MITRE SAF<span class="text-xs">©</span></span>
              </h1>
            </NuxtLink>
          </div>

          <div class="-mr-2 -my-2 flex sm:pr-3 lg:hidden">
            <!-- TODO: Mobile Site Search-->
            <PopoverButton
              class="rounded-md p-2 inline-flex items-center justify-center text-nav-base hover:bg-nav-active focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
              <span class="sr-only text-white">Open menu</span>
              <DotsVerticalIcon class="h-6 w-6 text-base " aria-hidden="true" />
            </PopoverButton>
          </div>

          <PopoverGroup as="nav" class="hidden lg:flex space-x-5 xl:space-x-10">
            <NuxtLink to="/getting-started" :class="['text-base font-semibold font-mitre hover:text-nav-hover ',
              '/getting-started' == route.fullPath
                ? 'text-nav-active '
                : 'text-nav-base '
            ]">
              Getting Started
            </NuxtLink>

            <NavDropdown label="Framework" :items="framework" />

            <NavDropdown label="Apps" :items="applications" />

            <NavDropdown label="Libraries" :items="libraries" />

            <NuxtLink v-for="item in navigation" :key="item.name" :to="item.href" :class="['text-base font-semibold font-mitre hover:text-nav-hover ',
              item.href == route.fullPath
                ? 'text-nav-active '
                : 'text-nav-base '
            ]">
              {{ item.name }}
            </NuxtLink>

            <NavDropdown label="More" :items="resources" />

          </PopoverGroup>
          <div class="hidden lg:flex items-center justify-end flex-1 pr-2 md:w-0">
            <div class="hidden xl:flex items-center justify-end flex-1 md:w-0">
              <!-- TODO: Site search-->
            </div>
            <div class="text-base  hover:bg-neutral-2  rounded-lg text-sm p-2.5">
              <div class="relative flex items-center ">
                <SunIcon :class="selected == 'Light' ? 'h-6 w-6' : 'hidden'" />
                <MoonIcon :class="selected == 'Dark' ? 'h-6 w-6' : 'hidden'" />
                <DesktopComputerIcon :class="selected == 'System' ? 'h-6 w-6' : 'hidden'" />
                <label for="theme-selector" class="sr-only">
                  <span>SAF Theme Selector</span>
                </label>
                <select id="theme-selector" name="SAF Theme Selector"
                  class="absolute appearance-none pr-3 w-full h-fit opacity-0 bg-neutral-1  text-base "
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
          <PopoverOverlay class="fixed z-auto inset-0 bg-blur/20 backdrop-blur-sm " />
          <PopoverPanel focus class="fixed w-full max-w-xs px-6">
            <div
              class="rounded-lg shadow-lg ring-1 ring-dropshadow  ring-opacity-5 bg-neutral-1  divide-y-2 divide-accent">
              <div class="pt-2 pb-4 px-5 overflow-y-scroll h-[calc(100vh-110px)]">
                <div class="flex items-center justify-between ">
                  <div class="-mr-2">
                    <PopoverButton
                      class="rounded-md my-2 inline-flex items-center justify-center text-nav-base focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
                      <span class="sr-only">Close menu</span>
                      <XIcon class="h-6 w-6 text-base " aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="my-3">
                  <nav class="grid gap-y-8 py-2">
                    <h1 class="font-bold text-base ">Framework</h1>
                    <NavMobileLinks :items="framework" />

                    <hr class="drop-shadow" />

                    <h1 class="font-bold text-base ">Applications</h1>
                    <NavMobileLinks :items="applications" />

                    <hr class="drop-shadow" />

                    <h1 class="font-bold text-base ">Libraries</h1>
                    <NavMobileLinks :items="libraries" />

                    <hr class="drop-shadow" />

                    <h1 class="font-bold text-base ">Resources</h1>
                    <NavMobileLinks :items="navigation" />
                    <NavMobileLinks :items="resources" />
                  </nav>
                </div>
              </div>
              <div class="flex items-center justify-between py-6 px-3">
                <div
                  class="relative flex items-center rounded-lg shadow-sm p-2 text-button-text bg-button-accent font-semibold">
                  <SunIcon :class="selected == 'Light' ? 'h-6 w-6' : 'hidden'" />
                  <MoonIcon :class="selected == 'Dark' ? 'h-6 w-6' : 'hidden'" />
                  <DesktopComputerIcon :class="selected == 'System' ? 'h-6 w-6' : 'hidden'" />
                  <div class="ml-2">{{ selected }}</div>
                  <ChevronDownIcon class="w-5 h-6" />
                  <label for="mobile-theme-selector" class="sr-only">
                    <span>SAF Theme Selector</span>
                  </label>
                  <span class="sr-only">SAF Theme Selector</span>
                  <select name="Mobile Theme Selector"
                    class="absolute appearance-none inset-0 w-full h-full opacity-0 bg-button-accent text-button-text"
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
  UserGroupIcon,
  DesktopComputerIcon,
  MoonIcon,
  SunIcon,
  ChevronDownIcon
} from '@heroicons/vue/outline';
import { AcademicCapIcon, BookOpenIcon, RssIcon } from '@heroicons/vue/solid';

import PlanIcon from '../assets/PlanIcon.vue'
import HardenIcon from '../assets/HardenIcon.vue'
import HardenLibIcon from '../assets/HardenLibIcon.vue'
import ValidateIcon from '../assets/ValidateIcon.vue'
import ValidationLibIcon from '../assets/ValidationLibIcon.vue'
import NormalizeIcon from '../assets/NormalizeIcon.vue'
import VisualizeIcon from '../assets/VisualizeIcon.vue'
import HeimdallLogo from '../assets/HeimdallLogo.vue'
import SafShieldLogo from '~/assets/SafShieldLogo.vue';

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
    icon: HardenLibIcon
  },
  {
    name: 'Validate',
    description:
      'Generate detailed security testing results through automated tests and manual attestation.',
    href: '/libs/validate',
    icon: ValidationLibIcon
  },
  {
    name: 'TS InSpec Objects',
    description:
      '??????????',
    href: '/libs/ts-inspec-objects',
    icon: ClipboardCheckIcon
  },
  {
    name: 'eMASS Client',
    description:
      '?????????',
    href: '/libs/emass-client',
    icon: ClipboardCheckIcon
  }
]);

const applications = ref([
  {
    name: 'Heimdall',
    description:
      '?????',
    href: '/apps/heimdall',
    icon: HeimdallLogo
  },
  {
    name: 'Vulcan',
    description:
      '?????',
    href: '/apps/vulcan',
    icon: SafShieldLogo
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