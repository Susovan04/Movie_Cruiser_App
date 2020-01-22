import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MoviesService } from 'src/app/service/movies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginValid = true;
  authSource: string;
  error: string;
  isMovieIdPresent = true;

  constructor(private router: Router, private route: ActivatedRoute,
    private authService: AuthService, private userAuthService: UserAuthService,
    private authenticationService: AuthenticationService, private moviesService: MoviesService) { }

  ngOnInit() {
    if (this.userAuthService.getMovieId()) {
      //  this.error="logging first before adding to the cart";
      this.isMovieIdPresent = true;
      //  this.userAuthService.setMenuItemId(null);
    } else {
      this.isMovieIdPresent = false;
    }
    this.route.queryParams.subscribe((params: Params) => {
      this.authSource = params['from'];
    });
  }
  onSubmit(form: NgForm) {
    let username = form.value.username;
    let password = form.value.password;
    console.log("username" + username);
    console.log("password" + password);
    this.authenticationService.authenticate(username, password).subscribe((data) => {
      console.log(username);
      console.log(password);
      this.userAuthService.loggedIn = true;
      //this.authenticationFailed = false;
      this.userAuthService.logIn(username, password);
      this.userAuthService.setUsername(data.user);
      console.log(data.user)
      this.userAuthService.setRole(data.role);
      console.log(data.role);
      //this.authenticationService.setToken(data.token);
      const user = this.userAuthService.getUsername();
      this.userAuthService.setToken(data.token);
      if(this.userAuthService.getMovieId()!=null){
        this.moviesService.addFavoriteMovie(user, this.userAuthService.getMovieId()).subscribe() 
      }
      this.router.navigate(['/movie']);
    },
    (error) => {
      console.log(`error ` + JSON.stringify(error))
      this.isLoginValid = false;
      if (error.status == 401) {
        this.error = "Invalid username/password";
      }
    });
    // if (username === 'john') {
    //   this.isLoginValid = false;
    // } else {
    //   this.authService.logIn(username, password);
    //   this.router.navigate([this.authService.redirectedUrl]);
    // }
  }
}
