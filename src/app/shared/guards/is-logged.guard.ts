import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@app/auth/auth.service';
import { inject } from '@angular/core';

export const isLoggedGuard: CanActivateFn = (route, state) => {
    const authService: AuthService = inject(AuthService);
    if (authService.isAuthenticated()) {
        const router = inject(Router);
        router.navigate(['/marketplace/home']);
        return false;
    }
    return true;
};
