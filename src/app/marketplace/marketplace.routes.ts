import {Routes} from "@angular/router";

export default [
  {
    path: '',
    loadComponent: () => import('./marketplace.component'),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.component'),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
  }
] as Routes;
