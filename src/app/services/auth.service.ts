import { Injectable } from '@angular/core';
import { ICourseItem } from '../courses/models/course-item.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login() {
    localStorage.setItem('token', 'fakeToken');
    localStorage.setItem('userInfo', JSON.stringify({ login: 'admin', role: 'admin', password: 'psd' }));
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    console.log('logout');
  }
  getUserInfo() {
    return JSON.parse(localStorage.getItem('userInfo')).login;
  }
  isAuthenticated() {
    return false//localStorage.getItem('userInfo') && localStorage.getItem('token');
  }
}
