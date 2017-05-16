# de-form
Create form by definitions

### Example
```javascript
import Form, {Fields, Validators} from 'de-form'

const customValidator = (value, args, values) => {
  return value === args
}

const signForm = new Form({
  user: Fields.TextField({
    label: 'User name',
    placeholder: 'Enter name'
  }, [
    Validators.MinLength(3, 'Min. length 3'),
    Validators.Pattern('.*[0-9].*', 'Wrong username')
  ]),
  password: Fields.Password({
      label: 'Password'
    }, [
      Validators.MinLength(4, 'Min. length 4'),
      Validators.Custom('pw123', 'Wrong data', customValidator),
      Validators.Required('Required field'),
    ]),
  send: Fields.Submit({
      label: 'Log in'
    }),
})
```

Now we can call many actions on form object

```javascript
// Map of fields
const {user, password} = signForm.fields

user.onChange('Some value')

// Array of errors
signForm.errors

// Bool property
signForm.isValid

// Validate fields
signForm.validate()

// Submit form
signForm.submit()

// Submit form without validation
signForm.submit(true)

// Clear form values
signForm.reset()
```