import { Injectable } from '@angular/core';
import { Favorites } from './favorites';
import { MovieService } from 'src/app/movie/movie.service';
import { v4 as uuid } from 'uuid';
import { Movie } from 'src/app/movie/movie';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  // favorites: Favorites = { items: null, total: 0 };
  // constructor(private movieService: MovieService) { }
  // getFavorites() { return this.favorites; }
  // addToFavorites(movieId: number, quantity: number) {
  //   console.log("adding");
  //   this.movieService.getMovie(movieId).subscribe((movieTobeAdded: Movie) => {
  //     const uid = uuid();
  //     if (this.favorites.items === null) {
  //       this.favorites.items = [{ favoriteId: uid, movie: movieTobeAdded, quantity }];
  //       this.favorites.total++;
  //     } else {
  //       this.favorites.items.push({ favoriteId: uid, movie: movieTobeAdded, quantity });
  //       this.favorites.total++;
  //     }
  //   });
  // }
  // removeFromFavorites(favoriteId: string) {
  //   const favoriteIndex = this.favorites.items.findIndex(favoriteMovie => favoriteMovie.favoriteId == favoriteId);
  //   const favoritesTobeRemoved = this.favorites.items.splice(favoriteIndex, 1)[0];
  //   this.favorites.total--;
  // }
}
