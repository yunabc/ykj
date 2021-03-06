// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-preset-env":{
      autoprefixer: { grid: true },
    },
    // to edit target browsers: use "browserslist" field in package.json
    // "autoprefixer": {
    //     flexbox:true
    // },
    "postcss-write-svg": { utf8: false }, 
    // "postcss-cssnext": {}, 
    "postcss-px-to-viewport": { 
      viewportWidth: 750, // (Number) The width of the viewport. 
      viewportHeight: 1334, // (Number) The height of the viewport. 
      unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
      viewportUnit: 'vw', // (String) Expected units. 
      selectorBlackList: ['.ignore', '.hairlines',/^@media/], // (Array) The selectors to ignore and leave as px.
      minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
      mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
    },
    "postcss-viewport-units":{
      filterRule: rule => rule.selector.indexOf('::after') === -1 && rule.selector.indexOf('::before') === -1 && rule.selector.indexOf(':after') === -1 && rule.selector.indexOf(':before') === -1
    },
    "cssnano": { 
      "preset": "default", 
      "autoprefixer": false, 
      "postcss-zindex": false 
    }
  }
}
