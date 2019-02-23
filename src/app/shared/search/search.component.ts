import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
})
export class SearchComponent implements OnInit {
  searchText: string;
  searchSubject$ = new Subject<string>();
  @Output() someEvent: any = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
    this.searchSubject$
      .pipe(debounceTime(200))
      .subscribe((search) => {
        if (search.length >= 3) {
          this.someEvent.next(search);
        }
        if (search.length === 0) {
          this.someEvent.next('');
        }
      },
      );
  }

  onSearch(): void {
    this.searchSubject$.next(this.searchText);
  }
}
