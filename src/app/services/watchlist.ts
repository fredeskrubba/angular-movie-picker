import { Injectable, signal, inject } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { movieListResponse } from '../models/DTOs/movieListResponse';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class WatchlistService {

  watchlist = signal<Movie[]>([]);
  http = inject(HttpClient);

  getUserWatchlist(){
    this.loadFromStorage();
  }


  loadFromStorage(){
    let loadedWatchlist: Movie[] = [];
      try {
        const raw = localStorage.getItem("Watchlist");
      
      if(raw){
        loadedWatchlist = JSON.parse(raw) as Movie[]
        this.watchlist.set(loadedWatchlist)
      } else {
          this.watchlist.set(loadedWatchlist)
      }
      return loadedWatchlist;
      
    } catch (e) {
      console.error('Error reading from local storage', e);
      return loadedWatchlist;
    }
  }

  private save(list: Movie[]) {
    localStorage.setItem('Watchlist', JSON.stringify(list));
  }

  addToWatchlist(movie: Movie){
    const raw = localStorage.getItem('Watchlist');

    const watchlist: Movie[] = raw ? JSON.parse(raw) : [];

    if (!watchlist.some(item => item.id === movie.id)) {
      let updatedWatchlist = [
        ...watchlist,
        {
          ...movie,
          isWatched: false, 
          userRating: 1
        }
      ]
      this.watchlist.set(updatedWatchlist)

    localStorage.setItem('Watchlist', JSON.stringify(updatedWatchlist));
  }}

  deleteItemFromWatchlist(id: number){
    
    this.watchlist.update(list => {
      const updated = list.filter(m => m.id !== id);
      this.save(updated);
      return updated;
    });
  }

  toggleMovieWatchStatus(movie: Movie){
    let newValue = false;
    
    const raw = localStorage.getItem('Watchlist');

    const watchlist: Movie[] = raw ? JSON.parse(raw) : [];

    if (watchlist.some(item => item.id === movie.id)) {
      const updatedWatchlist = watchlist.map(item =>
        item.id === movie.id
          ? { ...item, isWatched: !item.isWatched }
          : item
      );

      this.watchlist.set(updatedWatchlist);
      localStorage.setItem('Watchlist', JSON.stringify(updatedWatchlist));
    }
    
    this.updateUserRating(movie.id, 1);
    return newValue;
  }

  isMovieInWatchlist(id: number) {
    return this.loadFromStorage().some(item => item.id === id);
  }

  updateUserRating(id: number, rating: number){
    
    
    const raw = localStorage.getItem('Watchlist');

    const watchlist: Movie[] = raw ? JSON.parse(raw) : [];

    if (watchlist.some(item => item.id === id)) {
      const updatedWatchlist = watchlist.map(item =>
        item.id === id
          ? { ...item, userRating: rating }
          : item
      );

      this.watchlist.set(updatedWatchlist);
      localStorage.setItem('Watchlist', JSON.stringify(updatedWatchlist));
    }
    
  }

  async addRandomMovie(){
    const randomPage = Math.floor(Math.random() * 500) + 1;

    const url = "https://api.themoviedb.org/3/discover/movie"
    
    const response = await firstValueFrom(this.http.get<movieListResponse>(url, {
          headers: {
            "Authorization": `Bearer ${environment.tmdbToken}`,
          },
          params: {
             page: randomPage
          }
    }))

  const results = response.results;

  const randomMovie = results[Math.floor(Math.random() * results.length)];
  
  this.addToWatchlist(randomMovie);

  

  }

}
