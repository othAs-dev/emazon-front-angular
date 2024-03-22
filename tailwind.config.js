/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    // "./src/**/formly-presets/*.ts"
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1280px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1536px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    // plugin(function({ addBase }) {
    //   addBase({'button': ('text-xs tablet:text-sm laptop:text-md desktop:text-lg')})
    // })
  ],
}

