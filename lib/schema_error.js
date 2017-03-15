/**
 * Schema validation error
 * @augments Error
 * @class SchemaError
 * @param {string} message - Error message
 * @param {Object} detail - Error detail
 */
'use strict'

/** @lends SchemaError */
class SchemaError extends Error {
  constructor (message, detail = {}) {
    super(message)
    const s = this
    s.name = 'SchemaError'
    s.detail = detail
  }
}

module.exports = SchemaError
