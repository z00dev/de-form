
/**
 * Created by jakubchadim on 29.03.17.
 */

const {createValidation} = require('../utils')

const validate = (value) => {
  return value
}

const required = (message) => createValidation(message, validate)

module.exports = required
