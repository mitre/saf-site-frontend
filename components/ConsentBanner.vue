<template>
  <div
    v-if="open"
    class="fixed bottom-0 left-0 w-full h-[8%] z-50 bg-neutral-3 border-accent border-t-4"
  >
    <div class="flex flex-row items-center justify-evenly m-5">
      <span class="font-bold text-xl"
        >This website uses cookies to ensure you get the best experience on our
        website.
        <a href="#" class="underline text-nav-active"> Learn More</a></span
      >
      <div class="space-x-4">
        <button
          class="rounded-lg bg-button-accent p-2 text-button-text font-bold text-xl"
          @click="
            () => {
              grantConsent();
              open = false;
            }
          "
        >
          Accept Tracking
        </button>
        <button
          class="rounded-lg bg-red-500 p-2 text-button-text font-bold text-xl"
          @click="
            () => {
              revokeConsent();
              open = false;
            }
          "
        >
          Decline Tracking
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const open = ref(true);
const {gtag, grantConsent, revokeConsent} = useGtag();
</script>
