import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourseItem } from '../../models/course-item.model';
import * as moment from 'moment';
import { UUID } from 'angular2-uuid';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../../reducers';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AddCourse, EditCourse } from '../../../actions/courses.actions';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.less'],
})
export class EditCoursePageComponent implements OnInit, OnDestroy {
  public id: string;
  private sub$: Subscription;
  groupControl: FormGroup;
  defaultForm = {
    nameControl: ['', Validators.maxLength(50)],
    descriptionControl: ['', Validators.maxLength(500)],
    dateControl: [[]],
    durationControl: [[]],
    authorsControl: [[]],
  };

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute,
              private store: Store<State>,
              private router: Router,
              private fb: FormBuilder,
              ) {
  }

  ngOnInit() {
    this.groupControl = this.fb.group(this.defaultForm);
    this.sub$ = this.route.params.subscribe((params) => {
      this.id = params.id;
      this.id && this.coursesService.getItemById(this.id).subscribe((res: ICourseItem) => {
        if (res) {
          this.groupControl.controls['nameControl'].setValue(res.name);
          this.groupControl.controls['descriptionControl'].setValue(res.description);
          this.groupControl.controls['durationControl'].setValue(res.length);
          this.groupControl.controls['dateControl'].setValue(moment(res.date).format('YYYY-MM-DD'));
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
    const form = {
      name: this.groupControl.value.nameControl,
      length: this.groupControl.value.durationControl,
      descrition: this.groupControl.value.descriptionControl,
    };
    console.log(this.groupControl);
    if (this.id) {
      this.store.dispatch(new EditCourse(
        this.id,
        {
          id: this.id,
          ...form,
        }));
    } else {
      this.store.dispatch(new AddCourse(UUID.UUID(), form.name, form.length, form.descrition));
    }
  }

  onCancel() {
    this.router.navigate(['./courses']);

  }
  validationTitle() {
    debugger
    return this.groupControl.controls['nameControl']
    && this.groupControl.controls['nameControl'].errors
    && this.groupControl.controls['nameControl'].touched
    && this.groupControl.controls['nameControl'].errors['maxlength'];
  }
}
