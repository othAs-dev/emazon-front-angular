import {FormlyFieldConfig} from "@ngx-formly/core";
import {EmailValidator} from "../validators";
export const LoginFields: FormlyFieldConfig[] = [
  {
    key: 'email',
    type: 'input',
    props: {
      label: 'Adresse e-mail',
      required: true,
    },
    validators: {
      validation: [EmailValidator]
    }
  },
  {
    key: 'password',
    type: 'input',
    props: {
      label: 'Mot de passe',
      placeholder: '',
      required: true,
      type: 'password',
    },
  }
]
