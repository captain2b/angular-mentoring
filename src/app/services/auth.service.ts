import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) {}
  login(login, password) {
    if (login && password) {
      return this.http.post(
        'http://localhost:3004/auth/login',
        JSON.stringify({ login, password }));
    }
  }
  logout() {
    localStorage.removeItem('token');
    console.log('logout');
  }
  getUserInfo() {
    return this.http.post('http://localhost:3004/auth/userinfo', {});
  }
  public isAuthenticated() {
    return localStorage.getItem('token');
  }
}
