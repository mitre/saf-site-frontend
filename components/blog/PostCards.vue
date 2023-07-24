<template>
  <div v-if="isLoaded">
    <div class="mx-auto mt-4 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
      <NuxtLink v-for="post in posts" :key="post.title" :to="`/blog/${post.date}/${slugify(post.title)}?id=${post.id}`"
        class="flex flex-col overflow-hidden rounded-lg border-2 border-accent shadow-lg hover:border-2 hover:border-nav-hover">
        <div class="flex flex-1 flex-col justify-between bg-neutral-2 p-6 hover:bg-opacity-60">
          <div class="flex-1">
            <span class="rounded-full bg-neutral-3 px-2 py-1 text-sm font-semibold">
              {{ post.category.name }}
            </span>
            <div class="mt-2 block">
              <p class="text-xl font-semibold">
                {{ post.title }}
              </p>
              <p class="mt-3 line-clamp-2 text-muted">
                {{ post.description }}
              </p>
            </div>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0"></div>
            <div class="ml-3">
              <span class="text-sm font-medium">
                <NuxtLink :to="`/blog/authors?name=${post.author}`" class="hover:underline">
                  <p>{{ post.author }}</p>
                </NuxtLink>
              </span>
              <div class="flex space-x-1 text-sm text-muted">
                <span>
                  {{ post.date }}
                </span>
                <span aria-hidden="true"> &middot; </span>
                <span class="text-muted">
                  {{ readingTime(post.content) }} min read
                </span>
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

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import slugify from '@/utils/useSlugify';
import { BlogPost } from 'global';

/// /  Data  ////
const isLoaded = ref(false);

/// /  Props  ////
const props = defineProps({
  posts: {
    type: Array<BlogPost>,
    required: true
  }
});

const { posts } = toRefs(props);

/// /  Methods  ////
const readingTime = (text: string) => {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
};

/// /  Lifecycle  ////
onMounted(async () => {
  await nextTick(async () => {
    isLoaded.value = true;
  });
});
</script>
