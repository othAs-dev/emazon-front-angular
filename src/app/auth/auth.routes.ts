import {Routes} from "@angular/router";
import LoginComponent from "./login/login.component";
import SignupComponent from "./signup/signup.component";
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
        component: SignupComponent,
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login',
  }
] as Routes;
