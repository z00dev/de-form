
/**
 * Created by jakubchadim on 29.03.17.
 */

const {TYPE, FIELD_VALIDATIONS} = require('../constants/internal')

const createField = (type, params, validations = [], internal = {}) => Object.assign({}, params, {[FIELD_VALIDATIONS]: validations}, {[TYPE]: type}, internal)

const createValidation = (message, validate) => (...args) => validate(...args) ? message : null

const commonValidator = (field, value, values) => field[FIELD_VALIDATIONS].map(validator => validator(value, values)).filter(e => e)

const mapObject = (object, cb) => Object.keys(object).map(key => cb(object[key], key))

module.exports = {
  createField,
  createValidation,
  commonValidator,
  mapObject
}
