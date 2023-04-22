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
    path: 'l/assets/asset/:id',
    loadComponent: () => import('./l/assets/asset/asset.page').then( m => m.AssetPage)
  },
  {
    path: 'l/assets/asset/:id/create-lease',
    loadComponent: () => import('./l/assets/asset/create-lease/create-lease.page').then( m => m.CreateLeasePage)
  },
];
