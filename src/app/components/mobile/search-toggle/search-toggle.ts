import { Component } from '@angular/core';
import { Icon } from '../../../shared/icon/icon';

@Component({
  selector: 'app-search-toggle',
  imports: [Icon],
  templateUrl: './search-toggle.html',
  styleUrl: './search-toggle.css',
})
export class SearchToggle {
  onToggle(): void {
    console.log('toggle');
  }
}
