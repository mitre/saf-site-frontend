<template>
  <div class="sticky top-0 z-50 w-full">
    <Popover class="border-b-2 border-accent bg-neutral-1">
      <div class="max-w-8xl mx-auto px-4 sm:px-1">
        <div
          class="flex items-center justify-between py-3 pl-0 sm:pl-3 md:justify-start md:space-x-10 md:pl-3"
        >
          <div class="justify-left flex min-w-max md:flex-1 lg:w-0 lg:flex-1">
            <NuxtLink to="/" class="flex">
              <img
                src="@/assets/logos/safLogo.svg"
                class="w-10 mr-2"
                aria-hidden="true"
                alt="MITRE SAF© Shielf"
              /><img
                src="@/assets/logos/MITRE-SAF-lockup.svg"
                class="w-40"
                aria-hidden="true"
                alt="MITRE SAF© Lockup Logo"
              />
              <span
                class="whitespace-nowrap p-2 mb-2 font-bold tracking-tighter text-fill text-2xl"
                ><sup>©</sup></span
              >
            </NuxtLink>
          </div>

          <div class="-my-2 -mr-2 flex sm:pr-3 lg:hidden">
            <!-- TODO: Mobile Site Search-->
            <PopoverButton
              class="inline-flex items-center justify-center rounded-md p-2 text-nav-base hover:bg-nav-active focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
            >
              <span class="sr-only">Open menu</span>
              <DotsVerticalIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>

          <PopoverGroup
            as="nav"
            class="text-xl hidden space-x-5 lg:flex xl:space-x-10"
          >
            <NuxtLink
              to="/getting-started"
              :class="[
                'font-semibold hover:text-nav-hover ',
                '/getting-started' === route.fullPath
                  ? 'text-nav-active '
                  : 'text-nav-base '
              ]"
            >
              Getting Started
            </NuxtLink>

            <NavDropdown label="Framework" :items="framework" />

            <NavDropdown label="Apps" :items="applications" />

            <NavDropdown label="Libraries" :items="libraries" />

            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              :class="[
                'font-semibold hover:text-nav-hover ',
                item.href === route.fullPath
                  ? 'text-nav-active'
                  : 'text-nav-base'
              ]"
            >
              {{ item.name }}
            </NuxtLink>

            <NavDropdown label="More" :items="resources" />
          </PopoverGroup>
          <div
            class="hidden flex-1 items-center justify-end pr-2 md:w-0 lg:flex"
          >
            <div class="hidden flex-1 items-center justify-end md:w-0 xl:flex">
              <!-- TODO: Site search-->
            </div>
            <div class="rounded-lg p-2.5 hover:bg-neutral-2">
              <div class="relative flex items-center text-foreground">
                <SunIcon :class="selected === 'Light' ? 'h-6 w-6' : 'hidden'" />
                <MoonIcon :class="selected === 'Dark' ? 'h-6 w-6' : 'hidden'" />
                <DesktopComputerIcon
                  :class="selected === 'System' ? 'h-6 w-6' : 'hidden'"
                />
                <label for="theme-selector" class="sr-only">
                  <span>MITRE SAF <sup>©</sup> Theme Selector</span>
                </label>
                <select
                  id="theme-selector"
                  name="MITRE SAF Theme Selector"
                  class="absolute h-fit w-full appearance-none bg-neutral-1 pr-3 opacity-0"
                  @change="switchSelect($event)"
                >
                  <option :selected="selected === 'Light'">Light</option>
                  <option :selected="selected === 'Dark'">Dark</option>
                  <option :selected="selected === 'System'">System</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile Formatting -->
      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div class="fixed right-4 top-4 z-50 w-full max-w-xs px-6">
          <PopoverOverlay
            class="fixed inset-0 z-auto bg-blur/20 backdrop-blur-sm"
          />
          <PopoverPanel focus class="fixed w-full max-w-xs px-6">
            <div
              class="divide-y-2 divide-accent rounded-lg bg-neutral-1 shadow-lg ring-1 ring-dropshadow ring-opacity-5"
            >
              <div
                class="h-[calc(100vh-110px)] overflow-y-scroll px-5 pb-4 pt-2"
              >
                <div class="flex items-center justify-between">
                  <div class="-mr-2">
                    <PopoverButton
                      class="my-2 inline-flex items-center justify-center rounded-md text-nav-base focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
                    >
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

                    <h1 class="font-bold">Applications</h1>
                    <NavMobileLinks :items="applications" />

                    <hr class="drop-shadow" />

                    <h1 class="font-bold">Libraries</h1>
                    <NavMobileLinks :items="libraries" />

                    <hr class="drop-shadow" />

                    <h1 class="font-bold">Resources</h1>
                    <div class="-mb-5">
                      <NavMobileLinks
                        :items="[
                          {
                            name: 'Getting Started',
                            description: 'Getting started with MITRE SAF©.',
                            href: '/getting-started',
                            icon: PresentationChartBarIcon
                          }
                        ]"
                      />
                    </div>
                    <div class="-mb-5">
                      <NavMobileLinks :items="navigation" />
                    </div>
                    <NavMobileLinks :items="resources" />
                  </nav>
                </div>
              </div>
              <div class="flex items-center justify-between px-3 py-6">
                <div
                  class="relative flex items-center rounded-lg bg-button-accent p-2 font-semibold text-button-text shadow-sm"
                >
                  <SunIcon
                    :class="selected === 'Light' ? 'h-6 w-6' : 'hidden'"
                  />
                  <MoonIcon
                    :class="selected === 'Dark' ? 'h-6 w-6' : 'hidden'"
                  />
                  <DesktopComputerIcon
                    :class="selected === 'System' ? 'h-6 w-6' : 'hidden'"
                  />
                  <div class="ml-2">{{ selected }}</div>
                  <ChevronDownIcon class="h-6 w-5" />
                  <label for="mobile-theme-selector" class="sr-only">
                    <span>MITRE SAF <sup>©</sup> Theme Selector</span>
                  </label>
                  <span class="sr-only"
                    >MITRE SAF <sup>©</sup> Theme Selector</span
                  >
                  <select
                    name="Mobile Theme Selector"
                    class="absolute inset-0 h-full w-full appearance-none bg-button-accent text-button-text opacity-0"
                    @change="switchSelect($event)"
                  >
                    <option :selected="selected === 'Light'">Light</option>
                    <option :selected="selected === 'Dark'">Dark</option>
                    <option :selected="selected === 'System'">System</option>
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
  PopoverOverlay
} from '@headlessui/vue';
import {ref, markRaw, shallowRef} from 'vue';
import {
  QuestionMarkCircleIcon,
  XIcon,
  DotsVerticalIcon,
  UserGroupIcon,
  DesktopComputerIcon,
  MoonIcon,
  SunIcon,
  ChevronDownIcon,
  PresentationChartBarIcon
} from '@heroicons/vue/outline';
import {AcademicCapIcon, BookOpenIcon, RssIcon} from '@heroicons/vue/solid';

import PlanIcon from '@/assets/icons/PlanIcon.vue';
import HardenIcon from '@/assets/icons/HardenIcon.vue';
import HardenLibIcon from '@/assets/icons/HardenLibIcon.vue';
import ValidateIcon from '@/assets/icons/ValidateIcon.vue';
import ValidationLibIcon from '@/assets/icons/ValidationLibIcon.vue';
import NormalizeIcon from '@/assets/icons/NormalizeIcon.vue';
import VisualizeIcon from '@/assets/icons/VisualizeIcon.vue';
import HeimdallLogo from '@/assets/icons/HeimdallLogo.vue';
import SafShieldLogo from '@/assets/icons/SafShieldLogo.vue';

/*   Data   */
const selected = ref('');
const route = useRoute();
const framework = markRaw([
  {
    name: 'Plan',
    description:
      'Choose, tailor, and create security configuration guidance appropriate for your mission.',
    href: '/framework/plan',
    icon: PlanIcon
  },
  {
    name: 'Harden',
    description: 'Take action to configure software for security.',
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
      'View comprehensive security status, identify security defects, and manage remediation.',
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
    name: 'OHDF Converters',
    description: 'Convert your security data to, or from, normalized OHDF.',
    href: '/libs/ohdf-converters',
    icon: SafShieldLogo
  },
  {
    name: 'TS InSpec Objects',
    description:
      'Manipulate InSpec profiles programmatically using Typescript.',
    href: '/libs/ts-inspec-objects',
    icon: SafShieldLogo
  },
  {
    name: 'eMASS Client',
    description: 'Interact with eMASS via API.',
    href: '/libs/emass-client',
    icon: SafShieldLogo
  },
  {
    name: 'InSpecJS',
    description: 'Deep dive into OHDF files.',
    href: '/libs/inspecjs',
    icon: SafShieldLogo
  },
  {
    name: 'STIG XCCDF XML Library',
    description: 'Get benchmark files.',
    href: '/libs/stig-xccdf-xml-library',
    icon: SafShieldLogo
  }
]);

const applications = shallowRef([
  {
    name: 'Heimdall©',
    description: 'Security Data Visualization App',
    href: '/apps/heimdall',
    icon: HeimdallLogo
  },
  {
    name: 'Vulcan©',
    description: 'Security Guidance Authorship App',
    href: '/apps/vulcan',
    icon: SafShieldLogo
  },
  {
    name: 'SAF CLI',
    description: 'Support utility for security automation',
    href: '/apps/saf-cli',
    icon: SafShieldLogo
  },
  {
    name: 'eMASSer',
    description: 'Automate interactions with eMASS',
    href: '/apps/emasser',
    icon: SafShieldLogo
  }
]);

const navigation = ref([
  {
    name: 'Docs',
    description: 'Documentation of MITRE SAF© tools.',
    href: '/docs',
    icon: BookOpenIcon
  },
  {
    name: 'Blog',
    description: 'Learn more.',
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
    description: 'Update and mantain content as an admin.',
    href: 'https://saf-site-backend.herokuapp.com/admin/',
    icon: UserGroupIcon
  }
]);

/*   Methods   */
const setStorageThemeState = (mode) => {
  localStorage.setItem('theme', mode);
};

const enableDarkMode = () => {
  document.documentElement.classList.add('dark');
};
const disableDarkMode = () => {
  document.documentElement.classList.remove('dark');
};
const switchSelect = (event) => {
  if (event.target.value === 'Light') {
    disableDarkMode();
    selected.value = 'Light';
    setStorageThemeState(selected.value);
  } else if (event.target.value === 'Dark') {
    enableDarkMode();
    selected.value = 'Dark';
    setStorageThemeState(selected.value);
  } else if (event.target.value === 'System') {
    const userIsInDarkModeOS = window
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;
    if (userIsInDarkModeOS) {
      enableDarkMode();
      selected.value = 'System';
      setStorageThemeState(selected.value);
    } else {
      disableDarkMode();
      selected.value = 'System';
      setStorageThemeState(selected.value);
    }
  }
};

/*   Lifecycle   */
onMounted(() => {
  if (localStorage.getItem('theme') === null) {
    selected.value = 'System';
    setStorageThemeState(selected.value);
  } else {
    selected.value = localStorage.getItem('theme');
  }

  if (selected.value === 'Light') {
    disableDarkMode();
  } else if (selected.value === 'Dark') {
    enableDarkMode();
  } else if (selected.value === 'System') {
    const userIsInDarkModeOS = window
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : false;
    if (userIsInDarkModeOS) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }
});
</script>
