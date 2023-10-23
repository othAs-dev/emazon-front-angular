import {FormlyFieldConfig} from "@ngx-formly/core";
import {EmailValidator, PasswordValidator, PhoneValidator} from "../validators";

export const SignupFields: FormlyFieldConfig[] = [{
  type: 'stepper',
  fieldGroup: [
    {
      props: {label: 'Personnelles'},
      fieldGroup: [
        {
          key: 'firstname',
          type: 'input',
          props: {
            label: 'Prénom',
            required: true,
          },
        },
        {
          key: 'lastname',
          type: 'input',
          props: {
            label: 'Nom',
            required: true,
          }
        },
        {
          key: 'birthdate',
          type: 'date-picker',
          props: {
            label: 'Date de naissance',
            required: true,
          }
        }
      ],
    },
    {
      props: {label: 'Connexion'},
      fieldGroup: [
        {
          type: 'input',
          key: 'email',
          props: {
            label: 'Email',
          },
          validators: {
            validation: [EmailValidator]
          }
        },
        {
          key: 'phone',
          type: 'input',
          props: {
            label: 'Téléphone',
            placeholder: '',
            required: true,
            type: 'tel',
          },
          validators: {
            validation: [PhoneValidator]
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
          validators: {
            validation: [PasswordValidator]
          }
        },
      ],
    },
  ],
}];
