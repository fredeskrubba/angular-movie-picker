import { Component, input, output, computed, inject, Input,  Output, EventEmitter } from '@angular/core';
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

  watchlistService = inject(WatchlistService)

  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  movie = input.required<Movie | null>();
  stars = [1, 2, 3, 4, 5];

  rating = computed(() => this.movie()?.userRating ?? 1);

  setRating(value: number): void {
    const movie = this.movie();
    if (!movie) {
      return;
    }

    this.watchlistService.updateUserRating(movie.id, value);
    this.closeMenu();
  }

  closeMenu(): void {
    this.closed.emit();
  }

}
