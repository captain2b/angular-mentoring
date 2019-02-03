import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-mentoring';
  isLoggedIn = false;
  constructor(
    public authService: AuthService,
  ) {
  }
  onLogin() {
    this.authService.login();
    this.isLoggedIn = this.authService.isAuthenticated();
    console.log('logged in successfully');
  }
}
