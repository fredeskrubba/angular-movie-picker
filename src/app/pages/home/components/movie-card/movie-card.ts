import { Component, input, Output, EventEmitter } from '@angular/core';
import { Icon } from '../../../../global-components/icon/icon';

@Component({
  selector: 'app-movie-card',
  imports: [Icon],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})

export class MovieCard {
  hovered = false;

  title = input('Default title')
  posterURL = input('default poster')
  selectedMovie = input(false)

  @Output() detailsClicked = new EventEmitter<void>();


  toggleDetails() {
    this.detailsClicked.emit();
  }
}
