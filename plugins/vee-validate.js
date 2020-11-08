import { extend } from "vee-validate"
import { required, email } from "vee-validate/dist/rules"
import { configure } from 'vee-validate';

extend("required", {
  ...required,
  message: "Don't be shy, what's your firstname?"
})

extend("email", {
  ...required,
  message: "Please provide a valid e-mail address"
})

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})