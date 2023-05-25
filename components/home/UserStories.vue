<template>
  <div class="relative bg-light-backdrop-secondary dark:bg-dark-backdrop-secondary px-6 py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-7xl divide-y divide-light-border-primary dark:divide-dark-border-primary px-6   lg:px-8">
      <h2 class="text-3xl sm:text-4xl font-bold leading-10 tracking-tight text-light-header dark:text-dark-header">User
        Stories</h2>
      <dl class="mt-10 space-y-8 divide-y divide-light-border-primary dark:divide-dark-border-primary">
        <div v-for="userStory in userStories" :key="userStory.id" class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <dt class="text-base font-bold leading-7 text-light-text dark:text-dark-text lg:col-span-5">{{
            userStory.question }}</dt>
          <dd class="mt-4 lg:col-span-7 lg:mt-0">
            <div class="text-base leading-7 text-light-text dark:text-dark-text" v-html="userStory.answer" />
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  userStories: {
    type: Array,
    required: true,
  },
})

const { userStories } = toRefs(props)


</script>