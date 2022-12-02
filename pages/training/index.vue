<template>
  <div>
    <Header />
    <div class="bg-white dark:bg-dark-bg min-h-screen h-full">
      <div class="relative px-6 sm:py-12 lg:pt-16 lg:pb-28">
        <div v-if="isLoaded" class="md:flex relative">
          <!-- TODO: Put some kind of content or menu in left side bar -->
          <div class="lg:flex hidden flex-1 justify-start mr-auto">
            <div id="Left Side Bar" class="pr-6 pl-6 h-fit">
            </div>
          </div>
          <div class="flex mx-auto  justify-center">
            <div id="Content Area"
              class="relative max-w-3xl sm:px-6 py-12  sm:shadow-2xl shadow-slate-700/10 dark:shadow-slate-100/10 ring-3 ring-gray-900/5">
              <div id="Overview Section" class="sm:pl-4">
                <h1
                  class="block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  Our Training</h1>
                <p class="mt-6 dark:text-dark-text"> The MITRE SAF team offers training classes. Dates and sign-up links
                  to participate in synchronous (typically virtual) class offerings are posted on this page when training
                  dates are finalized. To preview classes, watch asynchronously, or reference class content, see the class
                  details, materials, and recordings below.</p>
                <div class="flex gap-8">
                  <a href="https://mitre.github.io/saf-training/" class="hover:underline">
                    <p class="mt-4 text-blue-500"> SAF Training Site - GitHub</p>
                  </a>
                  <a href="https://mitre-saf-training.netlify.app/" class="hover:underline">
                    <p class="mt-4 text-blue-500"> SAF Training Site - Netlify</p>
                  </a>
                </div>
              </div>
              <div id="Schedule for schedules Mobile" class="relative pointer-events-auto order-2 pt-8 pr-6 lg:hidden">
                <div class="">
                  <h2 class="text-xl font-semibold text-gray-900 sm:pl-3 pt-6 dark:text-white">Upcoming Classes</h2>
                  <div v-if="schedules.length" class="lg:grid lg:grid-cols-2">
                    <ol class="mt-4 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                      <li v-for="schedule in schedules" :key="schedule.index" class="relative flex space-x-6 py-6 ">
                        <div class="flex-0 pl-4">
                          <h3 class="font-semibold text-gray-900 dark:text-MITRE-silver">{{ schedule.title }}</h3>
                          <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
                            <div class="flex items-start space-x-3 pl-1">
                              <dt class="mt-0.5">
                                <span class="sr-only">Date</span>
                                <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                              </dt>
                              <dd>
                                <time :datetime="schedule.date"> {{ formatDate(schedule.date) }} at
                                  {{ formatTime(schedule.date) }} EST </time>
                              </dd>
                            </div>
                          </dl>
                        </div>
                        <div class="right-2 top-0 pt-3">
                          <a type="button" :href="schedule.link" target="_blank"
                            class="inline-flex items-center rounded-full border border-transparent bg-blue-600 sm:px-3 sm:py-1.5 px-3 py-1.5 text-xs text-center font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Sign
                            Up</a>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div v-else class="relative max-w-sm mt-6 pl-2 dark:text-dark-text">
                    <p> Sorry there are no upcoming schedules at this time. If you would like to host a schedule please
                      contact saf@groups.mitre.org </p>
                  </div>
                </div>
                <!-- <hr class="mt-4 w-full" /> -->
              </div>
              <div id="Embeded Videos" class="sm:flex-1 order-1 md:max-w-2xl pt-9">
                <h2
                  class="block text-3xl leading-8 font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl pt-4 sm:pl-4">
                  Courses </h2>
                <hr class="mt-4 w-full" />
                <div v-if="courses.length" v-for="course in courses" :key="course.name">
                  <div class="sm:pl-4 mt-7">
                    <p class="text-xl font-semibold text-gray-900 dark:text-MITRE-silver">
                      {{ course.name }}
                    </p>
                    <div
                      class="max-w-xl mt-8 mb-8 leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start"
                      v-html="course.description">
                    </div>
                    <hr class="mt-4 w-full" />
                  </div>
                </div>
                <div v-else>
                  <p class="relative max-w-sm mt-6 pl-2 dark:text-dark-text"> Courses are being updated. Check back later!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:flex hidden flex-1 justify-end ml-auto">
            <div id="Schedule for schedules"
              class="sticky pr-2 top-28 pointer-events-auto hidden max-w-md min-w-min pl-6 lg:flex h-fit">
              <div class="relative">
                <h2 class="text-lg font-semibold text-gray-900 sm:pl-3 pt-6 dark:text-white">Upcoming Classes</h2>
                <div v-if="schedules.length" class="lg:grid lg:grid-cols-2">
                  <ol class="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                    <li v-for="schedule in schedules" :key="schedule.index" class="relative flex space-x-6 py-6 ">
                      <div class="flex-0 pl-4">
                        <h3 class="font-semibold text-gray-900 dark:text-MITRE-silver">{{ schedule.title }}</h3>
                        <dl class="mt-2 flex flex-col text-gray-500 xl:flex-row">
                          <div class="flex items-start space-x-3 pl-1">
                            <dt class="mt-0.5">
                              <span class="sr-only">Date</span>
                              <CalendarIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </dt>
                            <dd>
                              <time :datetime="schedule.date"> {{ formatDate(schedule.date) }} at
                                {{ formatTime(schedule.date) }} EST </time>
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <div class="right-2 top-0 pt-3 pl-2 min-w-100%">
                        <a type="button" :href="schedule.link" target="_blank"
                          class="inline-flex items-center text-center rounded-full border border-transparent bg-blue-600 sm:px-3 sm:py-1.5 px-1 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                          Sign Up</a>
                      </div>
                    </li>
                  </ol>
                </div>
                <div v-else class="relative max-w-xs mt-6 pl-2 dark:text-dark-text">
                  <p> Sorry there are no upcoming schedules at this time. If you would like to host a schedule please
                    contact saf@groups.mitre.org </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p> Loading... </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import {
  CalendarIcon,
  DotsHorizontalIcon,
} from '@heroicons/vue/solid'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
export default {
  components: { CalendarIcon, DotsHorizontalIcon },
  data() {
    return {
      courses: [],
      schedules: [],
      isLoaded: false,
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getTrainingData()
      await this.getScheduleData()
      this.isLoaded = true
      console.log('Here is empty data')
      console.log(this.schedules)
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
            index: course.attributes.index,
          }))
        });
    },
    async getScheduleData() {
      this.schedules = await useAsyncData('getScheduleData', () => GqlGetScheduleData())
        .then(({ data }) => {
          console.log(data._value.courseSchedules.data)
          return data._value.courseSchedules.data.map((schedule) => ({
            title: schedule.attributes.title,
            date: schedule.attributes.date,
            link: schedule.attributes.link,
            index: schedule.attributes.index,
          }))
        });
    },
    formatDate(value, locale = 'en-US') {
      return new Date(value).toLocaleDateString(locale)
    },
    formatTime(value, locale = 'en-US') {
      return new Date(value).toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })
    }
  }
}


</script>