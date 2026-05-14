import { Component } from '@angular/core';
import { RandomizeButton } from '../components/mobile/randomize-button/randomize-button';
@Component({
  selector: 'app-watchlist',
  imports: [RandomizeButton],
  templateUrl: './watchlist.html',
  styleUrl: './watchlist.css',
})
export class Watchlist {}
