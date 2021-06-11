import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user/user.model';

import { HttpClient } from '@angular/common/http'
import { NewUser } from 'src/app/models/user/newUser/new-user.Model';

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

    //return this.http.post('http://localhost:8080/auth', body)

    return this.http.post('https://expertproject.herokuapp.com/auth/login', body)
  }

  register(user: NewUser): Observable<any> {
    let body = {
      username: user.name,
      email: user.email,
      password: user.password
    }

    //return this.http.post('http://localhost:8080/api/register', body)

    return this.http.post('https://expertproject.herokuapp.com/auth/register', body)
  }


  //Setter and Getter of isLoggedIn
  get loggedIn() {
    return this.isLoggedIn
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value
  }
}
