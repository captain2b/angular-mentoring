import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {

  private loaderSubject = new Subject<any>();
  loaderState = this.loaderSubject.asObservable();

  constructor() {
  }

  show() {
    this.loaderSubject.next(<any>{ show: true });
  }

  hide() {
    setTimeout(() => {
      this.loaderSubject.next(<any>{ show: false });
    },         100);

  }
}

function f() {
  const expression = null || 1 && 2 || 3;
  const arr = ['pain', 'gain', 'comments', 'worries'];
  return `no ${arr[Number(expression)]}`;
}
