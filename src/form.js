/**
 * Created by jakubchadim on 29.03.17.
 */

const {commonValidator} = require('./utils')
const {VALIDATOR} = require('./constants/internal')
const {mapObject} = require('./utils')

class Form {

  constructor (fields) {
    this._fields = fields
  }

  /**
   * Fields
   *
   * @return {Object}
   */
  fields = _ => this._fields

  /**
   * Validate values
   *
   * @param {object} values
   * @return {Boolean}
   */
  validate (values) {
    const errors = this.errors(values)

    return !!Object.keys(errors).length
  }

  /**
   * Validate values and return errors
   *
   * @param {object} values
   * @return {Object}
   */
  errors (values) {
    let errors = {}

    mapObject(this._fields, (field, fieldName) => {
      const field = this._fields[fieldName]
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

const createForm = fields => {
  if (typeof fields !== 'object') {
    throw new Error('Fields has to be object')
  }

  return new Form(fields)
}

module.exports = createForm
