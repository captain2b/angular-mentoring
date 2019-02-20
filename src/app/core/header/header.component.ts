import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService,
              ) { }

  ngOnInit() {
  }
  onLogOn() {
    this.auth.logout();
    this.router.navigate(['./auth']);
  }
}
