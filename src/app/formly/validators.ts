import { AbstractControl, ValidationErrors } from '@angular/forms';

export function EmailValidator(
  control: AbstractControl
): ValidationErrors | null {
  return /^[\w-.+]+@([\w-]+\.)+[\w-]{2,4}$/.test(control.value)
    ? null
    : {email: true};
}

export function PhoneValidator(
  control: AbstractControl
): ValidationErrors | null {
  return /^((\+)33|0)[1-9](\d{2}){4}$/.test(control.value)
    ? null
    : {phone: true};
}

export function PasswordValidator(
  control: AbstractControl
): ValidationErrors | null {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(control.value)
    ? null
    : {password: true};
}
