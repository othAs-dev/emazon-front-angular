import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupForm } from '@feat/auth/signup/signup.models';
import { AccessToken } from '@app/shared/models/access-token';
import { mapSignupFormToSignupApi } from '@feat/auth/signup/signup.mapper';

@Injectable({ providedIn: 'root' })
export class SignupService {
    private _http: HttpClient = inject(HttpClient);

    public signup(customerInfo: SignupForm): Observable<AccessToken> {
        const customerInfoForm = mapSignupFormToSignupApi(customerInfo);
        console.log(customerInfoForm);
        return this._http.post<AccessToken>(
            'http://localhost:8000/api/v1/auth/register',
            customerInfoForm
        );
    }
}
