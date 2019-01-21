import {Component, EventEmitter, OnChanges, OnInit, Output} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less'],
})
export class AuthorizationComponent {
  email: string;
  password: string;
  @Output() onLogin = new EventEmitter<string>();;

  constructor(
    public authService: AuthService,
  ) {
  }
  onClickLogin() {
    this.onLogin.next();
  }
}
