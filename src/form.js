/**
 * Created by jakubchadim on 29.03.17.
 */

const {commonValidator} = require('./utils')
const {VALIDATOR} = require('./constants/internal')
const {mapObject} = require('./utils')

class Form {

  constructor (fields) {
    this.fields = fields
  }

  /**
   * Validate values
   *
   * @param {object} values
   * @return {Boolean}
   */
  isValid (values) {
    const errors = this.getErrors(values)

    return !Object.keys(errors).length
  }

  /**
   * Validate values and return errors
   *
   * @param {object} values
   * @return {Object}
   */
  getErrors (values) {
    let errors = {}

    mapObject(this.fields, (field, fieldName) => {
      const value = typeof values === 'object' ? values[fieldName] : null

      const validator = field[VALIDATOR] || commonValidator

      const fieldErrors = validator(field, value, values)

      if (fieldErrors.length) {
        errors[fieldName] = fieldErrors
      }
    })

    return errors
  }

}

/**
 * Form factory
 *
 * @param {Object} fields
 * @return {Form}
 */
const createForm = fields => {
  if (typeof fields !== 'object') {
    throw new Error('Fields has to be object')
  }

  return new Form(fields)
}

module.exports = createForm
