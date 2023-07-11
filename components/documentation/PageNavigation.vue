<template>
  <nav aria-labelledby="on-this-page-title" class="ml-5 w-56">
    <div v-if="props.tableOfContents.length > 0">
      <h2 id="on-this-page-title" class="text-sm font-bold">On this page</h2>
      <ol role="list" class="mt-4 space-y-3 text-sm">
        <div v-for="(heading, key) in props.tableOfContents" :key="key">
          <li key="{{heading.title}}">
            <h3>
              <a
                :href="`#${slugify(heading.title)}`"
                :class="
                  props.currentHeading == slugify(heading.title)
                    ? 'text-nav-active '
                    : `font-normal text-nav-base hover:text-nav-hover  `
                "
              >
                {{ heading.title }}
              </a>
            </h3>
            <div v-if="heading.subtitles.length > 0">
              <ol role="list" class="mt-2 space-y-3 pl-5 text-nav-base">
                <div v-for="subtitle in heading.subtitles">
                  <li key="{{subtitle}}">
                    <a
                      :href="`#${slugify(subtitle)}`"
                      :class="
                        props.currentHeading == slugify(subtitle)
                          ? 'text-nav-active '
                          : 'hover:text-nav-hover '
                      "
                    >
                      {{ subtitle }}
                    </a>
                  </li>
                </div>
              </ol>
            </div>
          </li>
        </div>
      </ol>
    </div>
  </nav>
</template>

<script setup>
import slugify from '@/utils/useSlugify';

const props = defineProps({
  tableOfContents: {
    type: Array,
    required: true
  },
  currentHeading: {
    type: String,
    required: true
  }
});
</script>
