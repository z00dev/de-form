
/**
 * Created by jakubchadim on 29.03.17.
 */

const {ARRAY_OF} = require('../constants/fields')
const {VALIDATOR, FIELD_VALIDATIONS} = require('../constants/internal')
const {createField} = require('../utils')

const validator = (field, value, values) => field[FIELD_VALIDATIONS].map(validator => validator(value, values)).filter(e => e)

const ArrayOf = (params, validators = []) => createField(ARRAY_OF, params, validators, {[VALIDATOR]: validator})

module.exports = ArrayOf