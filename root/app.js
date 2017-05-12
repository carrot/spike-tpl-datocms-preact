const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const MarkdownIt = require('markdown-it')
const SpikeDatoCMS = require('spike-datocms')
const renderComponents = require('reshape-preact-ssr')
const preactBabel = require('babel-preset-preact')
const evalCode = require('reshape-eval-code')

// components
const jsStd = jsStandards({ appendPresets: [preactBabel] })
require('babel-register')(jsStd)
const Example = require('./assets/js/components/example')

// locals
const md = new MarkdownIt()
const locals = { md: md.render.bind(md) }

// primary config
module.exports = {
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: () => locals,
    appendPlugins: [evalCode(locals), renderComponents({
      'example-component': Example
    })]
  }),
  postcss: cssStandards(),
  babel: jsStd,
  plugins: [
    // ----------------------------------------------------------
    // [!!] Dato Integration -- uncomment below and add your api token and models to
    // get the data flowing. See https://github.com/static-dev/spike-datocms#usage
    // for further detail!
    // ----------------------------------------------------------
    // new SpikeDatoCMS({
    //   addDataTo: locals,
    //   token: 'xxx',
    //   models: []
    // })
  ]
}
