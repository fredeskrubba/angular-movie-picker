import { Component, input, computed, inject, Input,  Output, EventEmitter } from '@angular/core';
import { Icon } from '../../../../../global-components/icon/icon';
import { Movie } from '../../../../../models/movie';
import { WatchlistService } from '../../../../../services/watchlist';

@Component({
  selector: 'app-rating-menu',
  imports: [Icon],
  templateUrl: './rating-menu.html',
  styleUrl: './rating-menu.css',
})
export class RatingMenu {

  // watchlistService = inject(WatchlistService)

  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  stars = [1, 2, 3, 4, 5];

  rating = computed(() => 1);
    
  // watchlistMovie = input.required<Movie>();

  // setRating(value: number) {
  //   this.watchlistService.updateUserRating(this.watchlistMovie().id, value);
  // }

  closeMenu(): void {
    this.closed.emit();
  }

}
