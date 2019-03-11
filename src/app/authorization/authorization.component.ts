import { Component } from '@angular/core';
import { State } from '../reducers';
import { Store } from '@ngrx/store';
import { Login } from '../actions/login.actions';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less'],
})
export class AuthorizationComponent {
  email: string;
  password: string;

  constructor(
    private store: Store<State>,
  ) {
  }
  onClickLogin() {
    this.store.dispatch(new Login(this.email, this.password));
  }

}
