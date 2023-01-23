<template>
  <div>
    <Header />
    <div class="h-full min-h-screen bg-white dark:bg-dark-bg">
      <div class="relative px-6 sm:py-12 lg:pt-16 lg:pb-28">
        <div v-if="isLoaded" class="relative md:flex">
          <!-- TODO: Put some kind of content or menu in left side bar -->
          <div class="mr-auto hidden flex-1 justify-start lg:flex">
            <div id="Left Side Bar" class="h-fit pr-6 pl-6" />
          </div>
          <div class="mx-auto flex justify-center">
            <div
              id="Content Area"
              class="ring-3 relative max-w-3xl py-12 shadow-slate-700/10 ring-gray-900/5 dark:shadow-slate-100/10 sm:px-6 sm:shadow-2xl"
            >
              <div id="Overview Section" class="sm:pl-4">
                <h1
                  class="block text-3xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                >
                  Our Training
                </h1>
                <p class="mt-6 dark:text-dark-text">
                  The MITRE SAF team offers training classes. Dates and sign-up
                  links to participate in synchronous (typically virtual) class
                  offerings are posted on this page when training dates are
                  finalized. To preview classes, watch asynchronously, or
                  reference class content, see the class details, materials, and
                  recordings below.
                </p>
                <div class="flex gap-8">
                  <a
                    href="https://mitre.github.io/saf-training/"
                    class="hover:underline"
                  >
                    <p class="mt-4 text-blue-500">SAF Training Site - GitHub</p>
                  </a>
                  <a
                    href="https://mitre-saf-training.netlify.app/"
                    class="hover:underline"
                  >
                    <p class="mt-4 text-blue-500">
                      SAF Training Site - Netlify
                    </p>
                  </a>
                </div>
              </div>
              <div
                id="Schedule for schedules Mobile"
                class="pointer-events-auto relative order-2 pt-8 pr-6 lg:hidden"
              >
                <div class="">
                  <h2
                    class="pt-6 text-xl font-semibold text-gray-900 dark:text-white sm:pl-3"
                  >
                    Upcoming Classes
                  </h2>
                  <div v-if="schedules.length" class="lg:grid lg:grid-cols-2">
                    <ol
                      class="mt-4 text-sm leading-6 lg:col-span-7 xl:col-span-8"
                    >
                      <li
                        v-for="schedule in schedules"
                        :key="schedule.index"
                        class="relative flex space-x-6 py-6"
                      >
                        <div class="flex-0 pl-4">
                          <h3
                            class="font-semibold text-gray-900 dark:text-MITRE-silver"
                          >
                            {{ schedule.title }}
                          </h3>
                          <dl
                            class="mt-2 flex flex-col text-gray-500 xl:flex-row"
                          >
                            <div class="flex items-start space-x-3 pl-1">
                              <dt class="mt-0.5">
                                <span class="sr-only">Date</span>
                                <CalendarIcon
                                  class="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </dt>
                              <dd>
                                <time :datetime="schedule.date">
                                  {{ formatDate(schedule.date) }} at
                                  {{ formatTime(schedule.date) }} EST
                                </time>
                              </dd>
                            </div>
                          </dl>
                        </div>
                        <div class="right-2 top-0 pt-3">
                          <a
                            type="button"
                            :href="schedule.link"
                            target="_blank"
                            class="inline-flex items-center rounded-full border border-transparent bg-blue-600 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-3 sm:py-1.5"
                            >Sign Up</a
                          >
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div
                    v-else
                    class="relative mt-6 max-w-sm pl-2 dark:text-dark-text"
                  >
                    <p>
                      Sorry there are no upcoming schedules at this time. If you
                      would like to host a schedule please contact
                      saf@groups.mitre.org
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="Embeded Videos"
                class="order-1 pt-9 sm:flex-1 md:max-w-2xl"
              >
                <h2
                  class="block pt-4 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:pl-4 sm:text-3xl"
                >
                  Courses
                </h2>
                <hr class="mt-4 w-full" />
                <div v-if="courses.length">
                  <div v-for="course in courses" :key="course.name">
                    <div class="mt-7 sm:pl-4">
                      <p
                        class="text-xl font-semibold text-gray-900 dark:text-MITRE-silver"
                      >
                        {{ course.name }}
                      </p>
                      <div
                        class="prose prose-sm mt-8 mb-8 max-w-xl text-left leading-8 prose-code:text-start prose-li:text-start dark:prose-invert dark:text-dark-text lg:prose-lg"
                        v-html="course.description"
                      />
                      <hr class="mt-4 w-full" />
                    </div>
                  </div>
                </div>
                <div v-else>
                  <p class="relative mt-6 max-w-sm pl-2 dark:text-dark-text">
                    Courses are being updated. Check back later!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="ml-auto hidden flex-1 justify-end lg:flex">
            <div
              id="Schedule for schedules"
              class="pointer-events-auto sticky top-28 hidden h-fit min-w-min max-w-md pr-2 pl-6 lg:flex"
            >
              <div class="relative">
                <h2
                  class="pt-6 text-lg font-semibold text-gray-900 dark:text-white sm:pl-3"
                >
                  Upcoming Classes
                </h2>
                <div v-if="schedules.length" class="lg:grid lg:grid-cols-2">
                  <ol
                    class="mt-4 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8"
                  >
                    <li
                      v-for="schedule in schedules"
                      :key="schedule.index"
                      class="relative flex space-x-6 py-6"
                    >
                      <div class="flex-0 pl-4">
                        <h3
                          class="font-semibold text-gray-900 dark:text-MITRE-silver"
                        >
                          {{ schedule.title }}
                        </h3>
                        <dl
                          class="mt-2 flex flex-col text-gray-500 xl:flex-row"
                        >
                          <div class="flex items-start space-x-3 pl-1">
                            <dt class="mt-0.5">
                              <span class="sr-only">Date</span>
                              <CalendarIcon
                                class="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </dt>
                            <dd>
                              <time :datetime="schedule.date">
                                {{ formatDate(schedule.date) }} at
                                {{ formatTime(schedule.date) }} EST
                              </time>
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <div class="right-2 top-0 min-w-fit pt-3 pl-2">
                        <a
                          type="button"
                          :href="schedule.link"
                          target="_blank"
                          class="inline-flex items-center rounded-full border border-transparent bg-blue-600 px-1 py-1.5 text-center text-xs font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-3 sm:py-1.5"
                        >
                          Sign Up</a
                        >
                      </div>
                    </li>
                  </ol>
                </div>
                <div
                  v-else
                  class="relative mt-6 max-w-xs pl-2 dark:text-dark-text"
                >
                  <p>
                    Sorry there are no upcoming schedules at this time. If you
                    would like to host a schedule please contact
                    saf@groups.mitre.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import {CalendarIcon} from '@heroicons/vue/solid';
// import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue';
export default {
  components: {CalendarIcon},
  data() {
    return {
      courses: [],
      schedules: [],
      isLoaded: false
    };
  },
  mounted() {
    this.$nextTick(async () => {
      await this.getTrainingData();
      await this.getScheduleData();
      this.isLoaded = true;
    });
  },
  methods: {
    async getTrainingData() {
      this.courses = await useAsyncData('getTrainingData', () =>
        GqlGetTrainingData()
      ).then(({data}) => {
        return data._value.trainingCourses.data.map((course) => ({
          name: course.attributes.name,
          description: course.attributes.description,
          index: course.attributes.index
        }));
      });
    },
    async getScheduleData() {
      this.schedules = await useAsyncData('getScheduleData', () =>
        GqlGetScheduleData()
      ).then(({data}) => {
        return data._value.courseSchedules.data.map((schedule) => ({
          title: schedule.attributes.title,
          date: schedule.attributes.date,
          link: schedule.attributes.link,
          index: schedule.attributes.index
        }));
      });
    },
    formatDate(value, locale = 'en-US') {
      return new Date(value).toLocaleDateString(locale);
    },
    formatTime(value, locale = 'en-US') {
      return new Date(value).toLocaleTimeString(locale, {
        hour: '2-digit',
        minute: '2-digit'
      });
    }
  }
};
</script>
