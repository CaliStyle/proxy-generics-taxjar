'use strict'
/* global describe, it */
const assert = require('assert')
describe('Tax Generic Taxjar', () => {
  let TaxGenericService
  let Taxjar

  before((done) => {
    TaxGenericService = global.app.services.TaxGenericService
    Taxjar = global.app.config.proxyGenerics.taxjar
    done()
  })

})
