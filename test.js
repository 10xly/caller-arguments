var args = require('./index')
var assert = require('node:assert')
var isEqual = require('is-equal')

assert(args()['1'] === require, 'tests failed')
;(function() {
  assert(isEqual(Array.from(args()), [1, 2, 3]), 'tests failed')
})(1, 2, 3)
