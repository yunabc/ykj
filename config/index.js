'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
// const resolve = file=> path.resolve(__dirname,'../../webapp/bxb/activity/',file)
const resolve = filestr=> path.resolve(__dirname,'../',filestr)
module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        "/msconsumer": {
            // target: "http://172.16.51.93:8080/",
            // target: "http://172.29.10.101:8080/",
            target: "http://api.test.hrhbbx.com",
            // target: "http://bdt.hrhbbx.com",
            // pathRewrite: {
            //   '^/msconsumer': '/msconsumer'
            // },
            changeOrigin:true
        },
        "/zkrh": {
            // target: "http://172.16.51.93:8080/",
            // target: "http://172.29.10.101:8080/",
            target: "http://sq.test.hrhbbx.com",
            // target: "http://bdt.hrhbbx.com",
            // pathRewrite: {
            //   '^/zkrh': ''
            // },
            changeOrigin:true
        },
    },

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: resolve('dist/index.html'),

    // Paths
    assetsRoot: resolve('dist'),
    assetsDllDirectory: 'dll',
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: false, //'#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
