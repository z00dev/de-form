
/**
 * Created by jakubchadim on 29.03.17.
 */

const {TEXT} = require('../constants/fields')
const {createField} = require('../utils')

const Text = (params, validators = []) => createField(TEXT, params, validators)

module.exports = Text
