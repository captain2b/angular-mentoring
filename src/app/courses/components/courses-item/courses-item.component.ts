import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourseItem } from '../../models/course-item.model';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.less'],
})
export class CoursesItemComponent {
  @Input() courseItem: ICourseItem;
  @Output() delete = new EventEmitter<number | string>();

  onDelete() {
    this.delete.emit(this.courseItem.id);
  }
  getformattedDuration(): string {
    const h = Math.floor(this.courseItem.duration / 60);
    const m = this.courseItem.duration % 60;
    return h + 'h' + m + 'min';
  }
}
