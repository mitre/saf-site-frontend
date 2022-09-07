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
  "./nuxt.config.{js,ts}",
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
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}


