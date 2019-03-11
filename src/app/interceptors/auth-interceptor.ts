import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private token;
  constructor(private store: Store<State>) {
    store.select(state => state.auth).subscribe((res) =>  { console.log(res); this.token = res.user && res.user.token; });

  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.token) {
      const request = req.clone({
        headers: req.headers.set('Authorization', this.token),
      });
      return next.handle(request);
    }
    return next.handle(req);

  }
}
