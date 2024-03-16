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
import { Router, RouterLink } from '@angular/router';
import { LoginFields } from '@app/formly/formly-presets/login-form';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from '@app/auth/login/login.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AccessToken } from '@app/shared/models/access-token';
import { BehaviorSubject } from 'rxjs';

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
    private _router: Router = inject(Router);
    protected form = new FormGroup({});
    protected model: any = {};
    protected options: FormlyFormOptions = {};
    protected fields: FormlyFieldConfig[] = LoginFields;
    protected loadingSucceed$ = new BehaviorSubject(false);

    protected submit(): void {
        this.loadingSucceed$.next(true);
        this._loginService.login(this.model).subscribe(
            (response: AccessToken) => {
                sessionStorage.setItem('token', response.token);
                this._router.navigate(['/marketplace/home']);
            },
            (error) => {
                this.loadingSucceed$.next(false);
                this._snackBar.open('Authentification échouée');
            }
        );
    }
}
