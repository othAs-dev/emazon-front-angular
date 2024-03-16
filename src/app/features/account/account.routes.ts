import { Routes } from '@angular/router';
import { authGuard } from '@app/shared/guards/auth.guard';

export default [
    {
        path: '',
        loadComponent: () => import('./account.component'),
        canActivate: [authGuard],
        children: [
            {
                path: 'user-infos',
                loadComponent: () =>
                    import('@feat/account/user-infos/user-infos.component'),
            },
            {
                path: 'orders',
                loadComponent: () => import('./orders/orders.component'),
            },
        ],
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'user-infos',
    },
] as Routes;
