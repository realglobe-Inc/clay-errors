/**
 * Test case for schemaError.
 * Runs with mocha.
 */
'use strict'

const SchemaError = require('../lib/schema_error.js')
const { ok, equal } = require('assert')
const co = require('co')

describe('schema-error', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Schema error', () => co(function * () {
    let error = new SchemaError('foo')
    ok(error)
    equal(error.message, 'foo')
    equal(error.name, 'SchemaError')
  }))
})

/* global describe, before, after, it */
