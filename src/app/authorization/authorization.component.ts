import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less'],
})
export class AuthorizationComponent {
  email: string;
  password: string;

  constructor(
    public authService: AuthService,
  ) {
  }
  onLogin() {
    this.authService.login();
    console.log('logged in successfully');
    console.log(this.email,this.password);
  }
}
