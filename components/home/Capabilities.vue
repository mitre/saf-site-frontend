<template>
  <div>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Jump Start Your DevSecOps Capability</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">MITRE SAF(c) offers open-source support for multiple DevSecOps capabilities.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-24 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div v-for="capability in capabilities.slice(0,-1)" :key="capability.name" class="relative pl-16">
              <dt class="text-large font-semibold leading-7 text-gray-900">
                <div class="absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-lg">
                    <img :src="capability.icon" class="h-12 w-12 text-white" aria-hidden="true" />
                </div>
                {{ capability.name }}
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600" v-html="capability.description"></dd>
            </div>
          </dl>
        </div>
        <div class="mx-auto mt-12 max-w-2xl lg:mt-24 lg:max-w-4xl lg:w-5/12">
          <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-4 lg:max-w-none lg:grid-cols-1 lg:gap-y-16">
            <div v-for="capability in capabilities.slice(-1)" :key="capability.name" class="relative pl-16">
              <dt class="text-large font-semibold leading-7 text-gray-900 ">
                <div class="absolute top-0 left-0 flex h-12 w-12 items-center justify-center rounded-lg">
                  <img :src="capability.icon" class="h-12 w-12 text-white" aria-hidden="true" />
                </div>
                {{ capability.name }}
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600" v-html="capability.description"></dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>  

const props = defineProps({
    capabilities: {
        type: Array,
        required: true,
    },
})

const { capabilities } = toRefs(props)

console.log(capabilities)

</script>