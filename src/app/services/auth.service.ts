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
  getUserInfo() {
    return this.http.post('http://localhost:3004/auth/userinfo', {});
  }
}
