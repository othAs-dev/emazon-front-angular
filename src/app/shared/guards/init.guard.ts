import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthState } from '@app/shared/store/auth/auth.state';
import { UserDetails } from '@app/shared/store/auth/auth.action';

export const initGuard: CanActivateFn = (route, state) => {
    const store: Store = inject(Store);
    const isAuthenticated = store.selectSnapshot(AuthState.isAuthenticated)

    if (isAuthenticated) {
        const hasUserDetails: boolean = store.selectSnapshot(AuthState.getUserDetails) !== null
        if (!hasUserDetails)
            store.dispatch(UserDetails)
    }
    return true;
};
