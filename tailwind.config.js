module.exports = {
  theme: {
    extend: {}
  },
  variants: {
  	borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [
  	function({ addUtilities }) {
  		const classes = {
			'.bg-facebook': {
			  backgroundColor: '#3b5998'
			},
			'.bg-twitter': {
			  backgroundColor: '#00acee'
			},
			'.bg-telegram': {
			  backgroundColor: '#0088cc'
			},
			'.bg-whatsapp': {
			  backgroundColor: '#075e54'
			},
			'.min-h-main': {
			  minHeight: 'calc(100vh - 142px)'
			},
			'.bg-gradient': {
			  backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
			},
			'.bg-search': {
				backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cg data-name=\'Layer 2\'%3E%3Cg fill=\'%23999\' data-name=\'search\'%3E%3Crect width=\'24\' height=\'24\' opacity=\'0\'/%3E%3Cpath d=\'M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
				backgroundSize: '20px',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: '10px center',
			}
  		}

  		addUtilities(classes, ['responsive', 'hover']);
  	},
  	function({ addUtilities }) {
  		const classes = {
  			'.spin': {
  				animationName: 'spin',
  				animationIterationCount: 'infinite',
  				animationTimingFunction: 'steps(8)',
  				animationDuration: '1s',
  			},

  			'@keyframes spin': {
  				'0%': {
  					transform: 'rotate(0deg)',
  				},
  				'100%': {
  					transform: 'rotate(180deg)',
  				}
  			}
  		}

  		addUtilities(classes);
  	}
  ]
}
