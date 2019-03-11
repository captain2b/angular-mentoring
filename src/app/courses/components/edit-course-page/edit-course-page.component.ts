import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourseItem } from '../../models/course-item.model';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';
import { Subscription } from 'rxjs';
import {AddCourse, EditCourse, LoadCourses} from '../../../actions/courses.actions';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';

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
  private sub$: Subscription;

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute,
              private store: Store<State>,
              private router: Router) {
  }

  ngOnInit() {
    this.sub$ = this.route.params.subscribe((params) => {
      this.id = params.id;
      this.id && this.coursesService.getItemById(this.id).subscribe((res: ICourseItem) => {
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
      );
    });
  }
  ngOnDestroy() {
    if (this.sub$) { this.sub$.unsubscribe(); }
  }
  onSave() {
    if (this.currentCourse) {
      this.store.dispatch(new EditCourse(
        this.currentCourse.id,
        {
          ...this.currentCourse,
          name: this.name,
          length: this.length,
          description: this.description}));
    } else {
      this.store.dispatch(new AddCourse(UUID.UUID(),
                                        this.name,
                                        this.length,
                                        this.description,
      ));
    }
  }

  onCancel() {
    this.router.navigate(['./courses']);

  }
}
