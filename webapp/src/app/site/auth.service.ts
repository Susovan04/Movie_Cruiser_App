import { Injectable } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  isAdmin = false;
  accessToken: string; //JWT token
  redirectedUrl = '/';
  userAuthenticated: User;
  constructor(private userService: UserService) { }
  logIn(username: string, password: string){
    this.userService.authenticate(username, password).subscribe((user: User) => {
      if(user) {
        this.loggedIn = true;
        this.userAuthenticated = user;
        this.isAdmin = user.role === 'Admin';
        if(this.isAdmin) {
          this.redirectedUrl = '/movie';
        }
      }
    });
  }
  logOut() {
    this.redirectedUrl='/'; //reset to root url
    this.loggedIn = false;
    this.isAdmin = false;
  }
  isAdminUser() {
    return this.isAdmin;
  }
}
