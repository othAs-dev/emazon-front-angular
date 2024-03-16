import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetail } from '@app/shared/models/user-detail';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _http: HttpClient = inject(HttpClient);
    public isAuthenticated(): boolean {
        const token = sessionStorage.getItem('token');
        return !!token;
    }
    public getUserDetails(): Observable<{ user_details: UserDetail }> {
        return this._http.get<{ user_details: UserDetail }>(
            'http://localhost:8000/api/v1/customer/details',
            {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                },
            }
        );
    }
    public logout(): void {
        sessionStorage.removeItem('token');
        localStorage.removeItem('user_details');
        window.location.href = '/marketplace/home';
    }
}
