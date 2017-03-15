/**
 * Resource not found error
 * @augments Error
 * @class NotFoundError
 * @param {string} message - Error message
 * @param {Object} detail - Error detail
 */
'use strict'

/** @lends NotFoundError */
class NotFoundError extends Error {
  constructor (message, detail = {}) {
    super(message)
    const s = this
    s.name = 'NotFoundError'
    s.detail = detail
  }
}

module.exports = NotFoundError
