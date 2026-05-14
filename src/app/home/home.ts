import { Component, inject, OnInit, signal } from '@angular/core';
import { Movies } from '../services/movies';
import { Movie } from '../models/movie';
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
    console.log(this.movieService.allMovies);
    this.allMovies.set(this.movieService.allMovies);
  }
}
