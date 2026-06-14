import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { SearchToggle } from './components/mobile/search-toggle/search-toggle';
import { SearchMenu } from "./components/mobile/search-menu/search-menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, SearchToggle, SearchMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-movie-picker');
}
