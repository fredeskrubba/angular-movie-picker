import { Component, inject } from '@angular/core';
import {StorageService} from '../services/storage';
import {OnInit} from '@angular/core';
import { WatchlistMovieCard } from '../components/watchlist/watchlist-movie-card/watchlist-movie-card';


@Component({
  selector: 'app-watchlist',
  imports: [WatchlistMovieCard],
  templateUrl: './watchlist.html',
  styleUrl: './watchlist.css',
})
export class Watchlist implements OnInit {
  storageService = inject(StorageService)

  getWatchlist() {
    console.log(this.storageService.getItem("Watchlist"));
    return this.storageService.getItem("Watchlist");
  }

  ngOnInit() {
    this.getWatchlist();
}
 

}
