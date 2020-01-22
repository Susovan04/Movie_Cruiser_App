import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { AuthService } from 'src/app/site/auth.service';
import { Router } from '@angular/router';
import { FavoritesService } from 'src/app/favorite/favorites/favorites.service';
import { MoviesService } from 'src/app/service/movies.service';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[];
  temporaryList: Movie[];
  constructor(private movieService: MovieService, private favoriteService: FavoritesService,
    private authService: AuthService, private router: Router, private moviesService: MoviesService, private userAuthService: UserAuthService) { }

  ngOnInit() {
    // this.movies = this.movieService.getMovieList();
    // this.temporaryList=this.movies;
    // if (this.isAdmin()) {
    //   this.movieService.getMovies().subscribe((movie: Movie[]) => {
    //     this.temporaryList = [...movie]; 
    //     this.movies = [...movie]; 
    //   });
    //   this.movieService.filter.subscribe((obj: { title: string }) => {
    //     if (obj.title !== '') { 
    //       const result = this.temporaryList.filter(
    //         movie => movie.title
    //           .toLowerCase()
    //           .includes(obj.title.toLowerCase())
    //       );
    //       this.movies = result ? result : [];
    //     } else { 
    //       this.movies = [...this.temporaryList];
    //     }
    //   });
    // } else {
    //   this.movies = this.movieService.getMovieList();
    //   this.temporaryList = this.movies;
    this.userAuthService.setMovieId(null);

    this.moviesService.getAllMovies().subscribe(data => {
      this.temporaryList = data;
      this.movies = data;console.log(data)
    });

      this.movieService.filter.subscribe((obj: { title: string }) => {
        if (obj.title !== '') {
          const result = this.temporaryList.filter(
            movie => movie.title.toLowerCase().includes(obj.title.toLowerCase())
          );
          this.movies = result ? result : [];
        } else {
          this.movies = [...this.temporaryList];
        }
      });
    //}
  }
  //   movies: Movie []= [{
  //     id: 1,
  //     title: "Avatar",
  //     boxOffice: 2787965087,
  //     isActive: true,
  //     dateOfLaunch: new Date("2017-03-15"),
  //     genre: "Science Fiction",
  //     hasTeaser: true,
  //     imageUrl:"http://genchi.info/image/avatar-hd-wallpapers-1080p-29.jpg"  
  //   },
  // {
  //   id: 2,
  //   title: "The Avengers",
  //   boxOffice: 1518812988,
  //   isActive: true,
  //   dateOfLaunch: new Date("2017-12-23"),
  //   genre: "Superhero",
  //   hasTeaser: false,
  //   imageUrl:"http://genchi.info/img/avengers-hd-wallpaper-10.jpg"  
  // },
  // {
  //   id: 3,
  //   title: "Titanic",
  //   boxOffice: 2187463944,
  //   isActive: true,
  //   dateOfLaunch: new Date("2017-08-21"),
  //   genre: "Romance",
  //   hasTeaser: false,
  //   imageUrl:"http://genchi.info/images/titanic-wallpaper-43.jpg" 
  // },
  // {
  //   id: 4,
  //   title: "Jurassic World",
  //   boxOffice: 1671713208,
  //   isActive: false,
  //   dateOfLaunch: new Date("2017-07-02"),
  //   genre: "Science Fiction",
  //   hasTeaser: true,
  //   imageUrl:"https://steamuserimages-a.akamaihd.net/ugc/918053309022146367/DE86DED63A5A818CDD79FD6A31CE852FABD98A1B/" 
  // },
  // {
  //   id: 5,
  //   title: "Avengers:End Game",
  //   boxOffice: 2750760348,
  //   isActive: true,
  //   dateOfLaunch: new Date("2034-11-02"),
  //   genre: "Superhero",
  //   hasTeaser: true,
  //   imageUrl:"https://s2.dmcdn.net/v/P5eHF1S2sOONoP59X/x1080" 
  // }];
  addMovieToFavorites(favoriteMovieId: number) {
    this.moviesService.addFavoriteMovie(this.userAuthService.getUsername(), favoriteMovieId).subscribe();
    // this.favoriteService.addToFavorites(favoriteMovieId, 1);
    // console.log(this.authService.loggedIn);
    // if (!this.authService.loggedIn) {
    //   this.router.navigate(['favorites']);
    // }
    
  }
  isAdmin() {
    return this.userAuthService.isAdmin;
  }
}
