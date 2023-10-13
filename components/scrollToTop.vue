<template>
  <div class="max-w-3xl">
    <div
      ref="scrollTopButton"
      class="fixed bottom-0 right-0 hidden w-fit justify-end pb-3 pr-2 transition"
    >
      <div class="text-fill transition hover:brightness-110">
        <button class="flex items-center" @click="scrollToTop">
          <ArrowUpCircle class="h-10 w-8 text-blue-500 md:h-10 md:w-10" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ArrowUpCircle} from 'lucide-vue-next';

/*  Data  */
const scrollTopButton = ref<HTMLInputElement | null>(null);

/*  Methods  */
const handleScroll = () => {
  const scrollBtn = scrollTopButton;
  if (window) {
    if (window.scrollY > 0) {
      scrollBtn.value?.classList.remove('hidden');
    } else {
      scrollBtn.value?.classList.add('hidden');
    }
  }
};

const scrollToTop = () => {
  if (window) {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
};

/*  Lifecycle  */
onMounted(() => {
  if (window) {
    window.addEventListener('scroll', handleScroll);
  }
});

onBeforeMount(() => {
  if (window) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>
