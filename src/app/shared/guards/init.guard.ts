import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
import { UserDetail } from '@app/shared/models/user-detail';
import { map, tap } from 'rxjs/operators';

export const initGuard: CanActivateFn = (route, state) => {
    const authService: AuthService = inject(AuthService);

    if (authService.isAuthenticated()) {
        authService
            .getUserDetails()
            .pipe(
                map((userDetail: { user_details: UserDetail }) => {
                    return {
                        firstname: userDetail.user_details.firstname,
                        lastname: userDetail.user_details.lastname,
                    };
                }),
                tap((userDetails) => {
                    localStorage.setItem(
                        'user_details',
                        JSON.stringify(userDetails)
                    );
                })
            )
            .subscribe();
    }
    return true;
};
