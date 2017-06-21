'use strict'

const isRequired = require('./isRequired')
const minLength = require('./minLength')
const maxLength = require('./maxLength')
const length = require('./length')
const email = require('./email')

/**
 *
 * @type {{isRequired: isRequired, minLength: minLength}}
 */
module.exports = {
  isRequired,
  minLength,
  maxLength,
  length,
  email
}
