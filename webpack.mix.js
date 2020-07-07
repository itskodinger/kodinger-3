const mix = require('laravel-mix');
const glob = require('glob');

const tailwind = require('tailwindcss');
require('laravel-mix-purgecss');

// extend webpack config
mix.webpackConfig({
  module: {
    rules: [{
      test: /\.js?$/,
      use: [{
        loader: 'babel-loader',
        options: mix.config.babel()
      }]
    }]
  }
});

// get all js files
const jsFiles = glob.sync('resources/js/*.js');

// js files
const reactFiles = [
	'resources/js/post-form.js'
];

// compile each js file
jsFiles.forEach(filename => {
	mix[reactFiles.includes(filename) ? 'react' : 'js'](filename, filename.replace(/^resources\//g, 'public/'));
});

// compile app.css using tailwind plugin
mix.postCss('resources/css/app.css', 'public/css', [
   tailwind('./tailwind.config.js')
]);

// when production mode
if (mix.inProduction()) {
	// purge tailwind! and do versioning
	mix
	.purgeCss({
		extensions: ['html', 'php', 'js'],
		globs: [
		    path.join(__dirname, 'resources/js/**/*.js'),
		],
	})
	.version();
}
