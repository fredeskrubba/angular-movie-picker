import { Component, inject, signal, input, computed, Output, EventEmitter } from '@angular/core';
import { WatchlistService } from '../../../../../services/watchlist';
import { Movie } from '../../../../../models/movie';
import { Icon } from '../../../../../global-components/icon/icon';

@Component({
  selector: 'app-watchlist-movie-card-mobile',
  imports: [Icon],
  templateUrl: './watchlist-movie-card-mobile.html',
  styleUrl: './watchlist-movie-card-mobile.css',
})
export class WatchlistMovieCardMobile {
  watchlistService = inject(WatchlistService);
    
    @Output() openRatingMenu = new EventEmitter<string>();
    stars = [1, 2, 3, 4, 5];

    rating = computed(() => this.watchlistMovie().userRating ?? 1);
    
    watchlistMovie = input.required<Movie>();
    

    setRating(value: number) {
        this.watchlistService.updateUserRating(this.watchlistMovie().id, value);
    }

    removeFromWatchlist(movieId: number) {
        this.watchlistService.deleteItemFromWatchlist(movieId)
    }

    toggleWatched(){
        this.watchlistService.toggleMovieWatchStatus(this.watchlistMovie());
    }

    openRateMenu(){
        console.log(1211)
        this.openRatingMenu.emit();
    }
}
