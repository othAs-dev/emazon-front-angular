import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetail } from '@app/shared/models/user-detail';
import { Id } from '@app/shared/models/id';

@Injectable({ providedIn: 'root' })
export class UserInfosService {
    private _http: HttpClient = inject(HttpClient);

    public getUserInfos$(): Observable<UserDetail> {
        return this._http.get<UserDetail>('/api/user-infos');
    }

    public updateUserInfos$(
        id: Id,
        userDetail: UserDetail
    ): Observable<UserDetail> {
        return this._http.put<UserDetail>(`/api/user-infos/${id}`, userDetail);
    }
}
