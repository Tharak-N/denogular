import { Routes } from '@angular/router';
import { canActivateFn } from './guards';

export const routes: Routes = [
  {
    path: '',
    // loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent),
    loadChildren: () => import('./home/home.routes').then((m) => m.routes),
    canActivate: [canActivateFn]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent)
  }
];
