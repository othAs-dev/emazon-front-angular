import {Routes} from "@angular/router";
import AuthComponent from "./auth.component";

export default [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
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
