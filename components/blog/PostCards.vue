<template>
  <div v-if="isLoaded">
    <div class="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      <div v-for="post in posts" :key="post.title"
        class="flex flex-col rounded-lg shadow-xl border-2 hover:border-2 hover:border-blue-500 dark:hover:border-blue-500 dark:border-gray-600 overflow-hidden">
        <div
          class="flex-1 bg-white dark:bg-dark-backdrop-primary hover:bg-gray-100 dark:hover:bg-gray-700 p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-blue-600">
              <a :href="post.category.href" class="hover:underline">
                {{ post.category.name }}
              </a>
            </p>
            <NuxtLink :to="`/blog/${post.date}/${slugify(post.title)}?id=${post.id}`" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900 dark:text-dark-text">
                {{ post.title }}
              </p>
              <p class="mt-3 text-base text-gray-500 line-clamp-2">
                {{ post.description }}
              </p>
            </NuxtLink>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
            </div>
            <div class="ml-3">
              <span class="text-sm font-medium text-gray-900 dark:text-dark-text ">
                <NuxtLink :to="`/blog/authors?name=${post.author}`" class="hover:underline">
                  <p>{{ post.author }}</p>
                </NuxtLink>
              </span>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time :datetime="post.datetime">
                  {{ post.date }}
                </time>
                <span aria-hidden="true"> &middot; </span>
                <span> {{ readingTime(post.content) }} min read </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="grid h-screen place-items-center">
    <LoadingSpinner />
  </div>
</template>

<script setup>
import slugify from '@/utils/useSlugify';
import { ref, onMounted, nextTick } from 'vue';

////  Data  ////
const isLoaded = ref(false)

////  Props  ////
const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

const { posts } = toRefs(props);

////  Methods  ////
const readingTime = (text) => {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}

////  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    isLoaded.value = true
  });
});
</script>