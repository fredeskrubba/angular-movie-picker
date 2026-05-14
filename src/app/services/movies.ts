import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})

export class Movies {
  allMovies: Array<Movie> = [
  {
    title: "The Nice Guys",
    movieId: 0,
    onWatchList: true,
  },
  {
    title: "The Batman",
    movieId: 1,
    onWatchList: false,
  },
  {
    title: "Stepbrothers",
    movieId: 2,
    onWatchList: true,
  },
  {
    title: "Barbie",
    movieId: 3,
    onWatchList: false,
  },
]
}
