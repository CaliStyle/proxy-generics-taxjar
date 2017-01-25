'use strict'
/* global describe, it */
const assert = require('assert')
describe('Tax Generic Taxjar', () => {
  let TaxGenericService

  before((done) => {
    TaxGenericService = global.app.services.taxGenericService
    done()
  })

  it('should exist', () => {
    assert(TaxGenericService)
  })

})
