import {DatepickerComponent} from "./date-picker.component";
import {FormlyFieldStepper} from "./formly-stepper";

export function initFormly() {
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
      }
    ],
  }
}
