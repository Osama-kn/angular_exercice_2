import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  http = inject(HttpClient)

  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;

  private readonly localStorageKey = 'movieList';

  searchMovies(query: string) {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<any>(url);
  }
  getMovieDetails(movieId: number) {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getLikedMovies(): any[] {
    const storedMovies = localStorage.getItem(this.localStorageKey);
    return storedMovies ? JSON.parse(storedMovies) : [];
  }

  likeMovie(movie: any): void {
    const movies = this.getLikedMovies();
    movies.push(movie);
    this.updateLocalStorage(movies);
  }

  removeLikedMovie(id:number): void {
    let movies = this.getLikedMovies();
    movies = movies.filter((m) => m?.id !== id);
    this.updateLocalStorage(movies);
  }
  isLiked(id:number): boolean {
    return this.getLikedMovies().some((m) => m?.id === id);
  }

  private updateLocalStorage(movies: string[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(movies));
  }
}
