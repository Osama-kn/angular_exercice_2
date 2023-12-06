import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsResolver } from './movie.resolver';
import { FavoritesMoviesComponent } from './favorites-movies/favorites-movies.component';

const routes: Routes = [
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
    resolve: {
      movie: MovieDetailsResolver,
    },
  },
  {
    path: 'favorites',
    component: FavoritesMoviesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
