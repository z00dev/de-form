
/**
 * Created by jakubchadim on 29.03.17.
 */

const Form = require('./src/form')
const Fields = require('./src/fields')
const Validators = require('./src/validators')

/**
 *
 * @type {{default: createForm, createForm: createForm, Fields: {Text: Text, ArrayOf: ArrayOf}, Validators: {isRequired: isRequired, minLength: minLength}}}
 */
module.exports = {
  default: Form,
  createForm: Form,
  Fields,
  Validators
}
