import { Injectable } from '@angular/core';
import { RegisterUser } from '../models/RegisterUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '../models/Token';
import { Router, RouterLink } from '@angular/router';
import { Observable, Subject } from 'rxjs';

const Api_Url = 'https://churchyelpapi.azurewebsites.net'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userInfo: Token;
  isUserLoggedIn = new Subject<boolean>();

  constructor(private _http: HttpClient, private _router: Router) { }

  private setHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  register(regUserData: RegisterUser) {
    return this._http.post(`${Api_Url}/api/Account/Register`, regUserData);
  }

  login(loginInfo) {
    const str =
    `grant_type=password&username=${encodeURI(loginInfo.email)}&password=${encodeURI(loginInfo.password)}`;
    
    return this._http.post(`${Api_Url}/token`, str).subscribe((token: Token) => {localStorage.setItem('id_token', token.access_token);
    this.isLoggedIn.next(true);
    this.setCurrentUser();
    this._router.navigate(['/']);
    });
  }

  setCurrentUser() {
    this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: this.setHeader() })
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
    this._http.post(`${Api_Url}/api/Account/Logout`, {headers: this.setHeader() });
    this._router.navigate(['/login']);
  }

  currentUser(): Observable<Object> {
    if (!localStorage.getItem('id_token')) { return new Observable(observer => observer.next(false)); }

    const authHeader = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);

    return this._http.get(`${Api_Url}/api/Account/UserInfo`, { headers: authHeader });
  }
}
