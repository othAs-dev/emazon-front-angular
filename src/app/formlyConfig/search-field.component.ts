import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {Component} from "@angular/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FieldType, FieldTypeConfig} from "@ngx-formly/core";

@Component({
  selector: 'password-field',
  template: `
    <mat-form-field class="w-full">
      <input matInput placeholder="Rechercher" [formControl]="formControl">
    </mat-form-field>`,
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule],
})
export class SearchFieldComponent extends FieldType<FieldTypeConfig>  {
}
