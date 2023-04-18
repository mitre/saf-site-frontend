<template>
    <div>
        <Header />

        <DocumentationMobileNavigation :doc-data="docData" :current-subsection="currentSubsection"
            :current-section-title="currentSectionTitle" />

        <div class="relative bg-white dark:bg-dark-bg mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-10">
            <div class="hidden lg:relative lg:block lg:flex-none">
                <div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
                <div class="sticky top-[82px] -ml-0.5 h-[calc(100vh-82px)] overflow-y-auto overflow-x-hidden pb-8 pl-0.5">
                    <div
                        class="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
                    <div class="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />

                    <div v-if="docData">
                        <DocumentationNavigation :doc-data="docData" />
                    </div>

                </div>
            </div>

            <div class="min-w-0 max-w-2xl flex-auto px-6 lg:py-10 lg:max-w-6xl lg:pr-0 lg:pl-8 xl:px-16">
                <div v-if="isLoaded">
                    <DocumentationCurrentPage :rendered-content="renderedContent" :current-subsection="currentSubsection"
                        :all-links="allLinks" :current-index="currentIndex" />
                </div>
                <div v-else class="grid h-screen place-items-center">
                    <LoadingSpinner />
                </div>
            </div>

            <div
                class="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
                <DocumentationPageNavigation :table-of-contents="tableOfContents" :current-heading="currentHeading" />
            </div>
        </div>

        <Footer />
    </div>
</template>
  
<script setup>
////  Data  ////
const props = defineProps({
    docData: {
        type: Object,
        required: true,
    },
    renderedContent: {
        type: String,
        required: true,
    },
    tableOfContents: {
        type: Array,
        required: true,
    },
    currentSectionTitle: {
        type: String,
        required: true,
    },
    currentHeading: {
        type: String,
        required: true,
    },
    allLinks: {
        type: Array,
        required: true,
    },
    currentIndex: {
        type: Number,
        required: true,
    },
    currentSubsection: {
        type: String,
        required: true,
    },
    isLoaded: {
        type: Boolean,
        required: true,
    },
});
</script>