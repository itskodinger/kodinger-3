module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
	  require('@tailwindcss/custom-forms'),

    function({ addUtilities }) {
      const newUtilities = {
        '.bg-facebook': {
          backgroundColor: '#3b5998',
        },
        '.bg-twitter': {
          backgroundColor: '#00acee',
        },
        '.bg-telegram': {
          backgroundColor: '#0088cc',
        },
        '.bg-whatsapp': {
          backgroundColor: '#075e54',
        },
        '.text-facebook': {
          color: '#3b5998',
        },
        '.text-twitter': {
          color: '#00acee',
        },
        '.text-telegram': {
          color: '#0088cc',
        },
        '.text-whatsapp': {
          color: '#075e54',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
	  }
  ]
}
