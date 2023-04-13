<template>
    <div
        class="text-gray-500 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        <div class="relative flex items-center ">
            <SunIcon :class="selected == 'Light' ? 'h-6 w-6' : 'hidden'" />
            <MoonIcon :class="selected == 'Dark' ? 'h-6 w-6' : 'hidden'" />
            <DesktopComputerIcon :class="selected == 'System' ? 'h-6 w-6' : 'hidden'" />
            <select name="theme" id="theme"
                class="absolute appearance-none pr-3 w-full h-fit opacity-0 dark:bg-slate-600 dark:text-white"
                @change="switchSelect($event)">
                <option :selected="selected == 'Light'">Light</option>
                <option :selected="selected == 'Dark'">Dark</option>
                <option :selected="selected == 'System'">System</option>
            </select>
        </div>
    </div>
</template>

<script setup>
import {
    DesktopComputerIcon,
    MoonIcon,
    SunIcon,
} from '@heroicons/vue/outline';

////  Props  ////
const props = defineProps({
    selected: {
        type: String,
        required: true,
    },
});

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

const { selected } = toRefs(props);

</script>