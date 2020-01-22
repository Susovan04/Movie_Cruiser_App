import { Component, OnInit } from '@angular/core';
import { Favorites } from './favorites';
import { FavoritesService } from './favorites.service';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorite: Favorites;
  removeFavorite = false;
  isEmpty = true;
  error: string;

  constructor(private favoriteService: FavoritesService, private userAuthService: UserAuthService, private moviesService: MoviesService) {
    //this.favorite = this.favoriteService.getFavorites();
    this.moviesService.getAllFavoriteMovies(this.userAuthService.getUsername()).subscribe(data => {
      console.log(data);
      if(data){
        this.favorite = data;
        this.isEmpty = false;
      }
    },
      error => {
        console.log(error.error.message);
        if (error.status == 404) {
          this.isEmpty = true;
        }
      })
  }
  onRemoveFavorite(favoriteId: number) {
    // this.favoriteService.removeFromFavorites(favoriteId);
    // this.favoriteService.getFavorites();
    // this.removeFavorite = true;
    this.moviesService.removeFavoriteMovie(this.userAuthService.getUsername(), favoriteId).subscribe(favorite =>
      this.moviesService.getAllFavoriteMovies(this.userAuthService.getUsername()).subscribe(
        favorite => {

          console.log(favorite);
          this.favorite = favorite;
          this.removeFavorite = true;
          this.isEmpty = false;
          setTimeout(() => {
            this.removeFavorite = false;

          }, 1000); return false;

        },
        (error) => {
          console.log(error.error.message);
          this.isEmpty = true;
          this.error = error.error.message;
        }

      )
    );
  }
  ngOnInit() {
  }

}
