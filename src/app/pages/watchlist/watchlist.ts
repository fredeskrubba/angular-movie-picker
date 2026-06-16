import { Component, inject, signal } from '@angular/core';
import {StorageService} from '../../services/storage'
import {OnInit} from '@angular/core';
import { WatchlistMovieCard } from './components/watchlist-movie-card/watchlist-movie-card';
import { WatchlistFilter } from './watchlist.enum';

@Component({
  selector: 'app-watchlist',
  imports: [WatchlistMovieCard],
  templateUrl: './watchlist.html',
  styleUrl: './watchlist.css',
})


export class Watchlist implements OnInit {
  storageService = inject(StorageService)
  watchlistFilter = WatchlistFilter;

  currentFilter = signal(WatchlistFilter.All);


  getWatchlist() {
    return this.storageService.getItem("Watchlist");
  }

  changeFilter(filter: WatchlistFilter) {
    this.currentFilter.set(filter);
    console.log(this.currentFilter());
  }

  ngOnInit() {
    this.getWatchlist();
}
 

}
