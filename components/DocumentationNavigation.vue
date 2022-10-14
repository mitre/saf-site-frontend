<template>
    <div class="w-64 pr-8 xl:w-72 xl:pr-16">
        <nav class='text-base lg:text-sm'>
            <ul role="list" class="space-y-9">
            <div v-for="(section, key) in props.docData" :key="key">
                <li key={{section.section_title}}>
                <h2 class="font-display font-medium text-slate-900 dark:text-white">
                    {{section.section_title}}
                </h2>
                <ul
                    role="list"
                    class="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
                >
                    <div v-for="subsection in section.subsections">
                    <li key={{subsection.title}} class="relative">
                        <a :href ="`/docs/${subsection.href}`" :class="[
                        'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                        subsection.href==props.currentSubsectionHref
                        ? 'font-semibold text-sky-500 before:bg-sky-500'
                        : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                        ]"
                        >
                        {{subsection.title}}
                    </a>
                    </li>
                    </div>
                </ul>
                </li>
            </div>
            </ul>
        </nav>
    </div>
</template>
  
<script setup>

const props = defineProps(["docData","currentSubsectionHref"]);

</script>