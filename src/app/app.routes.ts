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
          import('./login/login').then(
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
          import('./home/home').then(
            m => m.Home
          )
      },

      {
        path: 'watchlist',
        loadComponent: () =>
          import('./watchlist/watchlist').then(
            m => m.Watchlist
          )
      },

      {
        path: 'about',
        loadComponent: () =>
          import('./about/about').then(
            m => m.About
          )
      },

      {
        path: 'movies/:id',
        loadComponent: () =>
          import('./movie-details-mobile/movie-details-mobile').then(
            m => m.MovieDetailsMobile
          )
      }
    ]
  }
];
