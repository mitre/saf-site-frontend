<template>
  <div v-if="isLoaded">
    <div class="mx-auto mt-4 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
      <div
        v-for="post in posts"
        :key="post.title"
        class="flex flex-col overflow-hidden rounded-lg border-2 shadow-xl hover:border-2 hover:border-blue-500 dark:border-gray-600 dark:hover:border-blue-500"
      >
        <div
          class="flex flex-1 flex-col justify-between bg-white p-6 hover:bg-gray-100 dark:bg-dark-bg dark:hover:bg-gray-700"
        >
          <div class="flex-1">
            <p class="text-sm font-medium text-blue-600">
              <a :href="post.category.href" class="hover:underline">
                {{ post.category.name }}
              </a>
            </p>
            <NuxtLink
              :to="`/blog/${post.date}/${slugify(post.title)}?id=${post.id}`"
              class="mt-2 block"
            >
              <p
                class="text-xl font-semibold text-gray-900 dark:text-dark-text"
              >
                {{ post.title }}
              </p>
              <p class="mt-3 text-base text-gray-500 line-clamp-2">
                {{ post.description }}
              </p>
            </NuxtLink>
          </div>
          <div class="mt-6 flex items-center">
            <div class="flex-shrink-0" />
            <div class="ml-3">
              <span
                class="text-sm font-medium text-gray-900 dark:text-dark-text"
              >
                <NuxtLink
                  :to="`/blog/authors?name=${post.author}`"
                  class="hover:underline"
                >
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
  <div v-else class="h-screen">
    <p>Loading ....</p>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
    // In order to use this component the posts prop must be passed in. The contents of posts is the required fields from a graphql call.
    // The structure to make this call should be similar to this...
    // async getData() {
    //   this.posts = await useAsyncData('queryName', () => GqlQueryName{input}))
    //     .then(({ data }) => {
    //       return data._value.blogPosts.data.map((post) => ({
    //           title: post.attributes.title,
    //           description: post.attributes.description,
    //           category: {name: post.attributes.category},
    //           author: post.attributes.users_permissions_user.data.attributes.name,
    //           date: post.attributes.date,
    //           id: post.id,
    //           content: post.attributes.content
    //       }))
    //     });
    // },
  },
  data() {
    return {
      isLoaded: false
    };
  },
  mounted() {
    this.$nextTick(async () => {
      this.isLoaded = true;
    });
  },
  methods: {
    readingTime(text) {
      const wpm = 225;
      const words = text.trim().split(/\s+/).length;
      return Math.ceil(words / wpm);
    },
    slugify(str) {
      str = str.toLowerCase();
      str = str.trim();
      str = str.replace(/[^\w\s-]/g, '');
      str = str.replace(/[\s_-]+/g, '-');
      str = str.replace(/^-+|-+$/g, '');
      return str;
    }
  }
};
</script>
