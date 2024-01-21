import { Routes } from '@angular/router';
import { initGuard } from '@app/shared/guards/init.guard';

export const routes: Routes = [
    {
        path: '',
        canActivate: [initGuard],
        children: [
            {
                path: 'auth',
                loadChildren: () => import('./auth/auth.routes'),
            },
            {
                path: 'account',
                loadChildren: () => import('./account/account.routes'),
            },
            {
                path: 'marketplace',
                loadChildren: () => import('./marketplace/marketplace.routes'),
            },
            {
                path: '**',
                pathMatch: 'full',
                redirectTo: 'marketplace',
            },
        ],
    },
] as Routes;
