<template>

<nav aria-labelledby="on-this-page-title" class="w-56">
  <div v-if="props.tableOfContents.length>0"> <!--Change this to a function to get the headings in the markdown text-->
      <h2
        id="on-this-page-title"
        class="font-display text-sm font-medium text-slate-900 dark:text-slate-200"
      >
        On this page
      </h2>
      <ol role="list" class="mt-4 space-y-3 text-sm">
        <div v-for="(heading, key) in props.tableOfContents" :key="key">
          <li key={{heading.title}}>
            <h3>
              <a
                :href="`#${slugify(heading.title)}`"
                :class="props.currentHeading == slugify(heading.title) ? 'text-sky-500':`font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300`"
              >
                {{heading.title}}
              </a>
            </h3>
            <div v-if="heading.subtitles.length > 0">
              <ol
                role="list"
                class="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
              >
              <div v-for="subtitle in heading.subtitles">
                  <li key={{subtitle}}>
                    <a
                      :href="`#${slugify(subtitle)}`"
                      :class="props.currentHeading == slugify(subtitle) ? 'text-sky-500':'hover:text-slate-600 dark:hover:text-slate-300'"
                      >
                      {{subtitle}}
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
import { getCurrentInstance } from 'vue';

const props = defineProps(["tableOfContents","currentSubsectionHref", "currentHeading"]);
const slugify = (str) => {
      str = str.toLowerCase()
      str = str.trim()
      str = str.replace(/[^\w\s-]/g, '')
      str = str.replace(/[.\s_-]+/g, '-')
      str = str.replace(/^-+|-+$/g, '')
      return str
    }
</script>

  
