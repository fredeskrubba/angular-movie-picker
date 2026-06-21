import { Component, input, inject, effect, linkedSignal, signal } from '@angular/core';
import { Icon } from '../../../../global-components/icon/icon';
import { Movie } from '../../../../models/movie';
import { Movies } from '../../../../services/movies';
import { CastMember } from '../../../../models/castMember';
import { Director } from '../../../../models/director';
import { StreamProvider } from '../../../../models/streamProvider';
import { MovieDetailsSkeleton } from '../loading/movie-details-skeleton/movie-details-skeleton';
import { forkJoin } from 'rxjs';
import { getProviderIcon } from '../../../../../helpers/getProviderIcon';
import { WatchlistService } from '../../../../services/watchlist';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-movie-details',
  imports: [Icon, MovieDetailsSkeleton],
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.css'],
})
export class MovieDetails {

  movieService = inject(Movies)
  watchlistService = inject(WatchlistService)
  toastr = inject(ToastrService);

  selectedMovie = input<Movie | null>(null)
  movie = linkedSignal(() => this.selectedMovie());
  cast = signal<CastMember[]>([]);
  directors = signal<Director[]>([]);
  streamProviders = signal<StreamProvider[]>([]);
  ratingId = signal<string>("");
  rating = signal<string>("0");
  isLoading = signal<boolean>(true);

  getProviderIcon = getProviderIcon;

  constructor() {
    effect(() => {
      const movie = this.movie();

      if (!movie) return;

      this.updateWatchlistFlag(movie);

      if (
        movie.overview != null &&
        movie.release_date != null &&
        movie.runtime != null
      ) return;

      this.isLoading.set(true);
      const id = movie.id;

      forkJoin({
        details: this.movieService.getMovieDetails(id),
        cast: this.movieService.getMovieCast(id),
        streamers: this.movieService.getMovieStreamers(id),
        imdbId: this.movieService.getMovieImdbId(id),
      }).subscribe({
        next: (result) => {
          const enrichedMovie: Movie = {
            ...movie,
            overview: result.details.overview,
            release_date: result.details.release_date,
            runtime: result.details.runtime,
            video: result.details.video,
            genres: result.details.genres,
          };

          this.movie.set(enrichedMovie);

          this.cast.set(result.cast.cast);

          this.directors.set(
            result.cast.crew.filter(
              member => member.job.toLowerCase() === 'director'
            )
          );

          this.streamProviders.set(
            result.streamers.results['DK']?.flatrate ?? []
          );

          this.ratingId.set(result.imdbId.imdb_id);

          this.movieService.getImdbRating(this.ratingId()).subscribe({
            next: (res) => {
              this.rating.set(res.imdbRating);
              this.isLoading.set(false);
            },
            error: () => {
              this.isLoading.set(false);
            }
          });
        },

        error: () => {
          this.isLoading.set(false);
        }
      });
    });
  }

  private updateWatchlistFlag(movie: Movie) {
    const isOnWatchList = this.watchlistService.isMovieInWatchlist(movie.id);

    if (movie.onWatchList !== isOnWatchList) {
      this.movie.set({
        ...movie,
        onWatchList: isOnWatchList,
      });
    }
  }

  addToWatchlist() {
    const movie = this.selectedMovie();
    if (!movie) return;

    this.watchlistService.addToWatchlist(movie);
    this.movie.set({
      ...movie,
      onWatchList: true,
    });
    this.toastr.info(`${movie.title} added to watchlist`, `${movie.title} added`, {
      progressBar: true,
      timeOut: 1500
    });
  }

  removeFromWatchlist(){
    const movie = this.selectedMovie();

    if (!movie) return;

    this.watchlistService.deleteItemFromWatchlist(movie.id);
    this.movie.set({
      ...movie,
      onWatchList: false,
    });

    this.toastr.info(`${movie.title} removed from watchlist`, `${movie.title} removed from watchlist`, {
      progressBar: true,
      timeOut: 1500
    })
  }
}

