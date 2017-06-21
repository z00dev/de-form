/**
 * Created by jakubchadim on 29.03.17.
 */

const {createForm, Fields, Validators} = require('../index')

const ERROR_MESSAGES = {
  REQUIRED: 'Reqired field'
}
const MIN_USER_NAME_LENGTH = 3

// ===========  Fields declaration  ============ //

const userName = Fields.Text({
  label: 'Username',
  placeholder: 'Peter'
}, [
  Validators.minLength(`Minimal length is ${MIN_USER_NAME_LENGTH}`, MIN_USER_NAME_LENGTH)
]).isRequired()

const password = Fields.Text({
  label: 'Password'
}).isRequired(ERROR_MESSAGES.REQUIRED)

const children = Fields.

const childrens = Fields.ArrayOf(userName).isRequired()

const send = Fields.Submit({
  label: 'Send'
})

// =========== Create form  ============ //

const Form = createForm({
  userName,
  password,
  childrens,
  send
})

// ===========  Validate  ============ //

const values = {
  userName: '',
  password: '',
  childrens: [
    '' // This should be validated
  ]
}

console.log(Form.isValid(values))
console.log(Form.getErrors(values))
