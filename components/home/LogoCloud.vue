<template>
    <div>
        <div class="relative bg-light-backdrop-primary dark:bg-dark-backdrop-primary py-12">
            <div class="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                <div class="flex-row mx-auto max-w-3xl text-left">
                    <h2
                        class="text-center mt-2 max-w-prose sm:text-3xl text-2xl tracking-tight font-bold text-light-header dark:text-dark-header">
                        {{ title }}
                    </h2>
                </div>
                <div class="mt-12">
                    <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
                        <div v-for="item in data" :key="item.id"
                            class="pt-6 bg-light-backdrop-primary dark:bg-dark-backdrop-primary hover:bg-light-backdrop-secondary dark:hover:bg-dark-backdrop-primary border-2 hover:border-nav-light-active dark:hover:border-nav-dark-active border-light-backdrop-tertiary dark:border-dark-backdrop-quaternary">
                            <NuxtLink :to="item.link">
                                <div class="flex flex-col rounded-lg px-6 pb-8 h-full justify-between">
                                    <div
                                        class="inline-flex items-center justify-center rounded-xl bg-light-backdrop-secondary dark:bg-white p-4 shadow-lg w-full">
                                        <img :src="item.icon.url" :alt="item.icon.alt"
                                            class="max-h-24 object-cover text-light-text dark:text-dark-text aspect-auto dark:bg-white rounded-lg m-6"
                                            aria-hidden="true" />
                                    </div>
                                    <h3
                                        class="mt-8 text-lg font-bold leading-8 tracking-tight text-light-text dark:text-dark-text">
                                        {{ item.nameLong }}</h3>

                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>


const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    data: {
        type: Array,
        required: true,
    },
})

const { title, data } = toRefs(props)

</script>