import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'l/assets',
    loadComponent: () => import('./l/assets/assets.page').then( m => m.AssetsPage)
  },
  {
    path: 'l/create-asset',
    loadComponent: () => import('./l/create-asset/create-asset.page').then( m => m.CreateAssetPage)
  },
  {
    path: 'l/create-lease',
    loadComponent: () => import('./l/create-lease/create-lease.page').then( m => m.CreateLeasePage)
  },
];
