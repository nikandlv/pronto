const mix = require('laravel-mix');
const mixDependency = require('mix-dependency');

mixDependency.require('typeface-hammersmith-one')
mixDependency.require('react-localization');
mixDependency.require('react-pose');
mixDependency.require('axios');
mixDependency.require('axios-endpoint');
mixDependency.require('@babel/plugin-proposal-class-properties');
mixDependency.require('react-swipeable-views');
mixDependency.require('react-color');
mixDependency.require('mui-pastel');
mixDependency.require('mui-nutella');
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

mix.react('resources/jsx/App.jsx', 'public/jsx/application.js');
