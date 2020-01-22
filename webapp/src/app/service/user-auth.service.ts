import { Injectable } from '@angular/core';
import { UserService } from '../site/user.service';
import { User } from '../site/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  loggedIn = false;
  isAdmin = false;
  accessToken: string; //JWT token
  token: string;
  redirectUrl = '/';
  userAuthenticated: User;
  private movieApiUrl = "http://localhost:8080/movies"
  movieId: number;
  username:any;
  role:any;

  constructor(private userService: UserService) { }

  getMovieId() {
    return this.movieId;
  }
  setMovieId(movieId: number) {
    this.movieId = movieId;
  }
  logIn(username: string, password: string) {
    this.userService.authenticate(username, password).subscribe((user: User) => {
      if (user) {
        this.loggedIn = true;
        this.userAuthenticated = user;
        this.isAdmin = user.role === 'Admin';
        if (this.isAdmin) {
          this.redirectUrl = '/menu';
        }
      }
    });
  }
  logOut() {
    this.redirectUrl = '/'; //reset to root url
    this.loggedIn = false;
    this.isAdmin = false;
    this.token=null;
    this.role=null;
  }
  isAdminUser() {
    return this.isAdmin;
  }
  
  setUsername(username:string){
    this.username=username;
  }
  getUsername(){
    return this.username;
  }
  getRole(){
    return this.role;
  }
  setRole(role:any){
    this.role=role;
  }
  getToken(){
    return this.token;
  }
  setToken(token:string){
    this.token=token;
  }
}
