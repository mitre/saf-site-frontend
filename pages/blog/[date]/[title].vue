<template>
  <div>
    <div> <Header /> </div>
    <div class="relative py-16 bg-white dark:bg-dark-bg overflow-hidden h-full">
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg prose prose-lg max-w-prose mx-auto ">
          <h1>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-MITRE-silver sm:text-4xl">
              {{postData.title}}
            </span>
            <span class="pt-3 block text-base text-center text-blue-600 font-semibold tracking-wide">
              {{postData.date}} &nbsp; | &nbsp;  {{postData.author}} 
            </span>
          </h1>
          <span v-html="renderedContent" class="mt-8 text-xl mx-auto  leading-8 prose dark:prose-invert"></span>
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
import { marked } from 'marked'

export default {
  setup() {

  },
  data() {
    return {
      postData: {},
      renderedContent: {},
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
       // This renders our raw markdown into HTML
       this.renderedContent = marked(this.postData.content)
       console.log(this.postData)
      //  console.log( this.$route.params.id  )
      });
    }
  }


}


</script>