import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { SearchToggle } from './components/mobile/search-toggle/search-toggle';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, SearchToggle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-movie-picker');
}
