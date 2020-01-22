import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './auth.service';
import { UserAuthService } from '../service/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,private userAuthService:UserAuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.userAuthService.redirectUrl = state.url;
      console.log('URL', state.url);
      return Observable.create((observer: Observer<boolean>) => {
        if (this.userAuthService.loggedIn){
          console.log('logged in');
          observer.next(true);
        } else {
          console.log('Not logged in');
          this.router.navigate(['login'], { queryParams: { from: state.url.substr(1) } });
        }
      });
  }
}
