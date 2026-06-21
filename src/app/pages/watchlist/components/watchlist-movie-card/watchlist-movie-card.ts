import { Component, input, signal, inject } from '@angular/core';
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

    watchlistMovie = input.required<Movie>();
    isOpen = signal(false);

    removeFromWatchlist(movieId: number) {

        this.watchlistService.deleteItemFromWatchlist(movieId)
            this.toastr.info(`${this.watchlistMovie().title} removed from watchlist`, `${this.watchlistMovie().title} removed`, {
            progressBar: true,
            timeOut: 1500
        })
    }

    toggleWatched(){
        this.watchlistService.toggleMovieWatchStatus(this.watchlistMovie());
        
        console.log(this.watchlistMovie().isWatched)
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
