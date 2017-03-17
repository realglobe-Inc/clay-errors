/**
 * Parse errors into custom error class
 * @function parse
 * @param {Error|Object} error - Error to parse
 * @returns {Error} Parsed error
 */
'use strict'

const findClass = (name) => require('./index')[ name ]

/** @lends parse */
function parse (error) {
  if (!error) {
    return error
  }
  let { name } = error
  let Clazz = findClass(name) || findClass(`${name}Error`)
  if (!Clazz) {
    throw new Error(`Error class not found with name: ${name}`)
  }
  return new Clazz(error.message, error.detail)
}

module.exports = parse
