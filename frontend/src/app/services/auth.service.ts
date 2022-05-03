import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url = 'http://app-eldorado.herokuapp.com';
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    ) { }
  singin(user: any) {
    return this.http.post(`${this.url}/api/user/login`, user)
  }
  isAuth(): boolean{
    const token = localStorage.getItem('token');
    //if (this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')) {
    if ( !localStorage.getItem('token')) {
        return false;
    }
    return true;
  }

  register_user(user: any) {
    return this.http.post(`${this.url}/api/user/cadastro`, user)
  }

}
