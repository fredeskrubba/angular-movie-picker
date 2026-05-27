import { Component, input, inject, effect, linkedSignal, signal } from '@angular/core';
import { Icon } from '../../../shared/icon/icon';
import { Movie } from '../../../models/movie';
import { Movies } from '../../../services/movies';
import { movieDetailsResponse } from '../../../models/DTOs/movieDetailsResponse';
import { movieCastResponse } from '../../../models/DTOs/movieCastResponse';
import { CastMember } from '../../../models/castMember';
import { Director } from '../../../models/director';
import { movieStreamResponse } from '../../../models/DTOs/movieStreamResponse';
import { StreamProvider } from '../../../models/streamProvider';


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
  directors = signal<Director[]>([]);
  streamProviders = signal<StreamProvider[]>([]);



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
      this.directors.set(res.crew.filter((member) => member.job.toLowerCase() === 'director'));
    });


    this.movieService.getMovieStreamers(id).subscribe((res: movieStreamResponse) => {
      
      if(res.results["DK"] != undefined){

        this.streamProviders.set(res.results["DK"].flatrate);
      } else {
        this.streamProviders.set([]);
      }

    });
  });
  
  
}
}
