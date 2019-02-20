import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/auth']);
    return false;
  }
}
