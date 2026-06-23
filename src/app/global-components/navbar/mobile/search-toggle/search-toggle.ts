import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Icon } from '../../../icon/icon';

@Component({
  selector: 'app-search-toggle',
  imports: [Icon],
  templateUrl: './search-toggle.html',
  styleUrl: './search-toggle.css',
})
export class SearchToggle {
  @Input() isOpen = false;
  @Output() toggleSearch = new EventEmitter<void>();

  onToggle(): void {
    this.toggleSearch.emit();
  }
}
