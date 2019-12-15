module.exports = {
  theme: {
    extend: {}
  },
  variants: {
  	borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [
	  require('@tailwindcss/custom-forms'),
  ]
}
