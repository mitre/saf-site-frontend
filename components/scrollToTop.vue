<template>
  <div ref="scrollTopButton" @click="scrollToTop" class="hidden w-fit justify-end fixed right-0 bottom-0 pb-3 pr-2">
    <button class="flex items-center" >
      <ArrowCircleUpIcon class="w-8 h-10 md:w-10 md:h-10 text-blue-500" />
    </button>
  </div>
</template>

<script>
  import {ArrowCircleUpIcon} from '@heroicons/vue/outline'
export default {
  components: { ArrowCircleUpIcon },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const scrollBtn = this.$refs.scrollTopButton;

      if (window.scrollY > 0) {
        scrollBtn.classList.remove("hidden");
      } else {
        scrollBtn.classList.add("hidden");
      }
    },
    scrollToTop() {
      console.log('Scroll to Top button clicked')
      window.focus();
      window.scrollTo({ top: 0,left: 0, behavior: "smooth" });
      scrollTo({ top: 0,left: 0, behavior: "smooth" });
    },
  },
}
</script>