import { Component, inject, OnInit, signal } from '@angular/core';
import { Movies } from '../services/movies';
import { Movie } from '../models/movie';
import { apiResponse } from '../models/apiResponse';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  movieService = inject(Movies)

  allMovies = signal<Array<Movie>>([])

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((res: apiResponse) => {
    const movies: Movie[] = res.results;

  this.allMovies.set(movies);
});
  }
}
