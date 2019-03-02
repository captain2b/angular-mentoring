import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourseItem } from '../../models/course-item.model';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';
import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.less'],
})
export class EditCoursePageComponent implements OnInit, OnDestroy {
  public id: string;
  public name: string;
  public description: string;
  public date: any;
  public length: number;
  public currentCourse: ICourseItem;
  private sub$: Subscription [] = [];

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.sub$.push(this.route.params.subscribe((params) => {
      this.id = params.id;
      this.sub$.push(this.id && this.coursesService.getItemById(this.id).subscribe((res: ICourseItem) => {
        this.currentCourse = res;
        if (this.currentCourse) {
          this.name = this.currentCourse.name;
          this.description = this.currentCourse.description;
          this.date = moment(this.currentCourse.date).format('YYYY-MM-DD');
          this.length = this.currentCourse.length;
        }
      },
        (err) => {
          console.log(err.error);
          this.router.navigate(['./404']);
        },
      ));
    }));
  }
  ngOnDestroy() {
    this.sub$.forEach(s => s.unsubscribe());
  }
  onSave() {
    if (this.currentCourse) {
      this.sub$.push(this.coursesService.updateCourse(
        this.currentCourse.id,
        {
          ...this.currentCourse,
          name: this.name,
          length: this.length,
          description: this.description})
        .subscribe(
          () => {
            this.router.navigate(['./courses']);
          },
          err => console.log(err),
      ));
    } else {
      this.coursesService.createCourse(UUID.UUID(),
                                       this.name,
                                       this.length,
                                       this.description,
      ).subscribe(
        () => {
          this.router.navigate(['./courses']);
        },
        err => console.log(err),
        );
    }
  }

  onCancel() {
    this.router.navigate(['./courses']);
  }
}
