import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  show = false;
  private subscription$: Subscription;
  constructor(
    private loaderService: LoaderService,
  ) { }
  ngOnInit() {
    this.subscription$ = this.loaderService.loaderState
      .subscribe((state: any) => {
        this.show = state.show;
      });
  }
  ngOnDestroy() {
    if (this.subscription$) { this.subscription$.unsubscribe(); }
  }
}
