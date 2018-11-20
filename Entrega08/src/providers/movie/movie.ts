/* Autor: Nathalia Nogueira Torres RA:816114445 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class MovieProvider {
  private baseApiPath = 'https://api.themoviedb.org/3';
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies() {
    return this.http.get(this.baseApiPath + '/movie/latest?api_key='
    + this.getApiKey());
    }

  getPopularMovies() {
    return this.http.get(this.baseApiPath + '/movie/popular?api_key='
    + this.getApiKey());
    }

  getApiKey(): string{
    return 'cb794db6c86cb645cb181cbd6a7ff5c6';
    }

  getGenres() {
    return this.http.get(this.baseApiPath + '/genre/movie/list?api_key='
      + this.getApiKey());
  }

}
