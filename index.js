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
}

