import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import {ActivatedRoute, Router} from "@angular/router";

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
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }
  ngOnInit() {
     this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        const course = this.coursesService.getItemById(id);
        this.title = course.title;
        this.description = course.description;
        //this.date = course.date;
        this.duration = course.duration;
        console.log(this.title)
      }
    });
  }
  onSave() {}
  onCancel() {}
}
