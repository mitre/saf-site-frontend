<template>
    <label class="text-gray-900 text-base font-medium dark:text-MITRE-silver">Switch Theme</label>
    <div
        class="relative flex items-center ring-1 ring-slate-900/10 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200">
        <SunIcon :class="selected == 'Light' ? 'h-6 w-6' : 'hidden'" />
        <MoonIcon :class="selected == 'Dark' ? 'h-6 w-6' : 'hidden'" />
        <DesktopComputerIcon :class="selected == 'System' ? 'h-6 w-6' : 'hidden'" />
        <div class="ml-2">{{ selected }}</div>
        <ChevronDownIcon class="w-5 h-6  text-slate-400" />
        <select id="theme"
            class="absolute appearance-none inset-0 w-full h-full opacity-0 dark:bg-slate-600 dark:text-white"
            @change="switchSelect($event)">
            <option :selected="selected == 'Light'">Light</option>
            <option :selected="selected == 'Dark'">Dark</option>
            <option :selected="selected == 'System'">System</option>
        </select>
    </div>
</template>

<script setup>
import {
    DesktopComputerIcon,
    MoonIcon,
    SunIcon,
} from '@heroicons/vue/outline';
import { ChevronDownIcon } from '@heroicons/vue/solid'

////  Props  ////
const props = defineProps({
    selected: {
        type: String,
        required: true,
    },
});

const { selected } = toRefs(props);

////  Methods  ////
const switchSelect = (event) => {
    if (event.target.value === 'Light') {
        disableDarkMode()
        localStorage.setItem('user-theme', 'light');
        selected.value = "Light"
        setThemeState(selected.value)
    }
    else if (event.target.value == 'Dark') {
        enableDarkMode()
        localStorage.setItem('user-theme', 'dark');
        selected.value = "Dark"
        setThemeState(selected.value)
    }
    else if (event.target.value == 'System') {
        const userIsInDarkModeOS = window.matchMedia('(prefers-color-scheme: dark)').matches
        if (userIsInDarkModeOS) {
            enableDarkMode()
            localStorage.setItem('user-theme', 'dark');
            selected.value = "System";
            setThemeState(selected.value)
        }
        else {
            disableDarkMode()
            selected.value = "System";
        }
    }
}
const setThemeState = (mode) => {
    localStorage.setItem('theme', mode)
}
const enableDarkMode = () => {
    document.documentElement.classList.add('dark');
}
const disableDarkMode = () => {
    document.documentElement.classList.remove('dark');
}

</script>