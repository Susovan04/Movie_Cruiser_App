import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private authService: AuthService, private userAuthService: UserAuthService) { }
  
  isAuthenticated() {
    return this.userAuthService.loggedIn;
  }
  isAdmin() {
    return this.userAuthService.isAdmin;
  }
  getUser() {
    return this.userAuthService.getUsername();
  }
  onSignOut() {
    this.userAuthService.logOut();
    this.router.navigate([this.userAuthService.redirectUrl]);
  }
  ngOnInit() {
  }

}
