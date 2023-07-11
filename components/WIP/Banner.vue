<!-- Currently Not In Use (Remove comment after complete)-->
<template>
  <div id="newsBannerDIV" class="relative bg-blue-600">
    <div class="mx-auto max-w-7xl px-3 py-3 sm:px-6 lg:px-8">
      <div class="px-16 pr-16 text-center">
        <p class="font-medium text-white">
          <span class="md:hidden"> We have new changes! </span>
          <span class="hidden md:inline">
            Big news! We're excited to announce new changes!
          </span>
          <span class="ml-2 block sm:inline-block">
            <a href="#" class="font-bold text-white underline">
              Learn more <span aria-hidden="true">&rarr;</span></a
            >
          </span>
        </p>
      </div>
      <div
        class="absolute inset-y-0 right-0 flex items-start pr-1 pt-1 sm:items-start sm:pr-2 sm:pt-1"
      >
        <button
          id="dismiss-banner-button"
          type="button"
          class="flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
          @click="hideBanner()"
        >
          <span class="sr-only">Dismiss</span>
          <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  </div>
</template>

<!-- Currently Not In Use -->
<script setup>
/// /  Props  ////

/// /  Methods  ////
const hideBanner = () => {
  const bannerDIV = document.getElementById('newsBannerDIV');
  bannerDIV.style.display = 'none';
};

/// /  Lifecycle  ////
</script>
