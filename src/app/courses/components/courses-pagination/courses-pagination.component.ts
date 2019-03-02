import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-courses-pagination',
  templateUrl: './courses-pagination.component.html',
  styleUrls: ['./courses-pagination.component.css'],
})
export class CoursesPaginationComponent implements OnInit {
  @Output() loadMore = new EventEmitter<number | string>();

  constructor() { }

  ngOnInit() {
  }

  loadCourses(): void {
    this.loadMore.emit();
  }
}
