const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "MITRE-blue": "var(--color-MITRE-blue)",
        "MITRE-highlighter": "var(--color-MITRE-highlighter)",
        "MITRE-dark-navy": "var(--color-MITRE-dark-navy)",
        "MITRE-navy": "var(--color-MITRE-navy)",
        "MITRE-light-blue": "var(--color-MITRE-light-blue)",
        "MITRE-black": "var(--color-MITRE-black)",
        "MITRE-dark-gray": "var(--color-MITRE-dark-gray)",
        "MITRE-silver": "var(--color-MITRE-silver)",
        "MITRE-light-silver": "var(--color-MITRE-light-silver)",
        "MITRE-white": "var(--color-MITRE-white)",
        "dark-bg": "var(--color-DARKMODE-dark-bg)",
        "dark-text": "var(--color-DARKMODE-dark-text)",
      },
      // colors: {
      //   'dark-highlighter': '',
      //   'light-highlighter': '',
      //   'dark-text': '',
      //   'light-text': '',
      //   'dark-focus': '',
      //   'light-focus': '',
      //   'dark-code': '',
      //   'light-code': '',
      //   'dark-backdrop': '',
      //   'light-backdrop': '',
      //   mitre: {
      //     blue: '#005B94',
      //     highlighter: '#FFF601',
      //     'dark-navy': '#0B2338',
      //     navy: '#0D2F4F',
      //     'light-blue': '#87DEFF',
      //     black: '#111921',
      //     'dark-gray': '#7E8284',
      //     silver: '#D4D4D3',
      //     'light-silver': '#F1F3F4',
      //   },
      //   btn: {
      //     'light-primary': '',
      //     'dark-primary': '',
      //     'light-secondary': '',
      //     'dark-secondary': '',
      //     'light-tertiary': '',
      //     'dark-tertiary': '',
      //     'light-danger': '',
      //     'dark-danger': '',
      //   },
      //   nav: {
      //     'light-active': '',
      //     'dark-active': '',
      //     'light-inactive': '',
      //     'dark-inactive': '',
      //     'light-disabled': '',
      //     'dark-disabled': '',
      //   }
      // },
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}


