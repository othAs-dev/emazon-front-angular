import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
    FormlyFieldConfig,
    FormlyFormOptions,
    FormlyModule,
} from '@ngx-formly/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { LoginFields } from '@app/formlyConfig/formly-presets/login-form';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from '@app/auth/login/login.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginResponse } from '@app/auth/login/login.models';

@Component({
    selector: 'app-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        MatCardModule,
        ReactiveFormsModule,
        FormlyModule,
        MatButtonModule,
        RouterLink,
        MatIconModule,
        MatSnackBarModule,
    ],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
})
export default class LoginComponent {
    private _loginService = inject(LoginService);
    private _snackBar: MatSnackBar = inject(MatSnackBar);
    protected form = new FormGroup({});
    protected model: any = {};
    protected options: FormlyFormOptions = {};
    protected fields: FormlyFieldConfig[] = LoginFields;
    submit() {
        this._loginService.login({ emailPassword: this.model }).subscribe(
            (response: LoginResponse) => {
                sessionStorage.setItem('token', response.token);
                this._snackBar.open('Login successful', 'Close', {
                    duration: 2000,
                });
            },
            (error) => {
                this._snackBar.open('Login failed', 'Close', {
                    duration: 2000,
                });
            }
        );
    }
}
