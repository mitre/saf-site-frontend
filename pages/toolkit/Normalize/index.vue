<template>
    <div>
        <Header />
        <div class="relative bg-white dark:bg-dark-bg max-w-8xl min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">



            <div v-if="isLoaded">
                <div class="sm:flex sm:items-center">
                    <div class="sm:flex-auto">
                        <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-50 text-center"><strong>{{
                            pageTitle
                        }}</strong>
                        </h1>
                        <div class="mt-8 mb-6 max-w-5xl mx-auto leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start prose-pre:w-full prose-pre:h-[500px]"
                            v-html="normalizeContent"></div>

                        <div class="bg-white py-10 sm:py-12">
                            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                                <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                                    <div class="mx-auto w-full max-w-xl lg:mx-0">
                                        <h2 class="text-3xl font-bold tracking-tight text-gray-900">Convert To These Common
                                            Types
                                        </h2>
                                        <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet
                                            ullamcorper eu enim et fermentum, augue.</p>
                                        <div class="mt-8 flex items-center gap-x-6">
                                            <!-- <a href="#"
                                                        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create
                                                        account</a> -->
                                            <a href="https://saf-cli.mitre.org/#usage"
                                                class="text-sm font-semibold text-gray-900">View More<span
                                                    aria-hidden="true">&rarr;</span></a>
                                        </div>
                                    </div>

                                    <div
                                        class="mx-auto grid w-full max-w-xl grid-cols-5 items-center gap-y-1 sm:gap-y-2 lg:mx-0 lg:max-w-none lg:pl-4">
                                        <div v-for="element in fromHDF">
                                            <div
                                                class="w-[100px] h-[100px] object-contain object-center backdrop-opacity-10 backdrop-invert bg-white/30 p-4 rounded">
                                                <span class="text-black opacity-100">{{ element }}</span>
                                            </div>
                                        </div>
                                        <!-- <img class="max-h-12 w-full object-contain object-left"
                                                    src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" alt="Tuple" width="105"
                                                    height="48" /> -->

                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="bg-white py-10 sm:py-12">
                            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                                <div class="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">


                                    <div
                                        class="mx-auto grid w-full max-w-xl grid-cols-5 items-center gap-y-1 sm:gap-y-2 lg:mx-0 lg:max-w-none lg:pl-4">
                                        <div v-for="element in toHDF">
                                            <div
                                                class="w-[100px] h-[100px] object-contain object-center backdrop-opacity-10 backdrop-invert bg-white/30 p-2 rounded">
                                                <span class="text-black opacity-100">{{ element }}</span>
                                            </div>
                                        </div>
                                        <!-- <img class="max-h-12 w-full object-contain object-left"
                                                    src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" alt="Tuple" width="105"
                                                    height="48" /> -->

                                    </div>

                                    <div class="mx-auto w-full max-w-xl lg:mx-0">
                                        <h2 class="text-3xl font-bold tracking-tight text-gray-900">Get Security Data From
                                            Multiple
                                            Sources
                                        </h2>
                                        <p class="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit amet,
                                            consectetur
                                            adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet
                                            ullamcorper eu enim et fermentum, augue.</p>
                                        <div class="mt-8 flex items-center gap-x-6">
                                            <!-- <a href="#"
                                                        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create
                                                        account</a> -->
                                            <a href="https://saf-cli.mitre.org/#usage"
                                                class="text-sm font-semibold text-gray-900">View More<span
                                                    aria-hidden="true">&rarr;</span></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div class="mt-8 mb-6 max-w-5xl mx-auto leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start prose-pre:w-full prose-pre:h-[500px]"
                            v-html="normalizeContent2"></div>

                    </div>
                </div>
            </div>
            <div v-else>
                <p> Loading ... </p>
            </div>
            <Footer />
        </div>
    </div>
</template>

<script setup>
////  Data  ////
const isLoaded = ref(false)
const normalizeContent = ref("")
const normalizeContent2 = ref("")
const pageTitle = ref("")
const fromHDF = ref(["ASFF", "Splunk", "XCCDF Results", "Checklist", "CSV", "Condensed JSON"])
const toHDF = ref(["ASFF", "AWS", "Burp Suite", "CKL to POA&M", "DBProtect", "Fortify", "GoSec", "Ion Channel", "JFrog Xray", "Tenable Nessus", "Netsparker", "Nikto", "Prisma", "Prowler", "Sarif", "Scoutsuite", "Snyk", "SonarQube", "Splunk", "Trivy", "Twistlock", "XCCDF", "OWASP ZAP"])

////  Methods  ////
const getNormalizeContent = async () => {
    await useAsyncData('getTextContentByPage', () => GqlGetTextContentByPage({ pageName: "Normalize" }), { initialCache: false })
        .then(({ data }) => {
            pageTitle.value = data._value.textContents.data[0].attributes.page
            normalizeContent.value = data._value.textContents.data[0].attributes.text
            normalizeContent2.value = data._value.textContents.data[1].attributes.text
        });
}

////  Lifecycle  ////
onMounted(async () => {
    await nextTick(async () => {
        await getNormalizeContent()
        isLoaded.value = true
    });
});

</script>