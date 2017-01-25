# proxy-generics-taxjar

[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

Proxy Generic Payment Processor for Taxjar.com.

## Install

```sh
$ npm install --save proxy-generics-taxjar
```

## Configure

```js
// config/proxyGenerics.js
module.exports = {
  taxjar: {
      adapter: require('proxy-generic-taxjar'),
      options: {
          key: '<your api key>'
      }
  }
}
```

[npm-image]: https://img.shields.io/npm/v/proxy-generics-taxjar.svg?style=flat-square
[npm-url]: https://npmjs.org/package/proxy-generics-taxjar
[ci-image]: https://img.shields.io/circleci/project/github/CaliStyle/proxy-generics-taxjar/master.svg
[ci-url]: https://circleci.com/gh/CaliStyle/proxy-generics-taxjar/tree/master
[daviddm-image]: http://img.shields.io/david//trailpack-proxy-generics-taxjar.svg?style=flat-square
[daviddm-url]: https://david-dm.org/CaliStyle/proxy-generics-taxjar
[codeclimate-image]: https://img.shields.io/codeclimate/github/CaliStyle/proxy-generics-taxjar.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/CaliStyle/proxy-generics-taxjar

