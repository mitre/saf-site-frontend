<template>
    <div>
        <Header />
        <div class="relative bg-white dark:bg-dark-bg max-w-8xl min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">



            <div v-if="isLoaded">
                <div class="">

                    <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-50 text-center"><strong>{{
                        pageTitle
                    }}</strong>
                    </h1>

                    <!-- First Part of Text Content -->
                    <div class="mt-8 mb-6 max-w-7xl mx-auto leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start prose-pre:w-full prose-pre:h-[500px]"
                        v-html="normalizeContent"></div>

                    <!-- HDF Convert Logo Clouds -->
                    <div class="py-10">
                        <div class="mx-auto max-w-7xl">
                            <div class="mb-5">
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
                                    <a href="/toolkit/normalize/schemas" class="text-sm font-semibold text-gray-900">View
                                        Schemas<span aria-hidden="true">&rarr;</span></a>
                                </div>
                            </div>
                            <div class="flex flex-col items-center w-full">
                                <div
                                    class="w-[60px] h-[60px] md:w-[100px] md:h-[100px] object-contain object-center backdrop-opacity-10 backdrop-invert bg-white/30 p-2 rounded text-center">
                                    <span class="text-black opacity-100">HDF</span>
                                </div>
                                <ArrowDownIcon class="h-10 w-10 text-black my-4" />
                                <div class="grid grid-cols-1 items-center">
                                    <div class="mx-auto grid w-full max-w-xl grid-cols-5 gap-4">
                                        <div v-for="element in toHDF">
                                            <div
                                                class="w-[60px] h-[60px] md:w-[100px] md:h-[100px] backdrop-opacity-10 backdrop-invert bg-white/30 p-2 rounded text-center">
                                                <span class="text-black opacity-100 object-fill">{{ element.attributes.name
                                                }}</span>
                                            </div>
                                        </div>
                                        <!-- <img class="max-h-12 w-full object-contain object-left"
                                                src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg" alt="Tuple" width="105"
                                                height="48" /> -->
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <!-- Second Part of Text Content -->
                    <div class="mt-8 mb-6 max-w-7xl mx-auto leading-8 text-left prose prose-sm lg:prose-lg dark:prose-invert dark:text-dark-text prose-li:text-start prose-code:text-start prose-pre:w-full prose-pre:h-[500px]"
                        v-html="normalizeContent2"></div>


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
import { ArrowDownIcon } from '@heroicons/vue/solid';
////  Data  ////
const isLoaded = ref(false)
const normalizeContent = ref("")
const normalizeContent2 = ref("")
const pageTitle = ref("")
const fromHDF = ref([])
const toHDF = ref([])
// const fromHDF = ref(["ASFF", "Splunk", "XCCDF Results", "Checklist", "CSV", "Condensed JSON"])
// const toHDF = ref(["ASFF", "AWS", "Burp Suite", "CKL to POA&M", "DBProtect", "Fortify", "GoSec", "Ion Channel", "JFrog Xray", "Tenable Nessus", "Netsparker", "Nikto", "Prisma", "Prowler", "Sarif", "Scoutsuite", "Snyk", "SonarQube", "Splunk", "Trivy", "Twistlock", "XCCDF", "OWASP ZAP"])

////  Methods  ////
const getNormalizeContent = async () => {
    await useAsyncData('getTextContentByPage', () => GqlGetTextContentByPage({ pageName: "Normalize" }), { initialCache: false })
        .then(({ data }) => {
            pageTitle.value = data._value.textContents.data[0].attributes.page
            normalizeContent.value = data._value.textContents.data.find(item => item.attributes.name === "HDF Summary Info").attributes.text
            normalizeContent2.value = data._value.textContents.data.find(item => item.attributes.name === "Inspec HDF Examples").attributes.text
        });

    await useAsyncData('getConvertToHDFs', () => GqlGetConvertToHDFs(), { initialCache: false })
        .then(({ data }) => {
            toHDF.value = data._value.convertToHdfs.data
            console.log(toHDF.value)
        });

    await useAsyncData('getConvertFromHDFs', () => GqlGetConvertFromHDFs(), { initialCache: false })
        .then(({ data }) => {
            fromHDF.value = data._value.convertFromHdfs.data
            console.log(fromHDF.value)
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