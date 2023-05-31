<template>
  <nav aria-labelledby="on-this-page-title" class="ml-5 w-56">
    <div v-if="props.tableOfContents.length > 0">
      <h2 id="on-this-page-title" class="font-bold text-sm text-light-text dark:text-dark-text">
        On this page
      </h2>
      <ol role="list" class="mt-4 space-y-3 text-sm">
        <div v-for="(heading, key) in props.tableOfContents" :key="key">
          <li key={{heading.title}}>
            <h3>
              <a :href="`#${slugify(heading.title)}`"
                :class="props.currentHeading == slugify(heading.title) ? 'text-nav-light-active dark:text-nav-dark-active' : `font-normal text-nav-light-inactive hover:text-nav-light-hover dark:text-nav-dark-inactive dark:hover:text-nav-dark-hover`">
                {{ heading.title }}
              </a>
            </h3>
            <div v-if="heading.subtitles.length > 0">
              <ol role="list" class="mt-2 space-y-3 pl-5 text-nav-light-inactive dark:text-nav-dark-inactive">
                <div v-for="subtitle in heading.subtitles">
                  <li key={{subtitle}}>
                    <a :href="`#${slugify(subtitle)}`"
                      :class="props.currentHeading == slugify(subtitle) ? 'text-nav-light-active dark:text-nav-dark-active' : 'hover:text-nav-light-hover dark:hover:text-nav-dark-hover'">
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
    required: true,
  },
  currentHeading: {
    type: String,
    required: true,
  },

});
</script>

  
