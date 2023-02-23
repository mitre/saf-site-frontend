<template>
    <div>
        <Header />
        <div class="relative bg-white dark:bg-dark-bg max-w-8xl min-h-screen h-full pt-4 px-4 sm:px-6 lg:px-8">
            <div v-if="isLoaded">
                <div class="grid grid-cols-2 gap-4">
                    <div v-if="schemaContent" v-for="schema in schemaContent" class="flex flex-col">
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-gray-50 text-center mb-2"><strong>{{
                            schema.attributes.name
                        }}</strong>
                        </h1>
                        <json-viewer :value="schema.attributes.json" :expand-depth=5 copyable boxed sort></json-viewer>
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
import JsonViewer from 'vue-json-viewer/ssr'
import 'vue-json-viewer/style.css'
// Vue.use(JsonViewer)
////  Data  ////
const isLoaded = ref(false)
const schemaContent = ref([])
// const schemaTitle = ref("")
// const jsonData = ref()
// const test1 = ref({})
// const test2 = ref({})

////  Methods  ////
const getNormalizeContent = async () => {
    schemaContent.value = await useAsyncData('getJsonContentByPage', () => GqlGetJsonContentByPage({ pageName: "Normalize-Schema" }), { initialCache: false })
        .then(({ data }) => {
            console.log("What is this: ", data._rawValue.jsonContents.data)
            // test1.value = data._rawValue.jsonContents.data[0]
            // test2.value = data._rawValue.jsonContents.data[1]
            //schemaTitle.value = data._value.jsonContents.data.attributes.name
            return data._rawValue.jsonContents.data //.attributes.json
        });
    console.log(schemaContent._rawValue)
}

////  Lifecycle  ////
onMounted(async () => {
    await nextTick(async () => {
        await getNormalizeContent()
        isLoaded.value = true
    });
});

</script>