import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Subject, Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  filter = new Subject();
  configUrl = "assets/movie-list.json"
  activeMovieList: Movie[];
  constructor(private http: HttpClient) { }
  movies: Movie []= [{
    id: 1,
    title: "Avatar",
    boxOffice: 2787965087,
    active: true,
    dateOfLaunch: new Date("2017-03-15"),
    genre: "Science Fiction",
    hasTeaser: true,
    imageUrl:"http://genchi.info/image/avatar-hd-wallpapers-1080p-29.jpg"  
  },
{
  id: 2,
  title: "The Avengers",
  boxOffice: 1518812988,
  active: true,
  dateOfLaunch: new Date("2017-12-23"),
  genre: "Superhero",
  hasTeaser: false,
  imageUrl:"http://genchi.info/img/avengers-hd-wallpaper-10.jpg"  
},
{
  id: 3,
  title: "Titanic",
  boxOffice: 2187463944,
  active: true,
  dateOfLaunch: new Date("2017-08-21"),
  genre: "Romance",
  hasTeaser: false,
  imageUrl:"http://genchi.info/images/titanic-wallpaper-43.jpg" 
},
{
  id: 4,
  title: "Jurassic World",
  boxOffice: 1671713208,
  active: false,
  dateOfLaunch: new Date("2017-07-02"),
  genre: "Science Fiction",
  hasTeaser: true,
  imageUrl:"https://steamuserimages-a.akamaihd.net/ugc/918053309022146367/DE86DED63A5A818CDD79FD6A31CE852FABD98A1B/" 
},
{
  id: 5,
  title: "Avengers:End Game",
  boxOffice: 2750760348,
  active: true,
  dateOfLaunch: new Date("2034-11-02"),
  genre: "Superhero",
  hasTeaser: true,
  imageUrl:"https://s2.dmcdn.net/v/P5eHF1S2sOONoP59X/x1080" 
}];
getMovies(): Observable<any> {
  return this.http.get(this.configUrl);
}

getMovieList(): Movie[] {
  console.log("in getMovieList() method");
  console.log(this.movies);
   // for (let movie of this.movies) {
    //   if (movie.isActive && movie.dateOfLaunch <= new Date()) {
    //     this.activeMovieList.push(movie);
    //   }
    // }
    // console.log(this.activeMovieList);
  this.activeMovieList = this.movies.filter(
    (movie: Movie) => movie.active && movie.dateOfLaunch < new Date()
  );
  return this.activeMovieList;
  //return this.movies;
}

getMovie(id: number): Observable<any> {
  return Observable.create((observer: Observer<Movie>) =>{
    this.getMovies().subscribe((movies: Movie[]) => {
      const movie = movies.find(movie => movie.id == id);
      observer.next(movie);
    });
  });
}
}
