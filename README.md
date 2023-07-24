# MITRE SAF© Site

MITRE Security Automation Framework Website

## Overview

The MITRE Security Automation Framework© (SAF) brings together open-source, accessible applications, techniques, libraries, and tools developed by MITRE and the security community to streamline security automation for systems and DevOps pipelines.

This repository contains the frontend source code for the upcoming new https://saf.mitre.org website.

# Getting Started

## Frontend Development

1. [Fork repository](https://github.com/mitre/saf-site) and clone it locally
2. Install project dependencies: `yarn install`
3. Install playwright dependencies with `npx playwright install`
4. Copy `.env-sample` into `.env` and replace `CHANGEME` values as appropriate
5. For developing use: `yarn dev`
6. For production use: `yarn build` and `yarn preview`

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://mitre-saf-v2.netlify.app/)

## Backend Development

- Backend is handled in the [saf-site backend repository](https://github.com/mitre/saf-site-backend)

## Technology Stack

- [Nuxt 3](https://v3.nuxtjs.org)
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Tailwind CSS v3](https://tailwindcss.com/docs/configuration)
- [Heroicons](https://github.com/tailwindlabs/heroicons#vue) - beautiful hand-crafted SVG icons, by the makers of Tailwind CSS
- [Vite](https://vitejs.dev/guide/)
- [Headless UI](https://headlessui.dev/vue/menu) - unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
- [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - Automatic Class Sorting with Prettier

### First-party plugins needed for Tailwind UI:

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

## Contributing, Issues and Support

### Contributing

Please feel free to look through our issues, make a fork and submit PRs and improvements. We love hearing from our end-users and the community and will be happy to engage with you on suggestions, updates, fixes or new capabilities.

### Issues and Support

Please feel free to contact us by **opening an issue** on the issue board, or, at [saf@groups.mitre.org](mailto:saf@groups.mitre.org) should you have any suggestions, questions or issues.
