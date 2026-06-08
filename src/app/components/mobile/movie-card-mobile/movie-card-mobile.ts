import { Component, input, inject} from '@angular/core';
import { Movie } from '../../../models/movie';
import { Icon } from '../../../shared/icon/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card-mobile',
  imports: [Icon],
  templateUrl: './movie-card-mobile.html',
  styleUrl: './movie-card-mobile.css',
})

export class MovieCardMobile {
  private router = inject(Router);

  movieInfo = input<Movie | null>(null)

  navigateToDetails(){
    this.router.navigate(['/movies', this.movieInfo()?.id]);
  }
}

