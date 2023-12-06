import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {
  movieDetails: any;
  isLiked = false;
  
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {}

  ngOnInit(): void {
    // Use subscribe to react to changes in the route parameters
    this.route.data.subscribe(data => {
      this.movieDetails = data['movie'];
    });
  }

  toggleLike(movie:any) {
    if(this.movieService.isLiked(movie.id)){
      this.movieService.removeLikedMovie(movie.id);
    }else{
      this.movieService.likeMovie(movie)
    }
  }
}
