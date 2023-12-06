<template>
  <ul role="list" class="grid grid-cols-1 gap-2 sm:grid-cols-2">
    <li
      v-for="content in contents"
      :key="content.email"
      class="col-span-1 divide-y divide-neutral-3 dark:divide-neutral-1 rounded-lg bg-neutral-2 dark:bg-neutral-3 shadow"
    >
      <div>
        <div
          class="-mt-px flex divide-x divide-neutral-3 dark:divide-neutral-1"
        >
          <div class="flex w-0 flex-1">
            <a
              :href="content.partner.link"
              class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 font-semibold text-foreground"
            >
              <img
                class="h-10 w-10"
                :src="content.partner.icon.url"
                :alt="content.partner.icon.alt"
              />
              {{ content.partner.name }}
            </a>
          </div>
          <div class="-ml-px flex w-0 flex-1">
            <a
              :href="content.platform.link"
              class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 font-semibold text-foreground"
            >
              <img
                class="h-10 w-10"
                :src="content.platform.icon.url"
                :alt="content.platform.icon.alt"
              />
              {{ content.platform.name }}
            </a>
          </div>
        </div>
      </div>
      <div class="flex w-full items-center justify-between space-x-6 p-5">
        <div class="flex-1 truncate">
          <span
            v-if="isRecentlyUpdated(content.last_update)"
            class="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-sm font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
          >
            Recently Updated
          </span>
          <h3 class="truncate text-xl font-bold text-foreground">
            {{ content.name_long }}
          </h3>
          <p class="truncate text-lg text-subtext">
            Last Updated: {{ content.last_update }}
          </p>
        </div>
        <a :href="content.source">
          <GitHubLogo class="h-10 w-10 fill-[#24292f] dark:fill-white" />
        </a>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import GitHubLogo from '@/assets/logos/GitHubLogo.vue';

/*   Data   */
const props = defineProps({
  contents: {
    type: Object,
    required: true
  }
});

const {contents} = toRefs(props);

/*   Methods   */
const isRecentlyUpdated = (date: string) => {
  const oldDate = new Date(date);
  const now = new Date();

  const msBetweenDates = Math.abs(oldDate.getTime() - now.getTime());

  const daysBetweenDates = msBetweenDates / (24 * 60 * 60 * 1000);
  if (daysBetweenDates < 30) {
    return true;
  }
  return false;
};
</script>
