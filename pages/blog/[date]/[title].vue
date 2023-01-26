<template>
  <div>
    <Header />
    <div
      class="relative h-full min-h-screen overflow-hidden bg-white py-16 dark:bg-dark-bg"
    >
      <div
        class="absolute inset-0 bg-[url(/assets/grid.svg)] bg-top [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
      />
      <div
        class="relative w-full bg-white px-6 py-12 shadow-2xl shadow-slate-700/10 ring-1 ring-gray-900/5 dark:bg-gray-800 md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28"
      >
        <div class="relative px-4 sm:px-6 lg:px-8">
          <template v-if="isLoaded">
            <div class="prose prose-lg mx-auto max-w-prose text-lg">
              <h1>
                <span
                  class="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                >
                  {{ postData.title }}
                </span>
                <span
                  class="block pt-3 text-center text-base font-semibold tracking-wide text-blue-600"
                >
                  {{ postData.date }}
                  &nbsp; | &nbsp;
                  <NuxtLink
                    :to="`/blog/authors?name=${postAuthor}`"
                    class="hover:underline"
                  >
                    {{ postAuthor }}
                  </NuxtLink>
                </span>
              </h1>
              <div
                class="prose prose-sm mx-auto mt-8 text-left leading-8 prose-code:text-start prose-li:text-start dark:prose-invert dark:text-dark-text lg:prose-lg"
                v-html="renderedContent"
              />
            </div>
          </template>
          <template v-else>
            <div
              class="mt-2 block h-full min-h-screen text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-MITRE-silver sm:text-4xl"
            >
              Loading ...
            </div>
          </template>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import {marked} from 'marked';

export default {
  data() {
    return {
      post: {},
      postData: {},
      postAuthor: {},
      renderedContent: {},
      isLoaded: false
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getData();
    });
  },
  methods: {
    async getData() {
      this.post = await useAsyncData('getBlogDataFromID', () =>
        GqlGetBlogDataFromID({id: this.$route.query.id})
      ).then(({data}) => {
        this.postData = data._value.blogPost.data.attributes;
        this.renderedContent = marked(this.postData.content);
        this.postAuthor =
          this.postData.users_permissions_user.data.attributes.name;
        this.isLoaded = true;
      });
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
