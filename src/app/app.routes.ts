import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user-profile-full/:userId',
    loadComponent: () => import('./features/user-profile/user-profile.component').then(c => c.UserProfileComponent),
    data: {
      fullProfile: true
    }
  },
  {
    path: 'user-profile-limited/:userId',
    loadComponent: () => import('./features/user-profile/user-profile.component').then(c => c.UserProfileComponent),
    data: {
      fullProfile: false
    }
  },
  /*
  {

    path: 'home',
    loadComponent: () => import('./features/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
   */
];
