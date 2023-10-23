import {DatepickerComponent} from "./date-picker.component";
import {FormlyFieldStepper} from "./formly-stepper";
import {ConfigOption} from "@ngx-formly/core";

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
        component: FormlyFieldStepper,
        wrappers: []
      },
    ],
    validationMessages: [
      { name: 'email', message: "L'email entré est invalide" },
      { name: 'phone', message: 'Numéro de téléphone invalide' },
      { name: 'password', message: '1 majuscule, 1 minuscule et 1 chiffre' },
      {name: 'required', message: 'Ce champ est obligatoire'}
    ]
  }
}


