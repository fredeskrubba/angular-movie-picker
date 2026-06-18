import { Component, inject, signal } from '@angular/core';
import {StorageService} from '../../services/storage'
import {OnInit} from '@angular/core';
import { WatchlistMovieCard } from './components/watchlist-movie-card/watchlist-movie-card';
import { WatchlistFilter } from './watchlist.enum';
import { Icon } from '../../global-components/icon/icon';

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


  getWatchlist() {
    return this.storageService.getItem("Watchlist");
  }

  changeFilter(filter: WatchlistFilter) {
    this.currentFilter.set(filter);
    console.log(this.currentFilter());
  }

  onSearchUpdated(query: string) {
    console.log("Search query updated:", query);
    // Implement search logic here, e.g., filter the watchlist based on the query
  }

  ngOnInit() {
    this.getWatchlist();
}
 

}
