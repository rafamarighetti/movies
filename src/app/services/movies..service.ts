import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { MOVIES_API, MOVIES_API_KEY } from '../../app.api';

import { MovieList } from '../models/MovieList.model';
import { MovieInfo } from '../models/MovieInfo.model';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {
  url = MOVIES_API;

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  // GET
  getDiscoverMovieList(): Observable<MovieList[]> {
    return  this.httpClient.get<MovieList[]>(`${this.url}/discover/movie?api_key=${MOVIES_API_KEY}&language=pt-BR`)
    .pipe(
      map(response => response[`results`]),
      retry(2),
      catchError(this.handleError)
    );
  }
  // GET BY ID
  getMovieById(id: number): Observable<MovieInfo[]> {
    return this.httpClient.get<MovieInfo[]>(`${this.url}/movie/${id}?api_key=${MOVIES_API_KEY}&language=pt-BR`)
    .pipe(
      map(response => response),
      retry(2),
      catchError(this.handleError)
    );
  }
  // ERRORS
  handleError(error: HttpErrorResponse): Observable<[]>  {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}, ` + `message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
