import { extend } from "vee-validate"
import { required, email } from "vee-validate/dist/rules"
import { configure } from 'vee-validate';

extend("required", {
  ...required,
  message: "This field is required"
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