const mix = require('laravel-mix');

let tailwind = require('tailwindcss');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.postCss('resources/css/app.css', 'public/css', [
   tailwind('./tailwind.config.js')
])

if (mix.inProduction()) {
  mix
  .purgeCss({
  	extensions: ['html', 'php', 'js'],
  	globs: [
  	    path.join(__dirname, 'public/js/**/*.js'),
  	],
  })
  .version();
}
