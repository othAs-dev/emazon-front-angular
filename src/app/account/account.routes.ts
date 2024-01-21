import { Routes } from '@angular/router';
import { authGuard } from '@app/shared/guards/auth.guard';
export default [
    {
        path: '',
        loadComponent: () => import('./account.component'),
        canActivate: [authGuard],
        children: [
            {
                path: 'infos',
                loadComponent: () => import('./infos/infos.component'),
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
        redirectTo: 'infos',
    },
] as Routes;
