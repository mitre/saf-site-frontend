<template>
  <div>
    <Header />
      <div class="bg-white dark:bg-dark-bg min-h-screen h-full">
        <div class ="relative w-full bg-white dark:bg-gray-800 px-6 py-12  md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pt-16 lg:pb-28"> <!-- shadow-2xl shadow-slate-700/10 ring-1 ring-gray-900/5-->
          <div id="Overview Section" class="sm:pl-4">
            <h1 class="=block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"> Our Training</h1>
            <p class="mt-6 "> The MITRE SAF team regularly offers training courses. Dates and sign-up links for future courses are posted on this page when training dates are finalized. See below for course details, materials, and recordings.</p>
            <a href="https://mitre.github.io/saf-training/" class="hover:underline">
              <p class="mt-4 text-blue-500"> SAF Training Site - GitHub</p>
            </a> 
            <a href="https://mitre-saf-training.netlify.app/" class="hover:underline">
              <p class="mt-4 text-blue-500"> SAF Training Site - Netlify</p>
            </a> 
            <hr class="mt-4" />
          </div>
          <div id="Embeded Videos" v-if="courses != null">
            <div v-for="course in courses" :key="course.name">
              <div class="sm:pl-4">
                <p class="mt-3 text-xl font-semibold text-gray-900 dark:text-dark-text">
                  {{ course.name }}
                </p>
                <div class="mt-8 leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start"
                v-html="course.description">
                </div>
              </div>
            </div>
            <hr class="mt-4" />
          </div>
          <div id="Schedule for Meetings" class="">
            <h2 class="text-lg font-semibold text-gray-900 pl-3 pt-6">Upcoming meetings</h2>
            <div class="lg:grid lg:grid-cols-2">
              <ol class="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                <li v-for="meeting in meetings" :key="meeting.id" class="relative flex space-x-6 py-6 xl:static">
                  <!-- <img :src="meeting.imageUrl" alt="" class="h-14 w-14 flex-none rounded-full" /> -->
                  <div class="flex-0 pl-4">
                    <h3 class="pr-10 font-semibold text-gray-900 xl:pr-10">{{ meeting.name }}</h3>
                    <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
                      <div class="flex items-start space-x-3 pl-1">
                        <dt class="mt-0.5">
                          <span class="sr-only">Date</span>
                          <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </dt>
                        <dd>
                          <time :datetime="meeting.datetime">{{ meeting.date }} at {{ meeting.time }}</time>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <Menu as="div" class="relative right-2 top-0 ">
                    <div>
                      <MenuButton class="m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
                        <span class="sr-only">Open options</span>
                        <!-- <DotsHorizontalIcon class="h-5 w-5" aria-hidden="true" /> -->
                        <button type="button" class="inline-flex items-center rounded-full border border-transparent bg-blue-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Sign Up</button>

                      </MenuButton>
                    </div>

                    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                      <MenuItems class="absolute z-10 mt-1 w-24 sm:w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div class="py-1">
                          <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Sign up</a>
                          </MenuItem>
                          <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Cancel</a>
                          </MenuItem>
                        </div>
                      </MenuItems>
                    </transition>
                  </Menu>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </div>
</template>

<script setup>
import {
  CalendarIcon,
  DotsHorizontalIcon,
} from '@heroicons/vue/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const meetings = [
  {
    id: 1,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl: null,
      // 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl: null,
      // 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl: null,
      // 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

</script>
<script>
export default {
  data() {
    return {
      courses: [],
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getTrainingData()
    });
  },
  methods: {
    async getTrainingData() {
      this.courses = await useAsyncData('getTrainingData', () => GqlGetTrainingData())
        .then(({ data }) => {
          console.log(data._value.trainingCourses.data)
          return data._value.trainingCourses.data.map((course) => ({
            name: course.attributes.name,
            description: course.attributes.description,
            recording: course.attributes.recording,
            materials: course.attributes.materials,
          }))
        });
    },
  }
}


</script>