import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Icon } from '../../../icon/icon';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterLinkActive, CommonModule, Icon],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  @Input() isOpen = false;
  @Output() toggle = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  toggleMenu() {
    this.toggle.emit();
  }

  closeMenu() {
    this.close.emit();
  }
}
