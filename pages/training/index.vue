<template>
  <Head>
    <Title>Training</Title>
    <Meta name="description" content="Collection of SAF training content" />
  </Head>
  <div>
    <Header />
    <div class="min-h-screen h-full">
      <div class="relative px-6 sm:py-12 lg:pt-16 lg:pb-28">
        <div v-if="isLoaded" class="md:flex relative">
          <div class="flex-1 mx-auto">
            <div id="Content Area" class="relative max-w-2xl mx-auto sm:px-6 py-4 px-4  sm:py-4 lg:max-w-6xl lg:px-8">
              <div id="Overview Section" class="sm:pl-4">
                <h1
                  class="block text-3xl leading-8 font-extrabold tracking-tight text-light-header dark:text-dark-header sm:text-4xl">
                  Our Training</h1>
                <p class="mt-6 text-light-text dark:text-dark-text"> The MITRE SAF© team offers training classes. Dates
                  and sign-up
                  links
                  to participate in synchronous (typically virtual) class offerings are posted on this page when
                  training
                  dates are finalized. To preview classes, watch asynchronously, or reference class content, see the
                  class
                  details, materials, and recordings below.</p>
                <div class="flex gap-8">
                  <a href="https://mitre.github.io/saf-training/" class="hover:underline">
                    <p class="mt-4 text-nav-light-active dark:text-nav-dark-active after:content-['_↗']"> SAF Training
                      Site - GitHub</p>
                  </a>
                  <a href="https://mitre-saf-training.netlify.app/" class="hover:underline">
                    <p class="mt-4 text-nav-light-active dark:text-nav-dark-active after:content-['_↗']"> SAF Training
                      Site - Netlify</p>
                  </a>
                </div>
              </div>
              <div id="Schedule" class="relative pointer-events-auto order-2 pt-8 pr-6">
                <div>
                  <h2 class="text-xl font-semibold text-light-text dark:text-dark-text sm:pl-3 pt-6 ">Upcoming Classes
                  </h2>
                  <div v-if="schedules.length" class="lg:grid lg:grid-cols-2">
                    <ol class="mt-4 text-sm leading-6 lg:col-span-7 xl:col-span-8">
                      <li v-for="schedule in schedules" :key="schedule.index" class="relative flex space-x-6 py-6 ">
                        <div class="flex-0 pl-4">
                          <h3 class="font-semibold text-light-text dark:text-dark-text">{{ schedule.title }}</h3>
                          <dl class="mt-2 flex flex-col text-light-subtext dark:text-dark-subtext xl:flex-row">
                            <div class="flex items-start space-x-3 pl-1">
                              <dt class="mt-0.5">
                                <span class="sr-only">Date</span>
                                <CalendarIcon class="h-5 w-5 text-light-subtext dark:text-dark-subtext"
                                  aria-hidden="true" />
                              </dt>
                              <dd v-if="schedule.date != null">
                                <time :datetime="schedule.date"> {{ formatDate(schedule.date) }} at
                                  {{ formatTime(schedule.date) }} EST </time>
                              </dd>
                              <dd v-else>
                                <p> TBD </p>
                              </dd>
                            </div>
                          </dl>
                        </div>
                        <div v-if="schedule.link != null" class="right-2 top-0 pt-3 flex-end">
                          <a type="button" :href="schedule.link" target="_blank"
                            class="inline-flex items-center rounded-full border border-transparent bg-btn-light-primary dark:bg-btn-dark-primary text-btn-light-primary-text dark:text-btn-light-primary-text hover:text-btn-light-primary-hover-text dark:hover:text-btn-dark-primary-hover-text hover:bg-btn-light-primary-hover dark:hover:bg-btn-dark-primary-hover sm:px-3 sm:py-1.5 px-3 py-1.5 text-xs text-center font-medium shadow-sm ring-1 ring-light-border-primary dark:ring-dark-border-primary">Sign
                            Up</a>
                        </div>
                        <div v-else class="right-2 top-0 pt-3 flex-end">
                          <a type="button"
                            class="inline-flex items-center rounded-full border border-transparent bg-btn-light-disabled dark:bg-btn-dark-disabled text-btn-light-disabled-text dark:text-btn-dark-disabled-text sm:px-3 sm:py-1.5 px-3 py-1.5 text-xs text-center font-medium shadow-sm">
                            Coming Soon!
                          </a>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div v-else class="relative max-w-sm mt-6 pl-2 text-light-text dark:text-dark-text">
                    <p> Sorry there are no upcoming classes at this time. If you would like to host a class please
                      contact,
                      <a href="mailto:saf@groups.mitre.org"
                        class="hover:underline text-nav-light-active dark:text-nav-dark-active">saf@groups.mitre.org</a>
                    </p>
                  </div>
                </div>
              </div>
              <div id="Embeded Videos" class="flex-1 order-1 pt-9">
                <h2
                  class="block text-3xl leading-8 font-bold tracking-tight text-light-text dark:text-dark-text sm:text-3xl pt-4 sm:pl-4">
                  Classes </h2>
                <hr class="mt-4 w-full" />
                <div v-if="courses.length">
                  <div v-for="(course, index) in courses" :key="course.index">
                    <div class="sm:pl-4 mt-7 max-w-xl">
                      <p class="text-2xl font-semibold text-light-text dark:text-dark-text">
                        {{ course.name }}
                      </p>
                      <div
                        class="max-w-3xl mt-8 mb-8 leading-8 text-left prose prose-md lg:prose-lg dark:prose-invert text-light-text dark:text-dark-text prose-li:text-start prose-code:text-start"
                        v-html="course.description">
                      </div>
                    </div>
                    <hr v-if="index != courses.length - 1" class="mt-5 w-full" />
                  </div>

                </div>
                <div v-else>
                  <p class="relative max-w-sm mt-6 pl-2 text-light-text dark:text-dark-text"> Classes are being updated.
                    Check back
                    later!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="grid h-screen place-items-center">
          <LoadingSpinner />
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
      this.sortData()
      this.isLoaded = true
    });
  },
  methods: {
    async getTrainingData() {
      this.courses = await useAsyncData('getTrainingData', () => GqlGetTrainingData())
        .then(({ data }) => {
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
          return data._value.courseSchedules.data.map((schedule) => ({
            title: schedule.attributes.title,
            date: schedule.attributes.date,
            link: schedule.attributes.link,
            index: schedule.attributes.index,
          }))
        });
    },
    sortData() {
      this.courses.sort((a, b) => a.index - b.index);
      this.schedules.sort((a, b) => a.index - b.index);
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