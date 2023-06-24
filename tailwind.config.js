const defaultTheme = require('tailwindcss/defaultTheme')

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}


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
        'base': withOpacity('--color-text-base'),
        'header': withOpacity('--color-text-header'),
        'muted': withOpacity('--color-text-muted'),
        'highlighter': withOpacity('--color-text-highlighter'),
        'fill': withOpacity('--color-fill'),
        'dropshadow': withOpacity('--color-dropshadow'),
        'blur': withOpacity('--color-blur'),
        'accent': withOpacity('--color-accent'),
        'neutral-1': withOpacity('--color-neutral-1'),
        'neutral-2': withOpacity('--color-neutral-2'),
        'neutral-3': withOpacity('--color-neutral-3'),
        'neutral-4': withOpacity('--color-neutral-4'),
        'button-accent': withOpacity('--color-button-accent'),
        'button-text': withOpacity('--color-button-text'),
        'button-disabled': withOpacity('--color-button-disabled'),
        'button-disabled-text': withOpacity('--color-button-disabled-text'),
        'nav-active': withOpacity(' --color-nav-active'),
        'nav-hover': withOpacity(' --color-nav-hover'),
        'nav-base': withOpacity('--color-nav-base'),
        mitre: {
          blue: '#005B94',
          highlighter: '#FFF601',
          'dark-navy': '#0B2338',
          navy: '#0D2F4F',
          'light-blue': '#87DEFF',
          black: '#111921',
          'dark-gray': '#7E8284',
          silver: '#D4D4D3',
          'light-silver': '#F1F3F4',
        },
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        mitre: 'Roboto Slab'
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}


