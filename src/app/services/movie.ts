import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResult, MovieResult } from '../model/interfaces';
import { getMovieDetailsURL, getTopRatedMoviesURL } from './endpoints';


@Injectable({
  providedIn: 'root'
})
export class Movie {
  private http = inject(HttpClient);
  constructor(){}
  
  getTopRatedMovies(page=1):Observable<ApiResult>{
    return this.http.get<ApiResult>(getTopRatedMoviesURL(page)).pipe(
      delay(1000)
    );

  }
  getMovieDetails(id : string):Observable<MovieResult>{
    return this.http.get<MovieResult>(getMovieDetailsURL(id));

  }
}
