import { Injectable, signal } from '@angular/core';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root',
})

export class WatchlistService {

  watchlist = signal<Movie[]>([]);

  getUserWatchlist(){
    try {
      const raw = localStorage.getItem("Watchlist");
      
      if(raw){
        this.watchlist.set(JSON.parse(raw) as Movie[])
      } else {
          this.watchlist.set([])
      }

      
    } catch (e) {
      console.error('Error reading from local storage', e);
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
          isWatched: false
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
    
    return newValue;
  }

  

}
