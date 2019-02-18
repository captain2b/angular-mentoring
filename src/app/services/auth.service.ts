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
    debugger
    return this.http.post(
      'http://localhost:3004/auth/login',
      { login, password });
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    console.log('logout');
  }
  getUserInfo(id) {
    return this.http.get(`http://localhost:3004/users?id=${id}`);
  }
  isAuthenticated() {
    return localStorage.getItem('token');
  }
}
