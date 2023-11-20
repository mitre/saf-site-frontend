<template>
  <div class="relative bg-neutral-2 px-6 py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-7xl divide-y divide-accent px-6 lg:px-8">
      <h2
        class="text-4xl sm:text-5xl text-center font-bold leading-10 tracking-tight text-header"
      >
        User Stories
      </h2>
      <div class="mt-10 space-y-8 divide-y divide-accent">
        <div
          v-for="userStory in userStories"
          :key="userStory.orderID"
          class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
        >
          <span class="font-bold text-2xl leading-7 lg:col-span-5">{{
            userStory.question
          }}</span>
          <span class="mt-4 lg:col-span-7 lg:mt-0">
            <div
              class="prose prose-2xl dark:prose-invert leading-7"
              v-html="userStory.answer"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/*   Data   */
const props = defineProps({
  userStories: {
    type: Array<UserStory>,
    required: true
  }
});

const {userStories} = toRefs(props);
</script>
