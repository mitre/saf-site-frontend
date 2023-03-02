<template>
    <Header />
    <div>
        <main>
            <!-- Hero section -->
            <div class="relative isolate overflow-hidden">
                <div class="mx-auto max-w-7xl px-6 pt-10 pb-10 lg:flex lg:px-8">
                    <div class="mx-auto flex-shrink-0 lg:mx-0 ">
                        <h1 class="text-4xl font-bold tracking-tight text-center sm:text-6xl">Plan</h1>
                        <p class="mt-6 text-lg leading-8 dark:text-gray-300">Choose, tailor, and create <b>security
                                guidance</b>
                            appropriate for your mission. Use SAF© Vulcan© to create benchmarks and develop related content
                            in 3-6 months:
                        </p>
                        <div class="flex flex-row">
                            <ul class="list-disc mt-2">
                                <li class="my-4 text-lg">Develop STIG-ready content aligned to SRGs</li>
                                <li class="my-4 text-lg">Manage analysis to determine what guidance is relevant to the
                                    system
                                </li>
                            </ul>
                            <ul class="list-disc mt-2 ml-7">
                                <li class="my-4 text-lg">Create hardening and validation content for specific system
                                    components
                                    in preferred format</li>
                                <li class="my-4 text-lg">Avoid repeated manual assessment for programs and capture the value
                                    of
                                    collaboration
                                </li>
                            </ul>
                        </div>

                        <!-- <div class="mt-10 flex items-center gap-x-6">
                             <a href="#"
                                class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get
                                started</a> 
                            <a href="https://github.com/mitre/vulcan" class="text-sm font-semibold leading-6 ">GitHub
                                Repository <span aria-hidden="true">→</span></a>
                        </div> -->
                    </div>
                </div>
            </div>

            <!-- Feature section -->
            <div class="mx-auto mb-24 max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">
                    <h2 class="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">Assess Best Practices</h2>
                    <!-- <p class="mt-6 text-lg leading-8 dark:text-gray-300">Lorem ipsum dolor sit amet consect adipisicing
                        elit.
                        Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p> -->
                </div>
                <div class="mx-auto mt-12 max-w-2xl lg:max-w-none">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div v-for="feature in bestPractices" :key="feature.name" class="flex flex-col">
                            <dt class="text-xl font-bold leading-7 ">
                                <!-- <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                                    <component :is="feature.icon" class="h-6 w-6 " aria-hidden="true" />
                                </div> -->
                                {{ feature.name }}
                            </dt>
                            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 dark:text-gray-300">
                                <p class="flex-auto">{{ feature.description }}</p>
                                <p class="mt-6">
                                    <a :href="feature.href" class="text-sm font-semibold leading-6 text-indigo-400">Learn
                                        more <span aria-hidden="true">→</span></a>
                                </p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <!-- Feature section -->
            <div class="mx-auto my-24 max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-3xl text-center">
                    <h2 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Identify SAF© Tools & Participate in SAF©
                    </h2>
                    <!-- <p class="mt-6 text-lg leading-8 dark:text-gray-300">Lorem ipsum dolor sit amet consect adipisicing
                        elit.
                        Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p> -->
                </div>
                <div class="mx-auto mt-12 max-w-2xl lg:max-w-none">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        <div v-for="feature in primaryFeatures" :key="feature.name" class="flex flex-col">
                            <dt class="text-xl font-bold leading-7 ">
                                <!-- <div
                                    class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 text-white">
                                    <component :is="feature.icon" class="h-6 w-6 " aria-hidden="true" />
                                </div> -->
                                {{ feature.name }}
                            </dt>
                            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 dark:text-gray-300">
                                <p class="flex-auto">{{ feature.description }}</p>
                                <p class="mt-6">
                                    <a :href="feature.href" class="text-sm font-semibold leading-6 text-indigo-400">Learn
                                        more <span aria-hidden="true">→</span></a>
                                </p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <!-- Feature section -->
            <!-- <div class="mt-32 sm:mt-56">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl sm:text-center">
                        <h2 class="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2>
                        <p class="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">No server? No problem.</p>
                        <p class="mt-6 text-lg leading-8 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur
                            adipisicing
                            elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis.</p>
                    </div>
                </div>
                <div class="relative overflow-hidden pt-16">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                            alt="App screenshot" class="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10" width="2432"
                            height="1442" />
                        <div class="relative" aria-hidden="true">
                            <div class="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
                        </div>
                    </div>
                </div>
                <div class="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <dl
                        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 dark:text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                        <div v-for="feature in secondaryFeatures" :key="feature.name" class="relative pl-9">
                            <dt class="inline font-semibold ">
                                <component :is="feature.icon" class="absolute top-1 left-1 h-5 w-5 text-indigo-500"
                                    aria-hidden="true" /> 
                                {{ feature.name }}
                            </dt>
                            {{ ' ' }}
                            <dd class="inline">{{ feature.description }}</dd>
                        </div>
                    </dl>
                </div>
            </div> -->

            <!-- Stats -->
            <!-- <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
                <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <h2 class="text-base font-semibold leading-8 text-indigo-400">Our track record</h2>
                    <p class="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">Trusted by thousands of
                        developers&nbsp;worldwide</p>
                    <p class="mt-6 text-lg leading-8 dark:text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                </div>
                <dl
                    class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10  sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    <div v-for="stat in stats" :key="stat.id" class="flex flex-col gap-y-3 border-l border-white/10 pl-6">
                        <dt class="text-sm leading-6">{{ stat.name }}</dt>
                        <dd class="order-first text-3xl font-semibold tracking-tight">{{ stat.value }}</dd>
                    </div>
                </dl>
            </div> -->

            <!-- CTA section -->
            <!-- <div class="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
                <svg class="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true">
                    <defs>
                        <pattern id="1d4240dd-898f-445f-932d-e2872fd12de3" width="200" height="200" x="50%" y="0"
                            patternUnits="userSpaceOnUse">
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y="0" class="overflow-visible fill-gray-800/20">
                        <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            stroke-width="0" />
                    </svg>
                    <rect width="100%" height="100%" stroke-width="0" fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" />
                </svg>
                <div class="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl">
                    <svg viewBox="0 0 1108 632" aria-hidden="true" class="w-[69.25rem] flex-none">
                        <path fill="url(#175c433f-44f6-4d59-93f0-c5c51ad5566d)" fill-opacity=".2"
                            d="M235.233 402.609 57.541 321.573.83 631.05l234.404-228.441 320.018 145.945c-65.036-115.261-134.286-322.756 109.01-230.655C968.382 433.026 1031 651.247 1092.23 459.36c48.98-153.51-34.51-321.107-82.37-385.717L810.952 324.222 648.261.088 235.233 402.609Z" />
                        <defs>
                            <linearGradient id="175c433f-44f6-4d59-93f0-c5c51ad5566d" x1="1220.59" x2="-85.053" y1="432.766"
                                y2="638.714" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4F46E5" />
                                <stop offset="1" stop-color="#80CAFF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div class="mx-auto max-w-2xl text-center">
                    <h2 class="text-3xl font-bold tracking-tight  sm:text-4xl">Boost your productivity.<br />Start
                        using our app today.</h2>
                    <p class="mx-auto mt-6 max-w-xl text-lg leading-8 dark:text-gray-300">Incididunt sint fugiat pariatur
                        cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#"
                            class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get
                            started</a>
                        <a href="#" class="text-sm font-semibold leading-6 ">Learn more <span
                                aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div> -->
        </main>

    </div>
    <Footer />
</template>
  
<script setup>
// import {
//     ArrowPathIcon,
//     ChevronRightIcon,
//     CloudArrowUpIcon,
//     Cog6ToothIcon,
//     FingerPrintIcon,
//     LockClosedIcon,
//     ServerIcon,
// } from '@heroicons/vue/solid'
// import { BoltIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/vue/outline'
import { BookOpenIcon, PencilAltIcon, PresentationChartLineIcon } from '@heroicons/vue/solid'

const bestPractices = [
    {
        name: 'STIGs',
        description:
            'Lorem Ipsum',
        href: '#',
        icon: "",
    },
    {
        name: 'CIS Benchmarks',
        description:
            'Lorem Ipsum',
        href: '#',
        icon: "",
    },
    {
        name: 'Agency Baselines',
        description:
            'Lorem Ipsum',
        href: '#',
        icon: "",
    }
]

const primaryFeatures = [
    {
        name: 'Vulcan',
        description:
            'Generate and tailor security guidance based on Security Requirements Guides (SRGs)',
        href: '/plan/vulcan',
        icon: PencilAltIcon,
    }, {
        name: 'Training Classes',
        description:
            'Learn to use and develop SAF security tools appropraite to your mission.',
        href: '/training',
        icon: BookOpenIcon,
    },
    {
        name: 'Getting Started',
        description:
            'Step through and refine your user story',
        href: '/getting-started',
        icon: PresentationChartLineIcon,
    }
]

const secondaryFeatures = []

// const primaryFeatures = [


//     {
//         name: 'Server monitoring',
//         description:
//             'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
//         href: '#',
//         icon: BoltIcon,
//     },
//     {
//         name: 'Collaborate',
//         description:
//             'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
//         href: '#',
//         icon: UsersIcon,
//     },
//     {
//         name: 'Task scheduling',
//         description:
//             'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
//         href: '#',
//         icon: CalendarDaysIcon,
//     },
// ]
// const secondaryFeatures = [


//     {
//         name: 'Push to deploy.',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
//         icon: CloudArrowUpIcon,
//     },
//     {
//         name: 'SSL certificates.',
//         description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
//         icon: LockClosedIcon,
//     },
//     {
//         name: 'Simple queues.',
//         description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
//         icon: ArrowPathIcon,
//     },
//     {
//         name: 'Advanced security.',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
//         icon: FingerPrintIcon,
//     },
//     {
//         name: 'Powerful API.',
//         description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
//         icon: Cog6ToothIcon,
//     },
//     {
//         name: 'Database backups.',
//         description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
//         icon: ServerIcon,
//     },
// ]
const stats = [


    { id: 1, name: 'Developers on the platform', value: '8,000+' },
    { id: 2, name: 'Daily requests', value: '900m+' },
    { id: 3, name: 'Uptime guarantee', value: '99.9%' },
    { id: 4, name: 'Projects deployed', value: '12m' },
]
</script>