import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Movie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url: string = environment.url;

  constructor(private _http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    console.log(this._http.get<Movie[]>(this.url));
    return this._http.get<Movie[]>(this.url);
  }
}
