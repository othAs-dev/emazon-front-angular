import { Routes } from '@angular/router';
import { isLoggedGuard } from '@app/shared/guards/is-logged.guard';

export default [
  {
    path: '',
    loadComponent: () => import('./auth.component'),
    canActivateChild: [isLoggedGuard],
    children: [
      {
        path: 'login',
        loadComponent: () => import('./login/login.component'),
      },
      {
        path: 'signup',
        loadComponent: () => import('./signup/signup.component'),
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login',
  }
] as Routes;
