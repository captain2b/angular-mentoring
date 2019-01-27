import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.less'],
})
export class EditCoursePageComponent implements OnInit {
  public title: string;
  public description: string;
  public date: string;
  public duration: number;

  constructor(
    private coursesService: CoursesService,
  ) {
  }
  ngOnInit() {
  }
  onSave() {}
  onCancel() {}
}
