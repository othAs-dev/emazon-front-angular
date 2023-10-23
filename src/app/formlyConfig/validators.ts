import {AbstractControl, ValidationErrors} from "@angular/forms";

export function EmailValidator(
  control: AbstractControl
): ValidationErrors | null {
  return /^[\w-.+]+@([\w-]+\.)+[\w-]{2,4}$/.test(control.value)
    ? null
    : { email: true };
}
