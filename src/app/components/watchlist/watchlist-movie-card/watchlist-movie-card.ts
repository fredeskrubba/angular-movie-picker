import { Component, input } from '@angular/core';
import { Movie } from '../../../models/movie';
import { Icon } from '../../../shared/icon/icon';

@Component({
  selector: 'app-watchlist-movie-card',
  imports: [Icon],
  templateUrl: './watchlist-movie-card.html',
  styleUrl: './watchlist-movie-card.css',
})

export class WatchlistMovieCard {
    watchlistMovie = input.required<Movie>();
}
