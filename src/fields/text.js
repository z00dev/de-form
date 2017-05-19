
/**
 * Created by jakubchadim on 29.03.17.
 */

const {TEXT} = require('../constants/fields')
const {createField} = require('../utils')

/**
 * Text Field
 *
 * @param params
 * @param validators
 * @constructor
 */
module.exports = (params, validators = []) => createField(TEXT, params, validators)
