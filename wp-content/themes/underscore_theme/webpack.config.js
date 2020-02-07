var Encore = require('@symfony/webpack-encore');
const glob = require('glob-all');
const PurgecssPlugin = require('purgecss-webpack-plugin');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/dist/')
    // public path used by the web server to access the output path
    .setPublicPath('./')
    // only needed for CDN's or sub-directory deploy
    .setManifestKeyPrefix('./')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './src/js/app.js')
    //.addEntry('page1', './src/js/page1.js')
    //.addEntry('page2', './src/js/page2.js')

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    // .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment if you use Sass/SCSS files
    .enableSassLoader()
    .enablePostCssLoader()
    // //commenting out plugin for purgecss (for now)
    // .addPlugin(
    //     new PurgecssPlugin({
    //       paths: glob.sync([
    //         '*.php',
    //         './**/*.php',
    //         '*.html',
    //         './**/*.html',
    //       ]),
    //       whitelist: ['mobile_input', 'search-form', 'collapsing', 'zd-plugin-initialized']
    //     }),
    //   );

// uncomment if you're having problems with a jQuery plugin
// .autoProvidejQuery()

module.exports = Encore.getWebpackConfig();
