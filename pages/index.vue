<template>
  <div>
    <Header />
    <div class="relative h-screen overflow-hidden bg-gray-50 dark:bg-dark-bg">
      <div
        class="hidden sm:absolute sm:inset-y-0 sm:block sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div class="relative mx-auto h-full max-w-7xl" />
      </div>

      <main class="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
        <div class="text-center">
          <h1
            class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span class="block text-blue-600 xl:inline"
              >Security Automation Framework</span
            >
          </h1>
          <p
            class="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl"
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div class="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a
                href="#"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
              >
                Get started
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
// import {Popover, PopoverButton, PopoverPanel} from '@headlessui/vue';
// import {MenuIcon, XIcon} from '@heroicons/vue/outline';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

// const navigation = [
//   {name: 'Product', href: '#'},
//   {name: 'Features', href: '#'},
//   {name: 'Marketplace', href: '#'},
//   {name: 'Company', href: '#'}
// ];
</script>
