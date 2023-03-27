<template>
  <div class="relative bg-white dark:bg-dark-bg py-24 sm:py-32 lg:py-40">
    <div class="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <h2 class="text-3xl sm:text-4xl font-bold leading-10 tracking-tight text-gray-900">User Stories</h2>
        <dl class="mt-10 space-y-8 divide-y divide-gray-900/10">
          <div v-for="userStory in userStories" :key="userStory.id" class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt class="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{{ userStory.question }}</dt>
            <dd class="mt-4 lg:col-span-7 lg:mt-0">
              <div class="text-base leading-7 text-gray-600" v-html="userStory.answer" />
            </dd>
          </div>
        </dl>
      </div>
  </div>
</template>

<script setup>
// const userStorys = [
//   {
//     id: 1,
//     question: "What's the best thing about Switzerland?",
//     answer:
//       "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//   },
// ]

const props = defineProps({
    userStories: {
        type: Array,
        required: true,
    },
})

const { userStories } = toRefs(props)


</script>