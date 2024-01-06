import { Routes } from '@angular/router';
import MarketplaceComponent from './marketplace.component';

export default [
    {
        path: '',
        component: MarketplaceComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home',
            },
            {
                path: 'home',
                loadComponent: () => import('./home/home.component'),
            },
            {
                path: 'cart',
                loadComponent: () => import('./cart/cart.component'),
            },
            {
                path: 'products/:id',
                loadComponent: () => import('./products/products.component'),
            },
            {
                path: 'product/:id',
                loadComponent: () => import('./product/product.component'),
            },
        ],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
] as Routes;
