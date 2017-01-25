/* eslint no-console: [0] */
'use strict'

module.exports = class ProxyGenericsTaxjar {
  constructor(options) {
    this.options = options
  }

  /**
   * Create Taxjar Instance
   * @returns {*} Taxjar Instance
   */
  taxjar() {
    return require('taxjar')(this.options.key)
  }

  /**
   * get tax rate for an order
   * @param data
   * @returns {Promise}
   */
  getRate(data) {
    return new Promise((resolve, reject) => {
      // transform request
      const taxJarSchema = {
        from_country: data.from_address.country_code,
        from_zip: data.from_address.postal_code,
        from_state: data.from_address.province_code,
        to_country: data.to_address.country_code,
        to_zip: data.to_address.postal_code,
        to_state: data.to_address.province_code,
        amount: data.subtotal_price / 100,
        shipping: data.total_shipping / 100,
        line_items: data.line_items.map(item => {
          return {
            quantity: item.quantity,
            unit_price: item.price / 100,
            product_tax_code: item.tax_code
          }
        })
      }
      // Call Taxjar
      this.taxjar().taxForOrder(taxJarSchema)
        .then(response => {
          // transform response
          const proxyGenericSchema = {
            amount: response.tax.amount_to_collect * 100,
            rate: response.tax.rate,
            title: 'Tax',
            tax_details: response.tax.breakdown
          }
          return resolve(proxyGenericSchema)
        })
        .catch(err => {
          return reject(err)
        })
    })
  }
}

