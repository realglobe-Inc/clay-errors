/**
 * Test case for notFoundError.
 * Runs with mocha.
 */
'use strict'

const NotFoundError = require('../lib/not_found_error.js')
const { ok, equal } = require('assert')
const co = require('co')

describe('not-found-error', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Not found error', () => co(function * () {
    let error = new NotFoundError('foo')
    ok(error)
    equal(error.message, 'foo')
    equal(error.name, 'NotFoundError')
  }))
})

/* global describe, before, after, it */
