import { Component, input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})

export class MovieCard {
  hovered = false;

  title = input('Default title')
  posterURL = input('default poster')

  @Output() detailsClicked = new EventEmitter<void>();

  toggleDetails() {
    this.detailsClicked.emit();
  }
}
