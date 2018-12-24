import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
})
export class SearchComponent implements OnInit {
  searchText: string;
  @Output() someEvent: any = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onSearch(): void {
    this.someEvent.next(this.searchText);
  }

}
