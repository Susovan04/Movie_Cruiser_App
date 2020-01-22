import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { AuthService } from 'src/app/site/auth.service';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {
  @Input() movie : Movie [];
  movieAdded = false;
  @Output() addedToFavorites: EventEmitter<number> = new EventEmitter<number>();
  constructor(private authService: AuthService, private router: Router, private userAuthService: UserAuthService) { }

  ngOnInit() {
  }
  // movie: Movie = {
  //     id: 1,
  //     title: "Avatar",
  //     boxOffice: 2787965087,
  //     isActive: true,
  //     dateOfLaunch: new Date("2017-03-15"),
  //     genre: "Science Fiction",
  //     hasTeaser: true,
  //     imageUrl:"http://genchi.info/image/avatar-hd-wallpapers-1080p-29.jpg"  
  // }
  onAddToFavorites(movieId: number) {
    // console.log(movieId);
    // this.addedToFavorites.emit(movieId);
    // this.movieAdded = true;
    // setTimeout(() => {
    //   this.movieAdded = false;
    // }, 1000);
    // return false;

    if (!this.userAuthService.loggedIn) {
      this.userAuthService.setMovieId(movieId);
      this.router.navigate(['login']);
    }
    console.log(movieId)
    this.addedToFavorites.emit(movieId);
    this.movieAdded = true;
    setTimeout(() => {
      this.movieAdded = false;
    }, 1000);
    return false;
  }
  isEditAllowed() {
    return this.userAuthService.loggedIn && this.userAuthService.isAdminUser();
  }
  getRole(){
    return this.userAuthService.getRole();
   }
}
