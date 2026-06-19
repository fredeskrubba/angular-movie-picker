import { Component, input, signal, inject } from '@angular/core';
import { Movie } from '../../../../models/movie';
import { Icon } from '../../../../global-components/icon/icon';
import { WatchlistService } from '../../../../services/watchlist';

@Component({
  selector: 'app-watchlist-movie-card',
  imports: [Icon],
  templateUrl: './watchlist-movie-card.html',
  styleUrl: './watchlist-movie-card.css',
})

export class WatchlistMovieCard {
    watchlistService = inject(WatchlistService);
    watchlistMovie = input.required<Movie>();
    isOpen = signal(false);

    removeFromWatchlist(movieId: number) {

        this.watchlistService.deleteItemFromWatchlist(movieId)
    }

    toggleWatched(){
        console.log(1)
        this.watchlistMovie().isWatched = this.watchlistService.toggleMovieWatchStatus(this.watchlistMovie());
    }
}
