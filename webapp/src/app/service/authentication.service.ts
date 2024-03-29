import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authenticationApiUrl = environment.baseUrl + 'authenticate';
  private token: string;
  constructor(private httpClient: HttpClient) { }
  authenticate(user: string, password: string): Observable<any> {
    let credentials = btoa(user + ":" + password);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials);
    console.log(headers);
    return this.httpClient.get(this.authenticationApiUrl, { headers });

  }
  public setToken(token: string) {
    this.token = token;
  }
  public getToken() {
    return this.token;
  }
}
