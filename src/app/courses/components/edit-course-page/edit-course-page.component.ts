import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourseItem } from '../../models/course-item.model';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.less'],
})
export class EditCoursePageComponent implements OnInit, OnDestroy {
  public id: string;
  public title: string;
  public description: string;
  public date: any;
  public duration: number;
  public currentCourse: ICourseItem;
  private sub$:any;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }
  ngOnInit() {
    this.sub$ = this.route.params.subscribe((params) => {
      this.id = params.id;
      this.currentCourse = this.coursesService.getItemById(this.id);
      if (this.currentCourse) {
        this.title = this.currentCourse.title;
        this.description = this.currentCourse.description;
        this.date = moment(this.currentCourse.creationDate).format('YYYY-MM-DD');
        this.duration = this.currentCourse.duration;
      }
    });
  }
  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
  onSave() {
    if (this.currentCourse) {
      this.coursesService.updateCourse(
        this.currentCourse.id,
        {
          ...this.currentCourse,
          title: this.title,
          duration: this.duration,
          description: this.description});
    } else {
      this.coursesService.createCourse('fakeId',
                                       this.title,
                                       this.duration,
                                       this.description,
      );
    }
    this.router.navigate(['./courses']);
  }
  onCancel() {
    this.router.navigate(['./courses']);
  }
}
