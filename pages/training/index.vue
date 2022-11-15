<template>
  <div>
    <Header />
      <div class="bg-white dark:bg-dark-bg min-h-screen h-full">
        <div class ="relative w-full px-6 py-12 lg:pt-16 lg:pb-28 "> <!-- shadow-2xl shadow-slate-700/10 ring-1 ring-gray-900/5-->
          <div class="md:flex">
            <div id="Content Area" class="flex-1 sm:pl-4">
              <div id="Overview Section" class="sm:pl-4 md:max-w-3xl lg:max-w-3xl">
                <h1 class="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"> Our Training</h1>
                <p class="mt-6 dark:text-dark-text"> The MITRE SAF team regularly offers training courses. Dates and sign-up links for future courses are posted on this page when training dates are finalized. See below for course details, materials, and recordings.</p>
                <a href="https://mitre.github.io/saf-training/" class="hover:underline">
                  <p class="mt-4 text-blue-500"> SAF Training Site - GitHub</p>
                </a> 
                <a href="https://mitre-saf-training.netlify.app/" class="hover:underline">
                  <p class="mt-4 text-blue-500"> SAF Training Site - Netlify</p>
                </a> 
                <hr class="mt-4" />
              </div>
              <div v-if="meetings != null" id="Schedule for Meetings Mobile" class="relative pointer-events-auto order-2 pr-6 sm:hidden">
                <div  class="">
                  <h2 class="text-lg font-semibold text-gray-900 sm:pl-3 pt-6 dark:text-white">Upcoming meetings</h2>
                  <div class="lg:grid lg:grid-cols-2">
                    <ol class="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                      <li v-for="meeting in meetings" :key="meeting.index" class="relative flex space-x-6 py-6 ">
                        <div class="flex-0 pl-4">
                          <h3 class="font-semibold text-gray-900 dark:text-MITRE-silver">{{ meeting.title }}</h3>
                          <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
                            <div class="flex items-start space-x-3 pl-1">
                              <dt class="mt-0.5">
                                <span class="sr-only">Date</span>
                                <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                              </dt>
                              <dd>
                                <!-- <time :datetime="meeting.datetime">{{ meeting.date }} at {{ meeting.time }}</time> -->
                              </dd>
                            </div>
                          </dl>
                        </div>
                        <div class="right-2 top-0 ">
                          <button type="button" class="inline-flex items-center rounded-full border border-transparent bg-blue-600 sm:px-3 sm:py-1.5 px-1 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Sign Up</button>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                <hr class="mt-4" />
              </div>
              <div id="Embeded Videos" v-if="courses != null" class="sm:flex-1 order-1 md:max-w-3xl">
                <h2 class="block text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl pt-4 sm:pl-4" > Courses </h2>
                <div v-for="course in courses" :key="course.name">
                  <div class="sm:pl-4 mt-7">
                    <p class="text-xl font-semibold text-gray-900 dark:text-MITRE-silver">
                      {{ course.name }}
                    </p>
                    <div class="mt-8 mb-8 leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start"
                    v-html="course.description">
                    </div>
                    <hr class="mt-4" />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="meetings != null" id="Schedule for Meetings" class="sticky top-28 pointer-events-auto pr-6 hidden min-w-fit pl-4 sm:block h-fit">
              <div  class="relative">
                <h2 class="text-lg font-semibold text-gray-900 sm:pl-3 pt-6 dark:text-white">Upcoming meetings</h2>
                <div class="lg:grid lg:grid-cols-2">
                  <ol class="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                    <li v-for="meeting in meetings" :key="meeting.index" class="relative flex space-x-6 py-6 ">
                      <div class="flex-0 pl-4">
                        <h3 class="font-semibold text-gray-900 dark:text-MITRE-silver">{{ meeting.title }}</h3>
                        <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
                          <div class="flex items-start space-x-3 pl-1">
                            <dt class="mt-0.5">
                              <span class="sr-only">Date</span>
                              <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd>
                              <!-- <time :datetime="meeting.datetime">{{ meeting.date }} at {{ meeting.time }}</time> -->
                              <time :datetime="meeting.date"> {{formatDate(meeting.date)}} at {{formatTime(meeting.date)}} EST </time> 
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <div class="right-2 top-0 ">
                        <a type="button" :href="meeting.link" target="_blank" class="inline-flex items-center rounded-full border border-transparent bg-blue-600 sm:px-3 sm:py-1.5 px-1 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Sign Up</a>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div v-else>
              <p> Sorry there are no upcoming meetings at this time. If you would like to host a meeting please contact saf@groups.mitre.org </p>
            </div>
          </div>
        </div>

        
        <!-- <div class="">
          <div v-if="courses != null">
            <Carousel v-slot="{currentSlide}" class="relative max-h-full h-full">
              <Slide v-for="course in courses" :key="course.index">
                <div v-show="currentSlide === course.index" class="  top-0 left-0 w-full max-h-full h-full" id="slide-info">
                  <div id="Content" class="relative w-full sm:flex justify-center px-6 py-12 lg:pt-8 lg:pb-16">
                    <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-2xl max-w-2xl">
                      <div class="px-4s py-5 sm:px-6">
                        <p class="mt-3 text-center text-xl font-semibold text-gray-900 dark:text-dark-text">
                        {{ course.name }} 
                        </p>
                      </div>
                      <div class="px-4 py-5 sm:p-6">
                        <div class="mt-8 leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start"
                          v-html="course.description">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div> -->


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



// const meetings = [
//   {
//     id: 1,
//     date: 'January 10th, 2022',
//     time: '5:00 PM',
//     datetime: '2022-01-10T17:00',
//     name: 'Leslie Alexander',
//     imageUrl: null,
//       // 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   {
//     id: 2,
//     date: 'January 10th, 2022',
//     time: '5:00 PM',
//     datetime: '2022-01-10T17:00',
//     name: 'Leslie Alexander',
//     imageUrl: null,
//       // 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
//   {
//     id: 3,
//     date: 'January 10th, 2022',
//     time: '5:00 PM',
//     datetime: '2022-01-10T17:00',
//     name: 'Leslie Alexander',
//     imageUrl: null,
//       // 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//   },
// ]

</script>
<script>
export default {

  data() {
    return {
      courses: [],
      meetings: [],
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getTrainingData()
      await this.getMeetingData()
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
            index: course.attributes.index,
          }))
        });
    },
    async getMeetingData() {
      this.meetings = await useAsyncData('getMeetingData', () => GqlGetMeetingData())
        .then(({ data }) => {
          console.log(data._value.courseMeetings.data)
          return data._value.courseMeetings.data.map((meeting) => ({
            title: meeting.attributes.title,
            date: meeting.attributes.date,
            link: meeting.attributes.link,
            index: meeting.attributes.index,
          }))
        });
    },
    formatDate(value, locale='en-US'){
      return new Date(value).toLocaleDateString(locale)
    },
    formatTime(value, locale='en-US'){
      return new Date(value).toLocaleTimeString(locale, {hour:'2-digit', minute:'2-digit'})
    }
  }
}


</script>