/**
 * Custom error classes for ClayDB
 * @module clay-errors
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get NotFoundError () { return d(require('./not_found_error')) },
  get parse () { return d(require('./parse')) },
  get PolicyError () { return d(require('./policy_error')) }
}
