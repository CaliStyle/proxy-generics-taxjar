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
  it('should exist', () => {
    assert(TaxGenericService)
    assert(Taxjar)
  })
  it('should get rate', (done) => {
    TaxGenericService.getRate({
      from_address: {
        postal_code: '46268',
        province_code: 'IN',
        country_code: 'US'
      },
      to_address: {
        postal_code: '46268',
        province_code: 'IN',
        country_code: 'US'
      },
      subtotal_price: 1000,
      total_shipping: 1000,
      line_items: [{
        id: 1,
        price: 1000,
        tax_code: 'P000000'
      }]
    }, Taxjar)
      .then(rate => {
        // console.log('THIS RATE', rate)
        assert.equal(rate.amount, 140)
        assert.equal(rate.rate, 0.07)
        assert.equal(rate.title, 'Tax')
        assert.ok(rate.tax_details)
        done()
      })
      .catch(err => {
        done(err)
      })
  })

})
