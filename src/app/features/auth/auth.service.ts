import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetail } from '@app/shared/models/user-detail';
import { Login } from '@app/shared/models/login';
import { AccessToken } from '@app/shared/models/access-token';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _http: HttpClient = inject(HttpClient);
    public isAuthenticated(): boolean {
        const token = sessionStorage.getItem('token');
        return !!token;
    }
    public getUserDetails(token: string | null): Observable<{ user_details: UserDetail }> {
        return this._http.get<{ user_details: UserDetail }>(
            'http://localhost:8000/api/v1/customer/details',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    }

    public login(credentials: Login): Observable<AccessToken> {
        const credentialsApi = { emailPassword: credentials };
        return this._http.post<AccessToken>(
            'http://localhost:8000/api/v1/auth/signIn',
            credentialsApi
        );
    }

    public logout(token: string | null): Observable<void> {
        return this._http.post<void>("http://localhost:8000/api/v1/auth/logout", {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        // localStorage.removeItem('user_details');
    }
}
