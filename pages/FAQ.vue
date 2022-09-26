<template>
    <div>
      <div>
        <Header />
      </div>
      <div class="relative bg-white dark:bg-dark-bg h-screen pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="absolute inset-0">
          <div class="bg-white dark:bg-dark-bg sm:h-2/3 " />
        </div>
        <ul role="list" class="divide-y divide-gray-200">
            <li v-for="(item, index) in faqs" :key="index">
                <a href="#" class="block hover:bg-gray-50">
                <div class="px-4 py-4 sm:px-6">
                    
                </div>
                </a>
            </li>
        </ul>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios'
  import { graphql } from 'graphql';
  import gql from 'graphql-tag'
  
  
  export default {
    data() {
      return {
        faqs: ref([]),
      };
    },
    mounted() {
      this.$nextTick(async () => {
        await this.getBlogPosts()
      });
    },
    methods: {
      async getBlogPosts() {
        this.posts = await useAsyncData('getAllFAQs', () => GqlFAQs())
          .then(({ data }) => {
            console.log(data._value.FAQs.data)
            return data._value.FAQs.data.map((post) => ({
              question: post.attributes.question,
              answer: post.attributes.answer,
            }))
          });
      },
      slugify (str) {
        str = str.toLowerCase()
        str = str.trim()
        str = str.replace(/[^\w\s-]/g, '')
        str = str.replace(/[\s_-]+/g, '-')
        str = str.replace(/^-+|-+$/g, '')
        console.log(str)
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
  
