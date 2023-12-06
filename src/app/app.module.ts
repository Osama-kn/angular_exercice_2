import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FavoritesMoviesComponent } from './favorites-movies/favorites-movies.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    MovieDetailsComponent,
    FavoritesMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
