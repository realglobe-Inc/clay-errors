/**
 * Situation error
 * @augments Error
 * @class SituationError
 * @param {string} message - Error message
 * @param {Object} detail - Error detail
 */
'use strict'

/** @lends SituationError */
class SituationError extends Error {
  constructor (message, detail = {}) {
    super(message)
    const s = this
    s.name = 'SituationError'
    s.detail = detail
  }
}

module.exports = SituationError
