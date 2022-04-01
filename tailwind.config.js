const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./packages/web/src/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'teal': colors.teal,
        'cyan': colors.cyan,
        'rose': colors.rose,
        'orange': colors.orange,
        'warm-gray': colors.stone
      }
    }
  },
  variants: {
    extend: {}
  },
  corePlugins: {
    aspectRatio: false
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
}
