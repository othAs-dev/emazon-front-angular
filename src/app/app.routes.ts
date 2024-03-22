import { Routes } from '@angular/router';
import { initGuard } from '@app/shared/guards/init.guard';
import { isLoggedGuard } from '@app/shared/guards/is-logged.guard';

export const routes: Routes = [
    {
        path: '',
        canActivateChild: [initGuard],
        children: [
            {
                path: 'auth',
                loadChildren: () => import('@feat/auth/auth.routes'),
                canActivateChild: [isLoggedGuard],
            },
            {
                path: 'account',
                loadChildren: () => import('@feat/account/account.routes'),
            },
            {
                path: 'marketplace',
                loadChildren: () => import('@feat/marketplace/marketplace.routes'),
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'marketplace',
            },
        ],
    },
] as Routes;
