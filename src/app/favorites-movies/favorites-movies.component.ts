import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-favorites-movies',
  templateUrl: './favorites-movies.component.html',
  styleUrl: './favorites-movies.component.scss'
})
export class FavoritesMoviesComponent {
  favorites = this.movieService.getLikedMovies();
  constructor(private movieService: MoviesService) {}
}
