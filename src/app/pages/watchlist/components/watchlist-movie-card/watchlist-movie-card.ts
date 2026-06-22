import { Component, input, signal, inject, computed } from '@angular/core';
import { Movie } from '../../../../models/movie';
import { Icon } from '../../../../global-components/icon/icon';
import { WatchlistService } from '../../../../services/watchlist';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-watchlist-movie-card',
  imports: [Icon],
  templateUrl: './watchlist-movie-card.html',
  styleUrl: './watchlist-movie-card.css',
})

export class WatchlistMovieCard {
    watchlistService = inject(WatchlistService);
    toastr = inject(ToastrService);

    stars = [1, 2, 3, 4, 5];

    
    
    watchlistMovie = input.required<Movie>();
    
    
    rating = computed(() => this.watchlistMovie().userRating ?? 1);

    setRating(value: number) {
        this.watchlistService.updateUserRating(this.watchlistMovie().id, value);
        

    }
    removeFromWatchlist(movieId: number) {

        this.watchlistService.deleteItemFromWatchlist(movieId)
            this.toastr.info(`${this.watchlistMovie().title} removed from watchlist`, `${this.watchlistMovie().title} removed`, {
            progressBar: true,
            timeOut: 1500
        })
    }

    toggleWatched(){
        this.watchlistService.toggleMovieWatchStatus(this.watchlistMovie());
        
        if(this.watchlistMovie().isWatched == true){
            this.toastr.info(`${this.watchlistMovie().title} moved to watched`, "Moved to watched", {
                progressBar: true,
                timeOut: 1500
        })
        } else {
          this.toastr.info(`${this.watchlistMovie().title} moved to unwatched`, "Moved to unwatched", {
                progressBar: true,
                timeOut: 1500
        })  
        }
    }
}
