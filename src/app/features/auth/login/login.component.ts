import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { LoginFields } from '@app/formly/formly-presets/login-form';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from '@feat/auth/login/login.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AccessToken } from '@app/shared/models/access-token';
import { BehaviorSubject, catchError, EMPTY } from 'rxjs';
import { Store } from '@ngxs/store';
import { Login } from '@app/shared/store/auth/auth.action';

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
    protected model: {email: string, password: string} = {} as {email: string, password: string};
    protected options: FormlyFormOptions = {};
    protected fields: FormlyFieldConfig[] = LoginFields;
    protected loadingSucceed$ = new BehaviorSubject(false)
    private readonly _store : Store = inject(Store);

    protected submit(): void {
        this.loadingSucceed$.next(true);
        this._store.dispatch(new Login(this.model))
            .pipe(
                catchError(_ => {
                    this.loadingSucceed$.next(false);
                    this._snackBar.open('Authentification échouée');
                    return EMPTY
                })
            )
    }
}
