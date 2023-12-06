import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss'
})
export class MovieSearchComponent {
  query: string = '';
  searchResults: any[] = [];

  constructor(private movieService: MoviesService) {}

  search(): void {
    this.movieService.searchMovies(this.query).subscribe((data) => {
      this.searchResults = data.results;
    });
  }
}
