import { Routes } from '@angular/router';
import MarketplaceComponent from './marketplace.component';
import { CategoryResolver } from '@feat/marketplace/category/categoryResolver.resolver';

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
                path: 'category/:id',
                loadComponent: () =>
                    import('@feat/marketplace/category/category.component'),
                resolve: { category: CategoryResolver },
            },
            {
                path: 'product/:id',
                loadComponent: () => import('./product/product.component'),
            },
            {
                path: 'thanks',
                loadComponent: () => import('./thanks/thanks.component')
            }
        ],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
] as Routes;
