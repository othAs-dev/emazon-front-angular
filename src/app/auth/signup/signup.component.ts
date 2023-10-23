import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormlyFieldConfig, FormlyFormOptions, FormlyModule} from "@ngx-formly/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {EmailValidator, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {MatStepperModule} from "@angular/material/stepper";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormlyModule, MatButtonModule, MatCardModule, ReactiveFormsModule, RouterLink, MatStepperModule, MatDatepickerModule, MatFormFieldModule, MatInputModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export default class SignupComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [{
    type: 'stepper',
    fieldGroup: [
      {
        props: {label: 'Infos personnelles'},
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
        props: {label: 'Infos de connexion'},
        fieldGroup: [
          {
            name: 'email',
            type: 'input',
            key: 'email',
            props: {
              label: 'Email',
              validators: {validation: EmailValidator}
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
          },
        ],
      },
    ],
  }];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
