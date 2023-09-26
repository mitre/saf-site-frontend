<template>
    <div class="border-2">
  <div
    class="border-b bg-neutral-1 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6"
  >
    <span class="flex items-center underline sm:no-underline">Name</span>
    <div class="flex items-center">
      <span class="mt-1 sm:col-span-2 sm:ml-3 sm:mt-0">
        {{ content.name }}
      </span>
    </div>
  </div>
  <div
    class="border-b bg-neutral-2 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6"
  >
    <span class="flex items-center underline sm:no-underline">Platform </span>
    <div class="flex items-center">
      <div class="h-10 w-10 flex-shrink-0">
        <img
          class="h-10 w-10 rounded-full"
          :src="content.platform.icon.url"
          :alt="content.platform.icon.name"
        />
      </div>
      <a
        class="hover:text-nav-light-active dark:hover:text-nav-dark-active ml-3 mt-1 hover:underline sm:col-span-2 sm:mt-0"
        target="_blank"
        :href="content.platform.link"
        >{{ content.platform.name }}</a
      >
    </div>
  </div>
  <div
    class="border-b bg-neutral-1 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6"
  >
    <span class="flex items-center underline sm:no-underline">Partner </span>
    <div class="flex items-center">
      <div class="h-10 w-10 flex-shrink-0">
        <img
          class="h-10 w-10 rounded-full"
          :src="content.partner.icon.url"
          :alt="content.partner.icon.name"
        />
      </div>
      <a
        class="hover:text-nav-light-active dark:hover:text-nav-dark-active ml-3 mt-1 hover:underline sm:col-span-2 sm:mt-0"
        target="_blank"
        :href="content.partner.link"
        >{{ content.partner.name }}</a
      >
    </div>
  </div>
  <div
    class="border-b bg-neutral-2 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-3 sm:px-6"
  >
    <span class="flex items-center underline sm:no-underline"
      >Last Updated
    </span>
    <div class="flex items-center">
      <span class="mt-1 sm:col-span-2 sm:ml-3 sm:mt-0">
        {{ content.last_update }}
      </span>
    </div>
  </div>
  <div
    class="border-b bg-neutral-1 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6"
  >
    <span class="flex items-center underline sm:no-underline">Link</span>
    <a
      class="hover:text-nav-light-active dark:hover:text-nav-dark-active mt-1 inline-block items-center break-all after:content-['_↗'] hover:underline sm:col-span-1 sm:mt-0"
      target="_blank"
      :href="content.source"
    >
      {{ content.source }}
    </a>
  </div>
</div>
</template>

<script setup lang="ts">
/*   Data   */
const props = defineProps({
  content: {
    type: Object,
    required: true
  }
});

const {content} = toRefs(props);
</script>
