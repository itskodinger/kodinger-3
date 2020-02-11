module.exports = {
  theme: {
    extend: {
    	cursor: {
    		help: 'help'
    	}
    }
  },
  variants: {
  	borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  	opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
  	function({ addUtilities }) {
  		const classes = {
  			'.counter': {
  				counterReset: 'theCounter'
  			},
  			'.counter .counter-item::before': {
  				counterIncrement: 'theCounter',
  				content: 'counter(theCounter)'
  			},
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
			},
			'.absolutely-center': {
				left: '50%',
				transform: 'translateX(-50%)'
			},
			'.tooltip': {
				position: 'relative'
			},
			'.tooltip::before': {
				display: 'none',
				position: 'absolute',
				zIndex: '10',
				top: '100%',
				left: '100%',
				color: '#fff',
				backgroundColor: '#000',
				borderRadius: '5px',
				padding: '10px',
				width: '100%',
				content: 'attr(data-title)'
			},
			'.tooltip:hover::before': {
				display: 'block'
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
  			},

  			'.anim-scale-up': {
  				animationName: 'anim-scale-up',
  				animationFillMode: 'forwards',
  				animationDuration: '.5s'
  			},
  			'@keyframes anim-scale-up': {
  				'0%': {
  					transform: 'scale(0)'
  				},
  				'100%': {
  					transform: 'scale(1)'
  				}
  			},
  			'.anim-fade-up': {
  				animationName: 'anim-fade-up',
  				animationFillMode: 'forwards',
  				animationDuration: '.5s'
  			},
  			'.anim-fade-down': {
  				animationName: 'anim-fade-down',
  				animationFillMode: 'forwards',
  				animationDuration: '.5s'
  			},
  			'@keyframes anim-fade-up': {
  				'0%': {
  					transform: 'translateY(50px)',
  					opacity: 0
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: 1
  				}
  			},
  			'@keyframes anim-fade-down': {
  				'0%': {
  					transform: 'translateY(0)',
  					opacity: 1
  				},
  				'100%': {
  					transform: 'translateY(50px)',
  					opacity: 0
  				}
  			},
  			'.transition': {
  				transition: 'all .5s'
  			}
  		}

  		addUtilities(classes);
  	}
  ]
}
