import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../site/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  addUser(user: User): Observable<Object> {
    console.log("FROM USER SERVICE -> " + JSON.stringify(user))
    return this.httpClient.post(this.baseUrl + "users", user);
  }
}
