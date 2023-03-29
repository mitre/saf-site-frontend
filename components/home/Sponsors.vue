<template>
  <div>
    <div class="bg-white dark:bg-dark-bg mx-auto py-12 px-6 lg:py-16 lg:px-8 lg:max-w-4xl md:max-w-xl max-w-sm">


      <div class="hidden lg:flex">
        <Swiper 
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination]"
        :slides-per-view="3"
        :autoplay="{
          // delay: 8000,
          disableOnInteraction: true,
        }"
        :loop="true"
        :navigation="true"
        :pagination="{ clickable: true }"
        >
          <SwiperSlide v-for="slide in data" :key="slide" class="text-center mb-8">
            <NuxtLink :to="slide.link" class="flex-1 items-center">
              <img :src="slide.icon.url" :alt="slide.icon.name" class="h-24 object-center mx-auto aspect-auto" />
              <p class="dark:bg-dark-text mt-6 mx-8">{{ slide.nameLong  }}</p>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="hidden md:flex lg:hidden">
        <Swiper 
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination]"
        :slides-per-view="2"
        :autoplay="{
          // delay: 8000,
          disableOnInteraction: true,
        }"
        :loop="true"
        :navigation="true"
        :pagination="{ clickable: true }"
        >
          <SwiperSlide v-for="slide in data" :key="slide" class="text-center mb-8">
            <NuxtLink :to="slide.link" class="flex-1 items-center">
              <img :src="slide.icon.url" :alt="slide.icon.name" class="h-24 object-center mx-auto aspect-auto" />
              <p class="dark:bg-dark-text mt-4 mx-8">{{ slide.nameLong  }}</p>
            </NuxtLink>
          </SwiperSlide>
        </Swiper>
      </div>

      <!-- Mobile View -->
      <div class="md:hidden">
        <Swiper 
        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation, SwiperPagination]"
        :slides-per-view="1"
        :autoplay="{
          // delay: 8000,
          disableOnInteraction: true,
        }"
        :loop="true"
        :navigation="true"
        :pagination="true"
      >
        <SwiperSlide v-for="slide in data" :key="slide" class="text-center mb-8">
          <NuxtLink :to="slide.link" class="flex-1 items-center">
            <img :src="slide.icon.url" :alt="slide.icon.name" class="h-24 object-center mx-auto" />
            <p class="dark:bg-dark-text">{{ slide.nameLong  }}</p>
          </NuxtLink>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: true,
    },
})

const { data } = toRefs(props)

console.log('data', data)

</script>