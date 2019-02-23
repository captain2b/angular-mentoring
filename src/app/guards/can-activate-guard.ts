import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  canActivate() {
    if (this.authService.isAuthenticated()) {
      return of(true);
    }
    this.router.navigate(['/auth']);
    return of(false);
  }
}
