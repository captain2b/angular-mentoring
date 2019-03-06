import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { State } from '../../reducers';
import { Store } from '@ngrx/store';
import { GetUser, LogOff } from '../../actions/login.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  public userLogin = '';
  public userInfo: any;
  loading;
  public isAuth;
  public sub$: any;

  constructor(
    private router: Router,
    private auth: AuthService,
    private store: Store<State>,
  ) {
    store.select(state => state.auth).subscribe((res) => {
      this.loading = res.loading;
      this.isAuth = res.user.isAuthentificated;
      this.userInfo = res.user.info;
    });
  }

  ngOnInit() {
    this.sub$ = this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        if (this.isAuth) {
          this.store.dispatch(new GetUser());
          if (this.userInfo.name) {
            this.userLogin = `${this.userInfo.name.first} ${this.userInfo.name.last}`;
          }
        }
      }
    });
  }

  onLogOf() {
    this.store.dispatch(new LogOff());
    this.router.navigate(['./auth']);
  }
}
