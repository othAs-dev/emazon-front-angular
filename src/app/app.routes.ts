import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path: 'marketplace',
    loadChildren: () => import('./marketplace/marketplace.routes'),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'marketplace',
  }
] as Routes;
