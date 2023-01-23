<template>
  <div>
    <Header />
    <div
      class="relative h-full min-h-screen bg-white px-4 pt-16 pb-20 dark:bg-dark-bg sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"
    >
      <div class="absolute inset-0">
        <div class="bg-white dark:bg-dark-bg sm:h-2/3" />
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div class="text-center">
          <h2
            class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Blog
          </h2>
          <p class="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Start Exploring our Recent Developments.
          </p>
        </div>
        <!-- Blog Cards -->
        <BlogPostCards :posts="posts" />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getBlogPosts();
    });
  },
  methods: {
    async getBlogPosts() {
      this.posts = await useAsyncData('getAllBlogData', () =>
        GqlBlogPosts()
      ).then(({data}) => {
        return data._value.blogPosts.data.map((post) => ({
          title: post.attributes.title,
          description: post.attributes.description,
          category: {name: post.attributes.category},
          author: post.attributes.users_permissions_user.data.attributes.name,
          date: post.attributes.date,
          id: post.id,
          content: post.attributes.content
        }));
      });
    }
  }
};
</script>
