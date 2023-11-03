import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import {FormlyFieldConfig, FormlyFormOptions, FormlyModule} from "@ngx-formly/core";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {LoginFields} from "../../formlyConfig/formly-presets/login-form";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatCardModule, ReactiveFormsModule, FormlyModule, MatButtonModule, RouterLink, MatIconModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
})
export default class LoginComponent {
  protected form = new FormGroup({});
  protected model: any = {};
  protected options: FormlyFormOptions = {};
  protected fields: FormlyFieldConfig[] = LoginFields;

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
