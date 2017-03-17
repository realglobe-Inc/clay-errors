/**
 * Policy validation error
 * @augments Error
 * @class PolicyError
 * @param {string} message - Error message
 * @param {Object} detail - Error detail
 */
'use strict'

/** @lends PolicyError */
class PolicyError extends Error {
  constructor (message, detail = {}) {
    super(message)
    const s = this
    s.name = 'PolicyError'
    s.detail = detail
  }
}

module.exports = PolicyError
