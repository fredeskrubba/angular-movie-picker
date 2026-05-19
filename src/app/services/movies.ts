import { inject, Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient } from '@angular/common/http';
import { apiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root',
})

export class Movies {


  http = inject(HttpClient);

  getAllMovies(){
    const url = "https://api.themoviedb.org/3/movie/popular"
    return this.http.get<apiResponse>(url, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODdlMDY5MTQ5N2U3YTIyYmU3NzZiOTQ2YzdlNmViNyIsIm5iZiI6MTc3ODY3MDAyMC40OTIsInN1YiI6IjZhMDQ1OWM0YWJhNDkwMTliNjJkMDkzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EQswnft2NepgHlUpui-N1lCVHRoD8-FG4hDtpfkCU5I",
      }
    })
  }

  allMovies: Array<Movie> = [
  {
    title: "The Nice Guys",
    movieId: 0,
    onWatchList: true,
  },
  {
    title: "The Batman",
    movieId: 1,
    onWatchList: false,
  },
  {
    title: "Stepbrothers",
    movieId: 2,
    onWatchList: true,
  },
  {
    title: "Barbie",
    movieId: 3,
    onWatchList: false,
  },
]
}
