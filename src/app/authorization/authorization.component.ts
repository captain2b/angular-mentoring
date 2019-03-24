import {Component, OnInit} from '@angular/core';
import { State } from '../reducers';
import { Store } from '@ngrx/store';
import { Login } from '../actions/login.actions';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less'],
})
export class AuthorizationComponent implements OnInit{
  public loginControl: FormGroup;

  constructor(
    private store: Store<State>,
  ) {
  }
  public ngOnInit() {
    this.loginControl = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  onClickLogin() {
    this.store.dispatch(new Login(this.loginControl.value.email,  this.loginControl.value.password));
  }

  validation() {
    return this.loginControl.controls['email']
      && this.loginControl.controls['email'].errors
      && this.loginControl.controls['email'].touched
      || this.loginControl.controls['password']
      && this.loginControl.controls['password'].errors
      && this.loginControl.controls['password'].touched
      ;
  }
}
