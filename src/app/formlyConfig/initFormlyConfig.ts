import {DatepickerComponent} from "./date-picker.component";
import {FormlyFieldStepperComponent} from "./formly-stepper.component";
import {ConfigOption} from "@ngx-formly/core";
import {PasswordFieldComponent} from "./password-field.component";
import {SearchFieldComponent} from "./search-field.component";

export function initFormly(): ConfigOption {
  return {
    types: [
      {
        name: 'date-picker',
        component: DatepickerComponent,
        wrappers: []
      },
      {
        name: 'stepper',
        component: FormlyFieldStepperComponent,
        wrappers: []
      },
      {
        name: 'password',
        component: PasswordFieldComponent,
        wrappers: []
      },
      {
        name: 'search',
        component: SearchFieldComponent,
        wrappers: []
      }
    ],
    validationMessages: [
      { name: 'email', message: "L'email entré est invalide" },
      { name: 'phone', message: 'Numéro de téléphone invalide' },
      {name: 'required', message: 'Ce champ est obligatoire'}
    ]
  }
}


