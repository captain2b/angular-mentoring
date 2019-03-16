import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';
import { State } from '../reducers';
import { Store } from '@ngrx/store';

@Injectable()
export class CanActivateGuard implements CanActivate {
  private isAuth;
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<State>,
  ) {
    store.select(state => state.auth).subscribe((res) =>  {
      this.isAuth = res.user.isAuthentificated;
    });
  }
  canActivate() {
    if (this.isAuth) {
      return of(true);
    }
    this.router.navigate(['/auth']);
    return of(false);
  }
}
