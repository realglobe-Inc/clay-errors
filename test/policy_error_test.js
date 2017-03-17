/**
 * Test case for policyError.
 * Runs with mocha.
 */
'use strict'

const PolicyError = require('../lib/policy_error.js')
const { ok, equal } = require('assert')
const co = require('co')

describe('policy-error', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Policy error', () => co(function * () {
    let error = new PolicyError('foo')
    ok(error)
    equal(error.message, 'foo')
    equal(error.name, 'PolicyError')
  }))
})

/* global describe, before, after, it */
