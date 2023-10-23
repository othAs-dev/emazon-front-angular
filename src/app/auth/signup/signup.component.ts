import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyFieldConfig, FormlyFormOptions, FormlyModule} from "@ngx-formly/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {MatStepperModule} from "@angular/material/stepper";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SignupFields} from "../../formlyConfig/formly-presets/signup-from";
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormlyModule, MatButtonModule, MatCardModule, ReactiveFormsModule, RouterLink, MatStepperModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export default class SignupComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = SignupFields;

  submit() {
    alert(JSON.stringify(this.model));
  }
}
