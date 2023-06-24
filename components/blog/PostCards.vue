<template>
  <div v-if="isLoaded">
    <div class="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      <NuxtLink :to="`/blog/${post.date}/${slugify(post.title)}?id=${post.id}`" v-for="post in posts" :key="post.title"
        class="flex flex-col rounded-lg shadow-lg border-2 hover:border-2 hover:border-nav-hover  border-accent  overflow-hidden">
        <div class="flex-1 bg-neutral-2 hover:bg-opacity-60 p-6 flex flex-col justify-between">
          <div class="flex-1">
            <span class="text-sm font-semibold rounded-full px-2 py-1 bg-neutral-3  text-base ">
              {{ post.category.name }}
            </span>
            <div class="block mt-2">
              <p class="text-xl font-semibold text-base ">
                {{ post.title }}
              </p>
              <p class="mt-3 text-base text-muted  line-clamp-2">
                {{ post.description }}
              </p>
            </div>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0">
            </div>
            <div class="ml-3">
              <span class="text-sm font-medium text-base ">
                <NuxtLink :to="`/blog/authors?name=${post.author}`" class="hover:underline">
                  <p>{{ post.author }}</p>
                </NuxtLink>
              </span>
              <div class="flex space-x-1 text-sm text-muted ">
                <time :datetime="post.datetime">
                  {{ post.date }}
                </time>
                <span aria-hidden="true"> &middot; </span>
                <span class="text-muted "> {{ readingTime(post.content) }} min read </span>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
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