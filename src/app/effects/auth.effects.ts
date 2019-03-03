import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { GetUserFailure, GetUserSuccess, LoginActions, LoginActionTypes, LoginFailure, LoginSuccess } from '../actions/login.actions';
import { AuthService } from '../services/auth.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  @Effect()
  logIn$: Observable<any> = this.actions$.pipe(
    ofType(LoginActionTypes.Login),
    mergeMap(action =>
      this.authService.login(action['login'], action['psw']).pipe(
        map((res: { token: string }) => {
          this.router.navigate(['courses']);
          return new LoginSuccess(res.token);
        }),
        catchError(err => of(new LoginFailure(err))),
      ),
    ),
  );
  @Effect()
  getUser: Observable<any> = this.actions$.pipe(
    ofType(LoginActionTypes.GetUser),
    mergeMap(action =>
      this.authService.getUserInfo().pipe(
        map((res) => {
          return new GetUserSuccess(res);
        }),
        catchError(err => of(new GetUserFailure(err))),
      ),
    ),
  );

  constructor(private actions$: Actions<LoginActions>,
              private authService: AuthService,
              private router: Router,
  ) {
  }

}
