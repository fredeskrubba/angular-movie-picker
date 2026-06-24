import { Component, inject, signal, computed } from '@angular/core';
import {OnInit} from '@angular/core';
import { WatchlistMovieCard } from './components/watchlist-movie-card/watchlist-movie-card';
import { WatchlistFilter } from './watchlist.enum';
import { Icon } from '../../global-components/icon/icon';
import { Movie } from '../../models/movie';
import { WatchlistService } from '../../services/watchlist';
import { WatchlistMovieCardMobile } from './components/mobile/watchlist-movie-card-mobile/watchlist-movie-card-mobile';
import { RatingMenu } from './components/mobile/rating-menu/rating-menu';
import { SearchMenu } from '../../global-components/navbar/mobile/search-menu/search-menu';
import { SearchToggle } from '../../global-components/navbar/mobile/search-toggle/search-toggle';


@Component({
  selector: 'app-watchlist',
  imports: [WatchlistMovieCard, WatchlistMovieCardMobile, Icon, RatingMenu, SearchMenu, SearchToggle],
  templateUrl: './watchlist.html',
  styleUrl: './watchlist.css',
})


export class Watchlist implements OnInit {
  watchlistService = inject(WatchlistService)
  
  watchlistFilter = WatchlistFilter;

  searchQuery = signal("");
  mobileSearchMenuIsOpen = signal(false);
  currentFilter = signal(WatchlistFilter.All);

  ratingMenuOpen = signal(false);
  currentMovie = signal<Movie | null>(null);
  
  items = computed(() => {
    const sq = this.searchQuery().toLowerCase();
    
    return (this.watchlistService.watchlist() ?? []).filter(movie =>
      movie.title.toLowerCase().includes(sq)
    );
  });

  getWatchlist(): Movie[] | null {
    this.watchlistService.getUserWatchlist();
    
    return this.watchlistService.watchlist();
  }

  changeFilter(filter: WatchlistFilter) {
    this.currentFilter.set(filter);
  }

  onSearchUpdated(query: string) {
   
    this.searchQuery.set(query);
    
  }

  openRatingMenu(movie: Movie){
    this.ratingMenuOpen.set(true);
    this.currentMovie.set(movie);
  }

  addRandomMovie(){
    this.watchlistService.addRandomMovie();
  }

  ngOnInit() {
    this.getWatchlist();
  }
 

}
