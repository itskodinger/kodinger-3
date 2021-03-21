module.exports = {
  purge: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    colors: {
        transparent: 'transparent',
        current: 'currentColor',

        black: '#000',
        white: '#fff',

        gray: {
            100: '#f7fafc',
            200: '#edf2f7',
            300: '#e2e8f0',
            400: '#cbd5e0',
            500: '#a0aec0',
            600: '#718096',
            700: '#4a5568',
            800: '#2d3748',
            900: '#1a202c',
        },
        red: {
            100: '#fff5f5',
            200: '#fed7d7',
            300: '#feb2b2',
            400: '#fc8181',
            500: '#f56565',
            600: '#e53e3e',
            700: '#c53030',
            800: '#9b2c2c',
            900: '#742a2a',
        },
        orange: {
            100: '#fffaf0',
            200: '#feebc8',
            300: '#fbd38d',
            400: '#f6ad55',
            500: '#ed8936',
            600: '#dd6b20',
            700: '#c05621',
            800: '#9c4221',
            900: '#7b341e',
        },
        yellow: {
            100: '#fffff0',
            200: '#fefcbf',
            300: '#faf089',
            400: '#f6e05e',
            500: '#ecc94b',
            600: '#d69e2e',
            700: '#b7791f',
            800: '#975a16',
            900: '#744210',
        },
        green: {
            100: '#f0fff4',
            200: '#c6f6d5',
            300: '#9ae6b4',
            400: '#68d391',
            500: '#48bb78',
            600: '#38a169',
            700: '#2f855a',
            800: '#276749',
            900: '#22543d',
        },
        teal: {
            100: '#e6fffa',
            200: '#b2f5ea',
            300: '#81e6d9',
            400: '#4fd1c5',
            500: '#38b2ac',
            600: '#319795',
            700: '#2c7a7b',
            800: '#285e61',
            900: '#234e52',
        },
        blue: {
            100: '#ebf8ff',
            200: '#bee3f8',
            300: '#90cdf4',
            400: '#63b3ed',
            500: '#4299e1',
            600: '#3182ce',
            700: '#2b6cb0',
            800: '#2c5282',
            900: '#2a4365',
        },
        indigo: {
            100: '#ebf4ff',
            200: '#c3dafe',
            300: '#a3bffa',
            400: '#7f9cf5',
            500: '#667eea',
            600: '#5a67d8',
            700: '#4c51bf',
            800: '#434190',
            900: '#3c366b',
        },
        purple: {
            100: '#faf5ff',
            200: '#e9d8fd',
            300: '#d6bcfa',
            400: '#b794f4',
            500: '#9f7aea',
            600: '#805ad5',
            700: '#6b46c1',
            800: '#553c9a',
            900: '#44337a',
        },
        pink: {
            100: '#fff5f7',
            200: '#fed7e2',
            300: '#fbb6ce',
            400: '#f687b3',
            500: '#ed64a6',
            600: '#d53f8c',
            700: '#b83280',
            800: '#97266d',
            900: '#702459',
        },
    },
    extend: {
      screens: {
        xxl: '1920px'
      },
      fontFamily: {
        sans: 'Source Sans Pro, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
		colors: {
			indigo: {
				100: '#EAEFFF',
				200: '#CAD8FF',
				300: '#A9C0FF',
				400: '#6991FF',
				500: '#2962FF',
				600: '#2558E6',
				700: '#193B99',
				800: '#122C73',
				900: '#0C1D4D',
			},
		},
    	cursor: {
    		help: 'help'
    	},
        zIndex: {
            9999: '9999'
        },
        marginTop: {
            70: 70
        },
        boxShadow: {
            xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
            outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        }

    },
  },
  variants: {
  	borderColor: ['responsive', 'hover', 'focus', 'focus-within', 'group-hover'],
  	opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'group-hover'],
    fontWeight: ['hover', 'focus']
  },
  plugins: [
    require('@tailwindcss/typography'),
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
      '.bg-instagram': {
        backgroundColor: '#5851db'
      },
      '.bg-youtube': {
        backgroundColor: '#ff0000'
      },
      '.bg-dribbble': {
        backgroundColor: '#ea4c89'
      },
      '.bg-buymeacoffee': {
        backgroundColor: '#FFDD00'
      },
      '.bg-karyakarsa': {
        backgroundColor: '#FF5569'
      },
      '.bg-trakteer': {
        backgroundColor: '#BE1E2D'
      },
			'.min-h-main': {
			  minHeight: 'calc(100vh - 142px)'
			},
			'.bg-gradient': {
			  backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
			},
			'.bg-gradient-blue': {
			  backgroundImage: 'linear-gradient(135deg, #0080FF 0%, #0080FF 100%)'
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
      '.tooltip-lg::after': {
        minWidth: '100px'
      },
      '.tooltip-top::after': {
        top: '-100%'
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

            '.animate-ping': {
                animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
            },

            '@keyframes ping': {
              '0%': {
                transform: 'scale(1)',
                opacity: 1
              },
              '75%, 100%': {
                transform: 'scale(2)',
                opacity: 0
              }
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
