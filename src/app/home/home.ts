import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { Movies } from '../services/movies';
import { Movie } from '../models/movie';
import { apiResponse } from '../models/DTOs/apiResponse';
import { MovieCard } from '../components/home/movie-card/movie-card';
import { MovieDetails } from '../components/home/movie-details/movie-details';


@Component({
  selector: 'app-home',
  imports: [MovieCard, MovieDetails],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {
  movieService = inject(Movies)

  allMovies = signal<Array<Movie>>([])
  selectedMovie = signal<Movie | null>(null)

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((res: apiResponse) => {
      const movies: Movie[] = res.results;
      this.allMovies.set(movies);

    });

  }
  
  searchQuery = signal<string>('');

  items = computed(() => {
    const sq = this.searchQuery().toLowerCase();
    return this.allMovies().filter(x => 
      x.title.toLowerCase().includes(sq) || 
      (x.overview?.toLowerCase().includes(sq) ?? false)
    );
  });

   onSearchUpdated(sq: string) {
    this.searchQuery.set(sq);
  }

  toggleDetails(movie: Movie) {
    if(this.selectedMovie()?.id == movie.id){
      this.selectedMovie.set(null)
    } else {

      this.selectedMovie.set(movie);
    }
  }
}
