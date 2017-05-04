/**
 * Test case for situationError.
 * Runs with mocha.
 */
'use strict'

const SituationError = require('../lib/situation_error.js')
const { ok, equal } = require('assert')
const co = require('co')

describe('situation-error', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Situation error', () => co(function * () {
    let error = new SituationError('foo')
    ok(error)
    equal(error.message, 'foo')
    equal(error.name, 'SituationError')
  }))
})

/* global describe, before, after, it */
