import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { Movies } from '../services/movies';
import { Movie } from '../models/movie';
import { movieListResponse } from '../models/DTOs/movieListResponse';
import { MovieCard } from '../components/home/movie-card/movie-card';
import { MovieDetails } from '../components/home/movie-details/movie-details';
import { MovieCardMobile } from '../components/mobile/movie-card-mobile/movie-card-mobile';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MovieCard, MovieDetails, MovieCardMobile],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home implements OnInit {
  movieService = inject(Movies);
  route = inject(ActivatedRoute);
  router = inject(Router);


  currentTab = signal('trending');
  allMovies = signal<Array<Movie>>([])
  selectedMovie = signal<Movie | null>(null)

  ngOnInit(): void {
    this.router.navigate([], {
      queryParams: { tab: "trending" },
      queryParamsHandling: 'merge',
    });

    this.route.queryParamMap.subscribe(params => {
      const tab = params.get('tab') ?? 'trending';

      console.log('Current tab:', tab);

      this.currentTab.set(tab);

    
    });

    this.fetchMovies(this.currentTab())

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
    this.selectedMovie.set(null);
  }

  toggleDetails(movie: Movie) {
    if(this.selectedMovie()?.id == movie.id){
      this.selectedMovie.set(null)
    } else {

      this.selectedMovie.set(movie);
    }
  }


  fetchMovies(category: string){
    this.movieService.getPopularMovies().subscribe((res: movieListResponse) => {
      const movies: Movie[] = res.results;
      this.allMovies.set(movies);

    });
  }
}
