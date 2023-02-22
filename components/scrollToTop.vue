<template>
  <div class="max-w-3xl">
    <div ref="scrollTopButton"  class=" w-fit justify-end fixed right-0 bottom-0 pb-3 pr-2 transition">
      <div class="text-blue-500 hover:text-blue-400 transition">
        <button @click="scrollToTop" class="flex items-center" >
          <ArrowCircleUpIcon class="w-8 h-10 md:w-10 md:h-10 text-blue-500" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import {ArrowCircleUpIcon} from '@heroicons/vue/outline'
export default {
  components: { ArrowCircleUpIcon },

  // mounted() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },

  // beforeUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },

  methods: {
    // handleScroll() {
    //   const scrollBtn = this.$refs.scrollTopButton;

    //   if (window.scrollY > 0) {
    //     scrollBtn.classList.remove("hidden");
    //   } else {
    //     scrollBtn.classList.add("hidden");
    //   }
    // },
    scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
}
</script>