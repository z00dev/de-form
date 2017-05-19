
/**
 * Created by jakubchadim on 29.03.17.
 */

const {createValidation} = require('../utils')

const isValid = (minLength, value) => {
  let length = 0
  if (typeof value === 'object') {
    length = Object.keys(value).length >= minLength
  } else if (value) {
    length = value.length
  }
  return length >= minLength
}

/**
 * Validate min length
 *
 * @param message
 * @param minLength
 * @return {Function}
 */
const minLength = (message, minLength) => createValidation(message, isValid.bind(null, minLength))

module.exports = minLength
