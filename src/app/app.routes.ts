import { Routes } from '@angular/router';


export const routes: Routes = [
    {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
    },
    {
    path: "login",
    pathMatch: "full",
    loadComponent: () => {
        return import("./login/login").then(
            m => m.Login
        )
    }},
    {
    path: "browse",
    pathMatch: "full",
    loadComponent: () => {
        return import("./home/home").then(
            m => m.Home
        )
    }},
    {
        path: "watchlist",
        pathMatch: "full",
        loadComponent: () => {
            return import("./watchlist/watchlist").then(
                m => m.Watchlist
            )
        }
    },
    {
        path: "about",
        pathMatch: "full",
        loadComponent: () => {
            return import("./about/about").then(
                m => m.About
            )
        }
    },
    {
        path: 'movies/:id',
        loadComponent: () => {
            return import("./movie-details-mobile/movie-details-mobile").then(
                m => m.MovieDetailsMobile
            )
        }

    }
];
