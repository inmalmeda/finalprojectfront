import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user/user.model';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = false

  constructor(private http: HttpClient) { }

  /**
   * Login in the app with HTTP Request
   * @param user User that´s login in
   * @return Observable<any>
   */
  login(user: User): Observable<any> {
    let body = {
      email: user.email,
      password: user.password
    }

    return this.http.post('https://finalprojectinma.herokuapp.com/api/user', body)
  }


  //Setter and Getter of isLoggedIn
  get loggedIn() {
    return this.isLoggedIn
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value
  }
}
