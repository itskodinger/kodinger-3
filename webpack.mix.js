const mix = require('laravel-mix');
const glob = require('glob');

let tailwind = require('tailwindcss');
require('laravel-mix-purgecss');

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

const jsFiles = glob.sync('resources/js/*.js');
jsFiles.forEach(filename => {
	mix.js(filename, filename.replace(/^resources\//g, 'public/'));
});

mix.postCss('resources/css/app.css', 'public/css', [
   tailwind('./tailwind.config.js')
]);

if (mix.inProduction()) {
  mix
  .purgeCss({
  	extensions: ['html', 'php', 'js'],
  	globs: [
  	    path.join(__dirname, 'resources/js/**/*.js'),
  	],
  })
  .version();
}
