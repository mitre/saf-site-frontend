<template>
    <div class="bg-white">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">When To Use It</h2>
          <p class="mt-4 text-gray-500">Security is best done early and often. Develop and automate security for planning, development, assessment, and operational activities.</p>
  
          <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div v-for="stage in stages" :key="stage.name" class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">{{ stage.name }}</dt>
              <dd>{{ stage.text }}</dd>
            </div>
          </dl>
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img src="@/assets/chevrons/planning_chevron.svg" alt=""/>
          <img src="@/assets/chevrons/development_chevron.svg" alt=""/>
          <img src="@/assets/chevrons/assessment_chevron.svg" alt=""/>
          <img src="@/assets/chevrons/operations_chevron.svg" alt=""/>
        </div>
      </div>
    </div>
</template>

<script setup>
    const props = defineProps(["stages"]);
</script>