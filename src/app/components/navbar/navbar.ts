import { Component, inject, signal, computed } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Menu } from '../mobile/menu/menu';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, Icon, RouterLink, RouterLinkActive, Menu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar {
  router = inject(Router);
  mobileMenuIsOpen = false;
  selectedTab = signal('Trending');
  currentPath = signal(this.router.url.split('?')[0]);

  showSubnav = computed(() => this.currentPath() === '/');
  tabs = ['Trending', 'Upcoming', 'Top Rated', 'Popular', 'All'];

  constructor() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.currentPath.set(event.urlAfterRedirects.split('?')[0]);
    });
  }

  toggleMenu() {
    this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
  }

  closeMenu() {
    this.mobileMenuIsOpen = false;
  }

  selectTab(tab: string) {
    this.selectedTab.set(tab);
  }
}
