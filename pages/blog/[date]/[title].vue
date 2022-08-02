<template>
  <div>
    <div> <Header /> </div>
    <div class="relative py-16 bg-white dark:bg-dark-bg overflow-hidden h-screen">
      <!-- <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg class="absolute top-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="74b3fd99-0a6f-4271-bef2-e80eeafdf357" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg class="absolute bottom-12 left-full transform translate-x-32" width="404" height="384" fill="none" viewBox="0 0 404 384">
            <defs>
              <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div> -->
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-MITRE-silver sm:text-4xl">{{postData.title}}</span>
            <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">by {{postData.author}} </span>
          </h1>
          <p class="mt-8 text-xl text-gray-500 leading-8">{{postData.content}}</p>
        </div>
      </div>
    </div>
    <div> <Footer /> </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { graphql } from 'graphql';
import gql from 'graphql-tag'

export default {
  setup() {

  },
  data() {
    return {
      postData: {},
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getData()
      // console.log(postData)
    });
  },
  methods: {
  async getData() {
    console.log(this.$route)
    this.postData = await useAsyncData('getBlogDataFromID', () => GqlGetBlogDataFromID({id: this.$route.query.id}))
      .then(({ data }) => {
       this.postData = data._value.blogPost.data.attributes
       console.log('look here')
       console.log(this.postData)
      //  console.log( this.$route.params.id  )
      });
    }
  }


}


</script>