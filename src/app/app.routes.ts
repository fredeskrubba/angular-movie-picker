import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },

 
  {
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout').then(
        m => m.AuthLayout
      ),

    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/login/login').then(
            m => m.Login
          )
      }
    ]
  },


  {
    path: '',
    loadComponent: () =>
      import('./layouts/main-layout/main-layout').then(
        m => m.MainLayout
      ),

    children: [
      {
        path: 'browse',
        loadComponent: () =>
          import('./pages/home/home').then(
            m => m.Home
          )
      },

      {
        path: 'watchlist',
        loadComponent: () =>
          import('./pages/watchlist/watchlist').then(
            m => m.Watchlist
          )
      },

      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about').then(
            m => m.About
          )
      },

      {
        path: 'movies/:id',
        loadComponent: () =>
          import('./pages/home/components/mobile/movie-details-mobile/movie-details-mobile').then(
            m => m.MovieDetailsMobile
          )
      }
    ]
  }
];
