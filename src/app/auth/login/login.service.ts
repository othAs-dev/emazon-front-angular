import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login, LoginResponse } from '@app/auth/login/login.models';

@Injectable({ providedIn: 'root' })
export class LoginService {
    private _http: HttpClient = inject(HttpClient);

    public login(credentials: Login): Observable<LoginResponse> {
        return this._http.post<LoginResponse>(
            'http://localhost:8000/api/v1/auth/signIn',
            credentials
        );
    }
}
