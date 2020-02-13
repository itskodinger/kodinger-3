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
  	function({ addUtilities, theme }) {
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
			'.tooltip::after': {
				textTransform: 'initial',
				letterSpacing: 'initial',
				fontWeight: 'initial',
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
			'.tooltip:hover::after': {
				display: 'block'
			},
			'.custom-checkbox label': {
				display: 'flex',
				alignItems: 'center'
			},
			'.custom-checkbox input': {
				display: 'none'
			},
			'.custom-checkbox label::before': {
				content: "' '",
				width: '20px',
				height: '20px',
				display: 'inline-block',
				border: '2px solid ' + theme('colors.gray.200'),
				borderRadius: '3px',
				marginRight: '10px'
			},
			'.custom-checkbox input:checked + label::before': {
				backgroundImage: `url("data:image/svg+xml,%3Csvg stroke='%23fff' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg data-name='Layer 2'%3E%3Cg data-name='checkmark'%3E%3Crect width='24' height='24' opacity='0'/%3E%3Cpath fill='%23fff' d='M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
				backgroundColor: theme('colors.indigo.500'),
				borderColor: theme('colors.indigo.600')
			},
			'.custom-checkbox-sm label::before': {
				width: '15px',
				height: '15px',
				marginRight: '7px'
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
  			},
  			'.logo-loader': {
  			  width: '100px',
  			  display: 'inline-block'
  			},

  			'.logo-loader path:not(:first-child)': {
  			  fill: 'transparent',
  			  animationName: 'LogoLoader',
  			  animationDuration: '3s',
  			  animationIterationCount: 'infinite',
  			  stroke: 'rgb(105, 121, 187)',
  			  strokeWidth: '5',
  			},

  			'@keyframes LogoLoader': {
  			  '0%': {
  			    strokeDasharray: 300,
  			    strokeDashoffset: 300,
  			  },
  			  '25%': {
  			    strokeDasharray: 0,
  			    strokeDashoffset: 0,
  			  },
  			  '50%': {
  			    fill: 'rgb(105, 121, 187)',
  			  },
  			  '75%': {
  			    strokeDasharray: 0,
  			    strokeDashoffset: 0,
  			  },
  			  '100%': {
  			    strokeDasharray: 300,
  			    strokeDashoffset: 300,
  			  }
  			}
  		}

  		addUtilities(classes);
  	}
  ]
}
