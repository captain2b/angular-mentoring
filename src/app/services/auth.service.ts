import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) {}
  login(login, psw) {
    debugger
    return this.http.post(
      'http://localhost:3004/auth/login',
      JSON.stringify({ login, password: psw }));
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    console.log('logout');
  }
  getUserInfo(id) {
    return this.http.get(`http://localhost:3004/users?id=${id}`);
  }
  isAuthenticated(): boolean {
    return !!(localStorage.getItem('userInfo') && localStorage.getItem('token'));
  }
}
