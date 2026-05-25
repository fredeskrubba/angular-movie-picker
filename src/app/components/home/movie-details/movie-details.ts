import { Component, input, inject, effect, linkedSignal, signal } from '@angular/core';
import { Icon } from '../../../shared/icon/icon';
import { Movie } from '../../../models/movie';
import { Movies } from '../../../services/movies';
import { movieDetailsResponse } from '../../../models/DTOs/movieDetailsResponse';
import { movieCastResponse } from '../../../models/DTOs/movieCastResponse';
import { CastMember } from '../../../models/castMember';
@Component({
  selector: 'app-movie-details',
  imports: [Icon],
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.css'],
})
export class MovieDetails {

  movieService = inject(Movies)

  
  selectedMovie = input<Movie | null>(null)
  movie = linkedSignal(() => this.selectedMovie());
  cast = signal<CastMember[]>([]);

  constructor() {
  effect(() => {

    const movie = this.movie();

    if (!movie) return;

    if (
      movie.overview != null &&
      movie.release_date != null &&
      movie.runtime != null
    ) return;

    const id = movie.id;

    this.movieService.getMovieDetails(id).subscribe((res: movieDetailsResponse) => {

        const enrichedMovie: Movie = {
          ...movie,
          overview: res.overview,
          release_date: res.release_date,
          runtime: res.runtime,
          video: res.video,
          genres: res.genres
        };

        this.movie.set(enrichedMovie);
    });

    this.movieService.getMovieCast(id).subscribe((res: movieCastResponse) => {

      this.cast.set(res.cast);
      console.log(this.cast());
    });
  
  
  
    });
  
  
}
}
