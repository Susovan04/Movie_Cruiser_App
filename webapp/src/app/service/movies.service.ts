import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../movie/movie';
import { AuthenticationService } from './authentication.service';
import { Favorites } from '../favorite/favorites/favorites';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService, private authenticationService: AuthenticationService) { }

  baseUrl=environment.baseUrl;

  public getAllMovies(): Observable<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization':'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.get<Movie[]>(this.baseUrl+'movies', httpOptions);
  }

  public getMovie(id:number):Observable<Movie>{
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer ' + this.userAuthService.getToken()
      })
    };
    return this.httpClient.get<Movie>(this.baseUrl+'movies/'+id,httpOptions);
  } 

  public modifyMovie(movie:Movie){
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer ' + this.userAuthService.getToken()
      })
    };
    console.log(movie);
    return this.httpClient.put(this.baseUrl+'movies/',movie,httpOptions);
  }

  public addFavoriteMovie(user:string,movieId:number){
    const httpOptions={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer ' + this.userAuthService.getToken()
      })
    };
    console.log("TOKEN FROM ADD FAVORITES"+this.userAuthService.getToken())
    console.log("FROM Movies service add to favorite"+user+" "+movieId);
    return this.httpClient.post(this.baseUrl+"favorites/" + user + "/" + movieId,{},httpOptions);
  }

  public getAllFavoriteMovies(user:string){
    // let user=this.userAuthService.getUsername();
     const httpOptions={
       headers:new HttpHeaders({
         'content-type':'application/json',
         'Authorization':'Bearer ' + this.userAuthService.getToken()
       })
     };
     return this.httpClient.get<Favorites>(this.baseUrl+"favorites/"+user,httpOptions);
   }
   removeFavoriteMovie(user: string,movieId:number){
    // let user=this.userAuthService.getUsername();
   
     const httpOptions={
       headers:new HttpHeaders({
         'content-type':'application/json',
         'Authorization':'Bearer ' + this.userAuthService.getToken()
       })
     };
     console.log("TOKEN FROM GET Favorite -> "+this.userAuthService.getToken())
     console.log("FROM Movies SERVICE GETTING Favorites -> "+ user);
     return this.httpClient.delete(this.baseUrl+"favorites/"+user+"/"+movieId,httpOptions);
   }
}
