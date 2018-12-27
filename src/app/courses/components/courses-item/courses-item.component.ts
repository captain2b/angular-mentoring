import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourseItem } from '../../models/course-item.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses-item',
  templateUrl: './courses-item.component.html',
  styleUrls: ['./courses-item.component.less'],
})
export class CoursesItemComponent {
  @Input() courseItem: ICourseItem;
  @Input() appBorderColor;
  @Output() delete = new EventEmitter<number | string>();
  star = faStar;

  onDelete() {
    this.delete.emit(this.courseItem.id);
  }

}
