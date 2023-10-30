import {Routes} from "@angular/router";
import MarketplaceComponent from "./marketplace.component";

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
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  }
] as Routes;
