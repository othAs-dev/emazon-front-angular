import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UserDetail, UserDetailModel } from '@app/shared/models/user-detail';
import { mapUserDetailModelToUserDetail } from '@app/mapper/common.mapper';

@Injectable({ providedIn: 'root' })
export class UserInfosService {
    private _http: HttpClient = inject(HttpClient);

    public getUserInfos$(): Observable<UserDetail> {
        const tokenAuth = sessionStorage.getItem('token') ?? ''
        return this._http.get<{user_details: UserDetail }>('http://localhost:8000/api/v1/customer/details', {
            headers: {'Authorization': 'Bearer ' + tokenAuth }
        }).pipe(
            map(ud => ud.user_details)
        );
    }

    public updateUserInfos$(userDetailModel: UserDetailModel): Observable<UserDetail> {
        const tokenAuth = sessionStorage.getItem('token') ?? '';
        const userDetail = mapUserDetailModelToUserDetail(userDetailModel);
        return this._http.put<{user_details: UserDetail }>(`http://localhost:8000/api/v1/customer/update/details`, userDetail,  {
            headers: {'Authorization': 'Bearer ' + tokenAuth }
        }).pipe(
            map(ud => ud.user_details)
        );
    }
}
