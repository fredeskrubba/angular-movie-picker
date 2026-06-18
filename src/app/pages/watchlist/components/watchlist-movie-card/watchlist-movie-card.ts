import { Component, input, signal, inject } from '@angular/core';
import { Movie } from '../../../../models/movie';
import { Icon } from '../../../../global-components/icon/icon';
import { StorageService } from '../../../../services/storage';


@Component({
  selector: 'app-watchlist-movie-card',
  imports: [Icon],
  templateUrl: './watchlist-movie-card.html',
  styleUrl: './watchlist-movie-card.css',
})

export class WatchlistMovieCard {
    storageService = inject(StorageService)
    watchlistMovie = input.required<Movie>();
    isOpen = signal(false);

    removeFromWatchlist(e: MouseEvent) {
      e.stopPropagation();
      this.storageService.removeItem(this.watchlistMovie().title);
      console.log(`Removing ${this.watchlistMovie().title} from watchlist`);
      console.log(this.storageService.getItem("Watchlist"));
    }
}
