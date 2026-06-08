import { Component, inject, signal } from '@angular/core';
import { Movies } from '../services/movies';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { forkJoin } from 'rxjs';
import { CastMember } from '../models/castMember';
import { Director } from '../models/director';
import { StreamProvider } from '../models/streamProvider';
import { Icon } from '../shared/icon/icon';
import { getProviderIcon } from '../../helpers/getProviderIcon';

@Component({
  selector: 'app-movie-details-mobile',
  imports: [Icon],
  templateUrl: './movie-details-mobile.html',
  styleUrl: './movie-details-mobile.css',
})

export class MovieDetailsMobile {

  movieService = inject(Movies)
  private route = inject(ActivatedRoute);

  movieId = this.route.snapshot.paramMap.get('id');
  movieInfo = signal<Movie | null>(null);
  cast = signal<CastMember[]>([]);
  directors = signal<Director[]>([]);
  streamProviders = signal<StreamProvider[]>([]);
  ratingId = signal<string>("");
  rating = signal<string>("0");

  getProviderIcon = getProviderIcon;
  
  constructor () {
    const id = Number(this.movieId);

    if (!id) {
      return;
    }

    forkJoin({
            details: this.movieService.getMovieDetails(id),
            cast: this.movieService.getMovieCast(id),
            streamers: this.movieService.getMovieStreamers(id),
            imdbId: this.movieService.getMovieImdbId(id),
        }).subscribe({
      next: res => {

        console.log(res)

        this.movieInfo.set({
          id: res.details.id,
          poster_path: res.details.poster_path,
          title: res.details.title,
          overview: res.details.overview,
          release_date: res.details.release_date,
          runtime: res.details.runtime,
          genres: res.details.genres,
          onWatchList: false,
        });

        this.cast.set(res.cast.cast);

        this.directors.set(
          res.cast.crew.filter(
            member => member.job.toLowerCase() === 'director'
          )
        );

        this.streamProviders.set(
          res.streamers.results["DK"]?.flatrate ?? []
        );

        this.ratingId.set(res.imdbId.imdb_id);

        this.movieService.getImdbRating(this.ratingId()).subscribe({
          next: (res) => {
            this.rating.set(res.imdbRating);
            
          },
          error: () => {
           
          }
        });
      },
      error: () => {
        console.log('error loading movie details');
      }
    });
  }

}
