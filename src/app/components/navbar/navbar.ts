import { Component, inject, signal, computed } from '@angular/core';
import { Icon } from '../../shared/icon/icon';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, NavigationEnd, ActivatedRoute } from '@angular/router';
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
  route = inject(ActivatedRoute);


  mobileMenuIsOpen = false;

  currentTab = signal('popular');
  currentPath = signal(this.router.url.split('?')[0]);

  showSubnav = computed(() => this.currentPath() === '/browse');
  tabs = ['Now Playing', 'Popular', 'Upcoming', 'Top Rated', 'All'];

  constructor() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        const tab = this.route.snapshot.queryParamMap.get('tab') ?? 'Now Playing';

        this.currentTab.set(tab);
        this.currentPath.set(event.urlAfterRedirects.split('?')[0]);
        console.log(this.currentTab())
      });
  }

  private toTabParam(tab: string): string {
    return tab.toLowerCase().replace(/\s+/g, '_');
  }

  toggleMenu() {
    this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
  }

  closeMenu() {
    this.mobileMenuIsOpen = false;
  }

  selectTab(tab: string) {
    const tabParam = this.toTabParam(tab);

    this.router.navigate([], {
      queryParams: { tab: tabParam },
      queryParamsHandling: 'merge',
    });
  }
}
