import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Login } from '@app/shared/models/login';
import { AccessToken } from '@app/shared/models/access-token';

@Injectable({ providedIn: 'root' })
export class LoginService {
    private _http: HttpClient = inject(HttpClient);

    public login(credentials: Login): Observable<AccessToken> {
        const credentialsApi = { emailPassword: credentials };
        return this._http.post<AccessToken>(
            'http://localhost:8000/api/v1/auth/signIn',
            credentialsApi
        );
    }
}
