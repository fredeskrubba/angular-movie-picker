import { inject, Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { apiResponse } from '../models/apiResponse';
import { environment } from '../../environments/environtment';

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
}
