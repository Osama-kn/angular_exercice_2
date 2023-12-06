import { RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { MoviesService } from './services/movies.service';


@Injectable({
  providedIn: 'root',
})
export class MovieDetailsResolver {
  constructor(private movieService: MoviesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    const movieId = route.paramMap.get('id');
    return this.movieService.getMovieDetails(Number(movieId));
  }
}