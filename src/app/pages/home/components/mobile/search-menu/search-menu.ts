import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Icon } from '../../../../../components/icon/icon';

@Component({
  selector: 'app-search-menu',
  imports: [Icon],
  templateUrl: './search-menu.html',
  styleUrl: './search-menu.css',
})
export class SearchMenu {
  @Input() isOpen = false;
  @Output() search = new EventEmitter<string>(); 

  @Output() closed = new EventEmitter<void>();

  searchQuery = signal("");

  updateSearchQuery(input: string): void {
    this.searchQuery.set(input);
  }

  closeMenu(): void {
    this.closed.emit();
  }

  searchForMovie(): void {
    this.search.emit(this.searchQuery());
    this.searchQuery.set("");
    this.closeMenu();
  }
}
