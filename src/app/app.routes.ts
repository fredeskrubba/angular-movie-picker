import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: "",
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
    }
];
