import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignupFields } from '@app/formly/formly-presets/signup-from';
import { MatIconModule } from '@angular/material/icon';
import { AccessToken } from '@app/shared/models/access-token';
import { SignupService } from './signup.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
    selector: 'app-signup',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        FormlyModule,
        MatButtonModule,
        MatCardModule,
        ReactiveFormsModule,
        RouterLink,
        MatStepperModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSnackBarModule,
    ],
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export default class SignupComponent {
    private _signupService = inject(SignupService);
    private _snackBar = inject(MatSnackBar);
    protected form = new FormGroup({});
    protected model: any = {};
    protected options: FormlyFormOptions = {};
    protected fields: FormlyFieldConfig[] = SignupFields;

    submit() {
        this._signupService.signup(this.model).subscribe(
            (response: AccessToken) => {
                sessionStorage.setItem('token', response.token);
                window.location.href = '/marketplace/home';
                this._snackBar.open('Login successful');
            },
            (error) => {
                this._snackBar.open('Login failed');
            }
        );
    }
}
