import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
    public router: Router,
  ) {
  }
  onClickLogin() {
    this.authService.login('Morales', 'id').subscribe(
      (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['courses']);

      },
      (err) => {
        console.log(err.error);
      });
  }

}
