import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthState } from '@app/shared/store/auth/auth.state';

export const authGuard: CanActivateFn = (route, state) => {
    const store: Store = inject(Store);
    const isAuthenticated = store.selectSnapshot(AuthState.isAuthenticated)

    if (!isAuthenticated) {
        const router = inject(Router);
        router.navigate(['/auth/login']);
        return false;
    }
    return true;
};
