
/**
 * Created by jakubchadim on 29.03.17.
 */

const {createValidation} = require('../utils')

const validate = (minLength, value) => {
  return value
}

const minLength = (message, minLength) => createValidation(message, validate.bind(null, minLength))

module.exports = minLength
