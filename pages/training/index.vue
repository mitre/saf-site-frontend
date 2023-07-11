<template>
  <Head>
    <Title>Training</Title>
    <Meta name="description" content="Collection of SAF training content" />
  </Head>
  <div>
    <Header />
    <div class="h-full min-h-screen">
      <div class="relative px-6 sm:py-12 lg:pb-28 lg:pt-16">
        <div v-if="isLoaded" class="relative md:flex">
          <div class="mx-auto flex-1">
            <div
              id="Content Area"
              class="relative mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-4 lg:max-w-6xl lg:px-8"
            >
              <div id="Overview Section" class="sm:pl-4">
                <h1
                  class="block text-3xl font-extrabold leading-8 tracking-tight text-header sm:text-4xl"
                >
                  Our Training
                </h1>
                <p class="mt-6 text-base">
                  The MITRE SAF© team offers training classes. Dates and sign-up
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
                    <p class="mt-4 text-nav-active after:content-['_↗']">
                      SAF Training Site - GitHub
                    </p>
                  </a>
                  <a
                    href="https://mitre-saf-training.netlify.app/"
                    class="hover:underline"
                  >
                    <p class="mt-4 text-nav-active after:content-['_↗']">
                      SAF Training Site - Netlify
                    </p>
                  </a>
                </div>
              </div>
              <div
                id="Schedule"
                class="pointer-events-auto relative order-2 pr-6 pt-8"
              >
                <div>
                  <h2 class="pt-6 text-base text-xl font-semibold sm:pl-3">
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
                          <h3 class="text-base font-semibold">
                            {{ schedule.title }}
                          </h3>
                          <div
                            class="mt-2 flex flex-col text-muted xl:flex-row"
                          >
                            <div class="flex items-start space-x-3 pl-1">
                              <span class="mt-0.5">
                                <span class="sr-only">Date</span>
                                <CalendarIcon
                                  class="h-5 w-5 text-muted"
                                  aria-hidden="true"
                                />
                              </span>
                              <span v-if="schedule.date != null">
                                <time :datetime="schedule.date">
                                  {{ formatDate(schedule.date) }} at
                                  {{ formatTime(schedule.date) }} EST
                                </time>
                              </span>
                              <span v-else>
                                <p>TBD</p>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          v-if="schedule.link != null"
                          class="flex-end right-2 top-0 pt-3"
                        >
                          <a
                            type="button"
                            :href="schedule.link"
                            target="_blank"
                            class="inline-flex items-center rounded-full border border-transparent bg-button-accent px-3 py-1.5 text-center text-xs font-medium text-button-text shadow-sm ring-1 ring-accent hover:bg-opacity-80 sm:px-3 sm:py-1.5"
                            >Sign Up</a
                          >
                        </div>
                        <div v-else class="flex-end right-2 top-0 pt-3">
                          <a
                            type="button"
                            aria-disabled="true"
                            class="inline-flex items-center rounded-full border border-transparent bg-button-disabled px-3 py-1.5 text-center text-xs font-medium text-button-disabled-text shadow-sm sm:px-3 sm:py-1.5"
                          >
                            Coming Soon!
                          </a>
                        </div>
                      </li>
                    </ol>
                  </div>
                  <div v-else class="relative mt-6 max-w-sm pl-2 text-base">
                    <p>
                      Sorry there are no upcoming classes at this time. If you
                      would like to host a class please contact,
                      <a
                        href="mailto:saf@groups.mitre.org"
                        class="text-nav-active hover:underline"
                        >saf@groups.mitre.org</a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div id="Embeded Videos" class="order-1 flex-1 pt-9">
                <h2
                  class="block pt-4 text-3xl text-base font-bold leading-8 tracking-tight sm:pl-4 sm:text-3xl"
                >
                  Classes
                </h2>
                <hr class="mt-4 w-full" />
                <div v-if="courses.length">
                  <div v-for="(course, index) in courses" :key="course.index">
                    <div class="mt-7 max-w-xl sm:pl-4">
                      <p class="text-2xl text-base font-semibold">
                        {{ course.name }}
                      </p>
                      <div
                        class="prose-md prose mb-8 mt-8 max-w-3xl text-left text-base leading-8 dark:prose-invert lg:prose-lg prose-code:text-start prose-li:text-start"
                        v-html="course.description"
                      ></div>
                    </div>
                    <hr
                      v-if="index != courses.length - 1"
                      class="mt-5 w-full"
                    />
                  </div>
                </div>
                <div v-else>
                  <p class="relative mt-6 max-w-sm pl-2 text-base">
                    Classes are being updated. Check back later!
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
import {CalendarIcon, DotsHorizontalIcon} from '@heroicons/vue/solid';

export default {
  components: {CalendarIcon, DotsHorizontalIcon},
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
      this.sortData();
      this.isLoaded = true;
    });
  },
  methods: {
    async getTrainingData() {
      this.courses = await useAsyncData('getTrainingData', () =>
        GqlGetTrainingData()
      ).then(({data}) =>
        data._value.trainingCourses.data.map((course) => ({
          name: course.attributes.name,
          description: course.attributes.description,
          index: course.attributes.index
        }))
      );
    },
    async getScheduleData() {
      this.schedules = await useAsyncData('getScheduleData', () =>
        GqlGetScheduleData()
      ).then(({data}) =>
        data._value.courseSchedules.data.map((schedule) => ({
          title: schedule.attributes.title,
          date: schedule.attributes.date,
          link: schedule.attributes.link,
          index: schedule.attributes.index
        }))
      );
    },
    sortData() {
      this.courses.sort((a, b) => a.index - b.index);
      this.schedules.sort((a, b) => a.index - b.index);
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
