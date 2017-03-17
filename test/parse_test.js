/**
 * Test case for parse.
 * Runs with mocha.
 */
'use strict'

const parse = require('../lib/parse.js')
const { ok } = require('assert')
const co = require('co')

describe('parse', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Parse', () => co(function * () {
    let error = parse({
      name: 'PolicyError'
    })
    ok(error)
  }))
})

/* global describe, before, after, it */
