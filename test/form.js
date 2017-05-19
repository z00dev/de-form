/**
 * Created by jakubchadim on 29.03.17.
 */

const {createForm, Fields, Validators} = require('../index')

const ERROR_MESSAGES = {
  REQUIRED: 'Reqired field'
}
const MIN_USER_NAME_LENGTH = 3

const userName = Fields.Text({
  label: 'Username',
  placeholder: 'Peter'
}, [
  Validators.isRequired(ERROR_MESSAGES.REQUIRED),
  Validators.minLength(`Minimal length is ${MIN_USER_NAME_LENGTH}`, MIN_USER_NAME_LENGTH)
])

const password = Fields.Text({
  label: 'Password'
}, [
  Validators.isRequired(ERROR_MESSAGES.REQUIRED)
])

const send = Fields.Text({
  label: 'Send'
})

const Form = createForm({
  userName,
  password,
  send
})

const values = {
  userName: '',
  password: 'mocha'
}

console.log(Form.isValid(values))
console.log(Form.getErrors(values))
