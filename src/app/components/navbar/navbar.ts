import { Component } from '@angular/core';
import { Icon} from '../../shared/icon/icon';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Menu } from '../mobile/menu/menu';

@Component({
  selector: 'app-navbar',
  imports: [Icon, RouterLink, RouterLinkActive, Menu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  mobileMenuIsOpen = false;

  toggleMenu() {
    this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
  }

  closeMenu() {
    this.mobileMenuIsOpen = false;
  }



}
