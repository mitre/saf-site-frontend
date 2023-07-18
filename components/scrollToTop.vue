<template>
  <div class="max-w-3xl">
    <div
      ref="scrollTopButton"
      class="fixed bottom-0 right-0 flex hidden w-fit justify-end pb-3 pr-2 transition"
    >
      <div class="text-fill transition hover:brightness-110">
        <button class="flex items-center" @click="scrollToTop">
          <ArrowCircleUpIcon class="h-10 w-8 text-blue-500 md:h-10 md:w-10" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {ArrowCircleUpIcon} from '@heroicons/vue/outline';

export default {
  components: {ArrowCircleUpIcon},
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollBtn = this.$refs.scrollTopButton;
      if (window.scrollY > 0) {
        scrollBtn.classList.remove('hidden');
      } else {
        scrollBtn.classList.add('hidden');
      }
    },
    scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }
};
</script>
