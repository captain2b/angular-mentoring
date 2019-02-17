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
  public name: string;
  public description: string;
  public date: any;
  public length: number;
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
      this.coursesService.getItemById(this.id).subscribe((res: ICourseItem) => {
        console.log(res)
        this.currentCourse = res;
        if (this.currentCourse) {
          this.name = this.currentCourse.name;
          this.description = this.currentCourse.description;
          this.date = moment(this.currentCourse.date).format('YYYY-MM-DD');
          this.length = this.currentCourse.length;
        }
      });
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
          name: this.name,
          length: this.length,
          description: this.description});
    } else {
      this.coursesService.createCourse('fakeId',
                                       this.name,
                                       this.length,
                                       this.description,
      );
    }
    this.router.navigate(['./courses']);
  }
  onCancel() {
    this.router.navigate(['./courses']);
  }
}
