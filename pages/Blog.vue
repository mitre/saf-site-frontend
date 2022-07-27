<template>
  <div>
    <Header />
  </div>
  <div class="relative bg-white dark:bg-dark-bg h-screen pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white dark:bg-dark-bg h-1/3 sm:h-2/3" />
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-MITRE-silver sm:text-4xl">Blog</h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Start Exploring our Recent Developments.</p>
      </div>
      <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        <div v-if="posts">
          <div v-for="post in posts" :key="post.title"
            class="flex flex-col rounded-lg shadow-xl border-2 hover:border-2 hover:border-blue-500 dark:hover:border-blue-500 dark:border-gray-600 overflow-hidden">
            <div class="flex-1 bg-white dark:bg-dark-bg hover:bg-gray-100 dark:hover:bg-gray-700 p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm font-medium text-indigo-600">
                  <a :href="post.category.href" class="hover:underline">
                    {{ post.category.name }}
                  </a>
                </p>
                <a :href="post.href" class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900 dark:text-dark-text">
                    {{ post.title }}
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    {{ post.description }}
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a :href="post.author.href">
                    <span class="sr-only">{{ post.author.name }}</span>
                    <!-- <img class="h-10 w-10 rounded-full" :src="post.author.imageUrl" alt="" /> -->
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900 dark:text-dark-text ">
                    <a :href="post.author.href" class="hover:underline">
                      {{ post.author.name }}
                    </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time :datetime="post.datetime">
                      {{ post.date }}
                    </time>
                    <span aria-hidden="true"> &middot; </span>
                    <span> {{ post.readingTime }} read </span>
                  </div>
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
import axios from 'axios'
import { graphql } from 'graphql';
import gql from 'graphql-tag'
// import getBlogPosts from "~/apollo/queries/fetchBlogData.gql"

export default {
  data() {
    return {
      posts: [],
      blogData: ''
    };
  },
  apollo: {
  posts: {
    prefetch: true,
    query: gql`
      query posts{
        blogPosts{
          data{
            attributes{
              title,
              category,
              description,
              content,
              date,
              author,
            }
          }
        }
      }`,
    // update(data) {
    //   return data.posts
    // }
  }
  },

  mounted() {
    this.$nextTick(async () => {
      // const { find } = useStrapi4()
      // const client = useStrapiClient()
      // console.log(this.posts)
      //await this.getBlogPosts()
      // console.log(this.posts)

      await this.displayMessage();
      console.log('This is the posts' + this.posts)


    });
  },
  methods: {
    async displayMessage() {
      this.posts = await axios
        .get("http://saf-site-backend.herokuapp.com/api/blog-posts")
        .then(({ data }) => {
          console.log('Working method:' + data.data)
          return data.data.map((post) => ({
            title: post.attributes.title,
            description: post.attributes.content,
            category: post.attributes.category,
            author: {
              name: 'Gavin Mason'
            },
            date: post.attributes.date,
            // href: ''
          }))
        });
    },
    // async getBlogPosts() {
    //   console.log(window   )
    //   // const clientApollo = this.app.apolloProvider.defaultClient;
    //   return new Promise((resolve, reject) => {
    //   clientApollo
    //     .query({
    //       query: getBlogPosts,
    //     })
    //     .then(resp => {
    //       // commit("set_user", resp.data.user);
    //       console.log(resp)
    //       resolve(resp);
    //     })
    //     .catch(err => {
    //       resolve(err);
    //     });
    //   });
    // }


  }
};
</script>

<!-- <script>
import gql from 'graphql-tag'
import getBlogPosts from "~/apollo/queries/fetchBlogData"

export default {
  apollo: {
    article: {
      query: getBlogPosts,
      prefetch: ({ route }) => ({ id: route.params.id }),
      variables() {
        return { id: this.$route.params.id }
      }
    }
  },
  head() {
    return {
      title: 'Articles by Author'
    }
  }
}

</script> -->



<!-- <script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import { onMounted, reactive } from 'vue';
import axios from "axios";

let posts = reactive([])

async function getDataFromAPI() {
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
}


onMounted(async () => {
  // const instance = getCurrentInstance()
  //  await getDataFromAPI()
  //  console.log(posts)
  
      // axios.get('https://saf-site-backend.herokuapp.com/api/blog-posts')
      // .then(response => {
      //   const results = response.data
      //   console.log(results)
      //   this.posts = results.map(post => ({
      //     title: post.Title,
      //     description: post.Content,
      //     category: post.Tag,
      //     author: {
      //       name: 'Gavin Mason'
      //     },
      //     date: post.PublishDate,
      //     href: '/blog-post',
      //     }))
      // }).catch (err => {
      //   if (err.response) {
      //     // client received an error response (5xx, 4xx)
      //     console.log("Server Error:", err)
      //   } else if (err.request) {
      //     // client never received a response, or request never left
      //     console.log("Network Error:", err)
      //   } else {
      //     console.log("Client Error:", err)
      //   }
      // })
})

// const posts = [
//   {
//     title: 'Boost your conversion rate',
//     href: '/blog-post',
//     category: {name: 'Temp Tag', color: 'bg-green-100 text-green-800'},
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     author: {
//       name: 'Dessie Ryan',
//       href: '#',
//       readingTime: '6 min',
//       imageUrl:
//         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     title: 'How to use search engine optimization to drive sales',
//     href: '#',
//     category: {name: 'Temp Tag', color: 'bg-green-100 text-green-800'},
//     description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
//     date: 'Mar 10, 2020',
//     datetime: '2020-03-10',
//     author: {
//       name: 'Dessie Ryan',
//       href: '#',
//       readingTime: '6 min',
//       imageUrl:
//         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     title: 'Improve your customer experience',
//     href: '#',
//     category: {name: 'Temp Tag', color: 'bg-green-100 text-green-800'},
//     description:
//       'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
//     date: 'Feb 12, 2020',
//     datetime: '2020-02-12',
//     author: {
//       name: 'Dessie Ryan',
//       href: '#',
//       readingTime: '6 min',
//       imageUrl:
//         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     title: 'Writing effective landing page copy',
//     href: '#',
//     category: {name: 'Temp Tag', color: 'bg-green-100 text-green-800'},
//     description:
//       'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
//     date: 'Jan 29, 2020',
//     datetime: '2020-01-29',
//     author: {
//       name: 'Dessie Ryan',
//       href: '#',
//       readingTime: '6 min',
//       imageUrl:
//         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//     {
//     title: 'Writing effective landing page copy',
//     href: '#',
//     category: {name: 'Temp Tag', color: 'bg-green-100 text-green-800'},
//     description:
//       'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
//     date: 'Jan 29, 2020',
//     datetime: '2020-01-29',
//     author: {
//       name: 'Dessie Ryan',
//       href: '#',
//       readingTime: '6 min',
//       imageUrl:
//         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//     {
//     title: 'Writing effective landing page copy',
//     href: '#',
//     category: {name: 'Temp Tag', color: 'bg-green-100 text-green-800'},
//     description:
//       'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
//     date: 'Jan 29, 2020',
//     datetime: '2020-01-29',
//     author: {
//       name: 'Dessie Ryan',
//       href: '#',
//       readingTime: '6 min',
//       imageUrl:
//         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
  
// ]



</script> -->


<!-- <script setup>
const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    category: { name: 'Article', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]
</script> -->