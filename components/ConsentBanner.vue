<template>
  <div
    v-if="cookie === undefined"
    :class="[
      'fixed bottom-0 left-0 w-full h-[10%] z-50 bg-neutral-3 border-accent border-t-2'
    ]"
  >
    <div class="grid grid-cols-12 gap-4 m-5">
      <span class="font-semibold text-lg col-span-10"
        >This website uses cookies so we can measure and improve performance.
        These cookies are disabled by default and require your permission before
        they are activated.
        <a href="/cookies" class="underline text-nav-active ml-2">
          Learn More</a
        ></span
      >

      <button
        class="rounded-lg bg-button-accent p-2 text-button-text font-bold text-xl"
        @click="
          () => {
            acceptConsent();
          }
        "
      >
        I Accept
      </button>
      <button
        class="rounded-lg bg-red-500 p-2 text-button-text font-bold text-xl"
        @click="
          () => {
            declineConsent();
          }
        "
      >
        I Reject
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const cookie = useCookie<number>('cookie-agreed');
console.log(cookie);
const {gtag, grantConsent, revokeConsent} = useGtag();

const acceptConsent = () => {
  grantConsent();
  cookie.value = 1;
};

const declineConsent = () => {
  revokeConsent();
  cookie.value = 0;
};
</script>
