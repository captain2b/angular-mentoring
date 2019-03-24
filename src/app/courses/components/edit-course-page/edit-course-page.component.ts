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
import {AuthorsModel} from "../../models/authors.model";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.less'],
})
export class EditCoursePageComponent implements OnInit, OnDestroy {
  public id: string;
  private sub$: Subscription;
  public maxTitle = 50;
  public maxDescription = 500;
  public authors: AuthorsModel[];
  groupControl: FormGroup;
  defaultForm = {
    nameControl: ['', Validators.maxLength(this.maxTitle)],
    descriptionControl: ['', Validators.maxLength(this.maxDescription)],
    dateControl: [''],
    durationControl: ['', Validators.required],
    authorsControl: [null],
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
    this.coursesService.getAuthors().subscribe(
      (res) => {
        this.authors = res;
      },
      err => {
        console.log(err);
      },
    );
    this.sub$ = this.route.params.subscribe((params) => {
      this.id = params.id;
      this.id && this.coursesService.getItemById(this.id).subscribe((res: ICourseItem) => {
        if (res) {
          this.groupControl.controls['nameControl'].setValue(res.name);
          this.groupControl.controls['descriptionControl'].setValue(res.description);
          this.groupControl.controls['durationControl'].setValue(res.length);
          this.groupControl.controls['authorsControl'].setValue(res.authors);
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
      description: this.groupControl.value.descriptionControl,
      date: this.groupControl.value.dateControl,
      authors: this.groupControl.value.authorsControl,
    };
    if (this.id) {
      this.store.dispatch(new EditCourse(
        this.id,
        {
          id: this.id,
          ...form,
        }));
    } else {
      this.store.dispatch(new AddCourse(UUID.UUID(), form.name, form.length, form.description, form.authors));
    }
  }

  onCancel() {
    this.router.navigate(['./courses']);

  }
  validationTitle() {
    return this.groupControl.controls['nameControl']
    && this.groupControl.controls['nameControl'].errors
    && this.groupControl.controls['nameControl'].touched
    && this.groupControl.controls['nameControl'].errors['maxlength'];
  }
  validationDescription() {
    return this.groupControl.controls['descriptionControl']
    && this.groupControl.controls['descriptionControl'].errors
    && this.groupControl.controls['descriptionControl'].touched
    && this.groupControl.controls['descriptionControl'].errors['maxlength'];
  }
}
