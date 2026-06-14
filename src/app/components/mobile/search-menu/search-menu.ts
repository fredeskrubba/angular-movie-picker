import { Component, signal } from '@angular/core';
import { Icon } from '../../../shared/icon/icon';

@Component({
  selector: 'app-search-menu',
  imports: [Icon],
  templateUrl: './search-menu.html',
  styleUrl: './search-menu.css',
})
export class SearchMenu {
  isOpen = signal(true);

  searchForMovie(): void {
    console.log('search for movie');
    this.isOpen.set(false);
  }
}
