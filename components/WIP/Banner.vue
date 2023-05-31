<!-- Currently Not In Use (Remove comment after complete)-->
<template>
    <div id="newsBannerDIV" class="relative bg-blue-600">
        <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div class="pr-16 text-center px-16">
                <p class="font-medium text-white">
                    <span class="md:hidden"> We have new changes! </span>
                    <span class="hidden md:inline">
                        Big news! We're excited to announce new changes!
                    </span>
                    <span class="block ml-2 sm:inline-block">
                        <a href="#" class="text-white font-bold underline">
                            Learn more <span aria-hidden="true">&rarr;</span></a>
                    </span>
                </p>
            </div>
            <div class="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
                <button type="button" id="dismiss-banner-button"
                    class="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                    @click="hideBanner()">
                    <span class="sr-only">Dismiss</span>
                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
            </div>
        </div>
    </div>
</template>

<!-- Currently Not In Use -->
<script setup>
////  Props  ////


////  Methods  ////
const hideBanner = () => {
    let bannerDIV = document.getElementById("newsBannerDIV")
    bannerDIV.style.display = "none"
}

////  Lifecycle  ////

</script>
