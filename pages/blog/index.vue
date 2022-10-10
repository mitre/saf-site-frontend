<template>
  <div>
    <div>
      <Header />
    </div>
    <div class="relative bg-white dark:bg-dark-bg h-full pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="absolute inset-0">
        <div class="bg-white dark:bg-dark-bg sm:h-2/3 " />
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-MITRE-silver sm:text-4xl">Blog</h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Start Exploring our Recent Developments.</p>
        </div>
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div v-for="post in posts" :key="post.title"
            class="flex flex-col rounded-lg shadow-xl border-2 hover:border-2 hover:border-blue-500 dark:hover:border-blue-500 dark:border-gray-600 overflow-hidden">
            <div
              class="flex-1 bg-white dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-gray-700 p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm font-medium text-blue-600">
                  <a :href="post.category.href" class="hover:underline">
                    {{ post.category.name }}
                  </a>
                </p>
                <a :href ="`/blog/${post.date}/${slugify(post.title)}?id=${post.id}`" class="block mt-2"> 
                  <p class="text-xl font-semibold text-gray-900 dark:text-dark-text">
                    {{ post.title }}
                  </p>
                  <p class="mt-3 text-base text-gray-500 line-clamp-2">
                    {{ post.description }}
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                </div>
                <div class="ml-3">
                  <span class="text-sm font-medium text-gray-900 dark:text-dark-text ">
                    <a :href="`blog/author/${slugify(post.author)}?id=${post.author}`" class="hover:underline">
                      <p class="">{{post.author}}</p>  
                    </a>
                  </span>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time :datetime="post.datetime">
                      {{ post.date }}
                    </time>
                    <span aria-hidden="true"> &middot; </span>
                    <span>  {{ post.readingTime }} min read </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>

<!-- <script lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import {reactive, defineComponent } from 'vue';
import axios from "axios";

export default defineComponent({
  name: 'blog',
  setup: async () => {
    let posts = reactive([])
    try {
    const response = await axios.get('https://saf-site-backend.herokuapp.com/api/blog-posts')
      const results = response.data.data
      console.log(results)
      posts = results.map(post => ({
        title: post.attributes.Title,
        description: post.attributes.Content,
        category: post.attributes.Tag,
        author: {
          name: 'Gavin Mason'
        },
        date: post.attributes.PublishDate,
        href: '/blog-post'
      }))
  } catch (err) {
    if (err.response) {
      // client received an error response (5xx, 4xx)
      console.log("Server Error:", err)
    } else if (err.request) {
      // client never received a response, or request never left
      console.log("Network Error:", err)
    } else {
      console.log("Client Error:", err)
    }
  }
  console.log(posts)
    return {
      posts
    }
  }
}) 
</script> -->

<script>
export default {
  data() {
    return {
      posts: ref([]),
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getBlogPosts()
    });
  },
  methods: {
    async getBlogPosts() {
      this.posts = await useAsyncData('getAllBlogData', () => GqlBlogPosts())
        .then(({ data }) => {
          console.log(data._value.blogPosts.data)
          //blogDataFromAPI = data._value.blogPosts.data
          // console.log(data._value.blogPosts.data)
          //this.posts = data._value.blogPosts.data
          return data._value.blogPosts.data.map((post) => ({
            title: post.attributes.title,
            description: post.attributes.description,
            category: {name: post.attributes.category},
            author: post.attributes.users_permissions_user.data.attributes.name,
            date: post.attributes.date,
            id: post.id,
            readingTime: this.readingTime(post.attributes.content)
          }))
        });
    },
    slugify (str) {
      str = str.toLowerCase()
      str = str.trim()
      str = str.replace(/[^\w\s-]/g, '')
      str = str.replace(/[\s_-]+/g, '-')
      str = str.replace(/^-+|-+$/g, '')
      return str
    },
    readingTime(text) {
      const wpm = 225;
      const words = text.trim().split(/\s+/).length;
      return Math.ceil(words / wpm);
    },
  } 
}
</script>




