import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  userLogin: string;
  constructor(
    private router: Router,
    private auth: AuthService,
              ) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.getUserInfo().subscribe(res =>
      { this.userLogin = res.name.first + ' ' + res.name.last; },
      );
    }
  }
  onLogOf() {
    this.auth.logout();
    this.router.navigate(['./auth']);
  }
}
