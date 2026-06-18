import { Component, inject, signal, computed } from '@angular/core';
import {StorageService} from '../../services/storage'
import {OnInit} from '@angular/core';
import { WatchlistMovieCard } from './components/watchlist-movie-card/watchlist-movie-card';
import { WatchlistFilter } from './watchlist.enum';
import { Icon } from '../../global-components/icon/icon';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-watchlist',
  imports: [WatchlistMovieCard, Icon],
  templateUrl: './watchlist.html',
  styleUrl: './watchlist.css',
})


export class Watchlist implements OnInit {
  storageService = inject(StorageService)
  watchlistFilter = WatchlistFilter;

  searchQuery = signal("");
  currentFilter = signal(WatchlistFilter.All);

  items = computed(() => {
    const sq = this.searchQuery().toLowerCase();

    return (this.getWatchlist() ?? []).filter(movie =>
      movie.title.toLowerCase().includes(sq)
    );
  });

  getWatchlist(): Movie[] | null {
    const data = this.storageService.getItem("Watchlist");
    return data ? data as Movie[] : null;
  }

  changeFilter(filter: WatchlistFilter) {
    this.currentFilter.set(filter);
  }

  onSearchUpdated(query: string) {
   
    this.searchQuery.set(query);
    
  }

  ngOnInit() {
    this.getWatchlist();
}
 

}
