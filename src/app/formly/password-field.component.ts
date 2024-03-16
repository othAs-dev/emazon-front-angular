import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'password-field',
  template: `
    <mat-form-field class="w-full">
      <input matInput placeholder="Mot de passe *" [type]="hide ? 'password' : 'text'" [formControl]="formControl">
      <mat-icon matSuffix (click)="hide = !hide">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
      <mat-hint class="text-gray-500 mt-3 text-sm laptop:text-md">1 majuscule, 1 minuscule, 1 chiffre *</mat-hint>
    </mat-form-field>`,
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule],
})
export class PasswordFieldComponent extends FieldType<FieldTypeConfig>  {
  protected hide = true;
}
