import { inject, Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { apiResponse } from '../models/DTOs/apiResponse';
import { environment } from '../../environments/environtment';
import { movieDetailsResponse } from '../models/DTOs/movieDetailsResponse';
import { movieCastResponse } from '../models/DTOs/movieCastResponse';
import { movieStreamResponse } from '../models/DTOs/movieStreamResponse';
import { movieImdbIdResponse } from '../models/DTOs/movieImdbIdResponse';
import { movieImdbRatingResponse } from '../models/DTOs/movieImdbRatingResponse';

@Injectable({
  providedIn: 'root',
})

export class Movies {


  http = inject(HttpClient);

  getAllMovies(){
    const url = "https://api.themoviedb.org/3/movie/popular"
    return this.http.get<apiResponse>(url, {
      headers: {
        "Authorization": `Bearer ${environment.tmdbToken}`,
      }
    })
  }

  getMovieDetails(id:number){
    const url = `https://api.themoviedb.org/3/movie/${id}`
    return this.http.get<movieDetailsResponse>(url, {
      headers: {
        "Authorization": `Bearer ${environment.tmdbToken}`,
      }
    })
  }

  getMovieCast(id:number){
    const url = `https://api.themoviedb.org/3/movie/${id}/credits`

    return this.http.get<movieCastResponse>(url, {
      headers: {
        "Authorization": `Bearer ${environment.tmdbToken}`,
      }
    })
  }

  getMovieStreamers(id:number){
    const url = `https://api.themoviedb.org/3/movie/${id}/watch/providers`

    return this.http.get<movieStreamResponse>(url, {
      headers: {
        "Authorization": `Bearer ${environment.tmdbToken}`,
      }
    })
  }

  getMovieImdbId(id:number){
    const url = `https://api.themoviedb.org/3/movie/${id}/external_ids`

    return this.http.get<movieImdbIdResponse>(url, {
      headers: {
        "Authorization": `Bearer ${environment.tmdbToken}`,
      }
    })
  }

  getImdbRating(imdbId:string){
    const url = `http://www.omdbapi.com/?apikey=${environment.omdbKey}&i=${imdbId}`

    return this.http.get<movieImdbRatingResponse>(url)
  }
}
