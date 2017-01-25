'use strict'

const _ = require('lodash')
const smokesignals = require('smokesignals')

module.exports = _.defaultsDeep({
  pkg: {
    name: require('../package').name + '-test'
  },
  api: require('../api'),
  config: {
    main: {
      packs: [
        require('trailpack-proxy-generics')
      ]
    },
    proxyGenerics: {
      taxjar: {
        adapter: require('../'),
        options: {
          key: process.env.TAXJAR_KEY
        }
      }
    }
  }
}, smokesignals.FailsafeConfig)


