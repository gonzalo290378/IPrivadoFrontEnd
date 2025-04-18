import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthService {

  private url: string = 'http://localhost:8001/login';
  private _token: string | undefined;
  private _handlerLoginEventEmitter = new EventEmitter();
  private _user: any = {
    isAuth: false,
    user: undefined,
  };

  constructor(private http: HttpClient) {}

  get user() {
    if (this._user.isAuth) {
      return this._user;
    } else if (sessionStorage.getItem('login') != null) {
      this._user = JSON.parse(sessionStorage.getItem('login') || '{}');
      return this._user;
    }
    return this._user;
  }

  set user(user: any) {
    this._user = user;
    sessionStorage.setItem('login', JSON.stringify(user));
  }

  set token(token: string) {
    this._token = token;
    sessionStorage.setItem('token', token);
  }

  get token() {
    if (this._token != undefined) {
      return this._token;
    } else if (sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token') || '';
      return this._token;
    }
    return this._token!;
  }

  get handlerLoginEventEmitter() {
    return this._handlerLoginEventEmitter;
  }

  loginUser({ email, password }: any): Observable<any> {
    return this.http.post<any>(this.url, { email, password });
  }

  getPayload(token: string) {
    if (token != null) {
      return JSON.parse(atob(token.split('.')[1]));
    }
    return null;
  }

  authenticated(){
    return this.user.isAuth;
  }

  logout(){
    this._token = undefined;
    this._user = {  isAuth: false, user: undefined };
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('token');
  }
}