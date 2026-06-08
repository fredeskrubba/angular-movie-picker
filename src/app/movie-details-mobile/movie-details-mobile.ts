import { Component, effect, inject } from '@angular/core';
import { Movies } from '../services/movies';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details-mobile',
  imports: [],
  templateUrl: './movie-details-mobile.html',
  styleUrl: './movie-details-mobile.css',
})

export class MovieDetailsMobile {

  movieService = inject(Movies)
  private route = inject(ActivatedRoute);


  movieId = this.route.snapshot.paramMap.get('id');

  constructor (){
    effect(()=> {
      console.log(this.movieId)

      if (this.movieId) {
        this.movieService.getMovieDetails(parseInt(this.movieId)).subscribe({
          next: (res) => {
            console.log(res)
          },
          error: () => {
            console.log("error")
          }
        });
    }
    })
  }

}
