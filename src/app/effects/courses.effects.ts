import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { GetUserFailure, GetUserSuccess, LoginActions, LoginActionTypes, LoginFailure, LoginSuccess } from '../actions/login.actions';
import { AuthService } from '../services/auth.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  AddCourse,
  AddCourseError,
  AddCourseSuccess,
  CoursesActionTypes, EditCourse, EditCourseError, EditCourseSuccess,
  LoadCourses,
  LoadCoursesError,
  LoadCoursesSuccess, RemoveCourse,
  RemoveCourseError,
  RemoveCourseSuccess,
} from '../actions/courses.actions';
import { CoursesService } from '../services/courses.service';

@Injectable()
export class CoursesEffects {

  @Effect()
  loadCourses$: Observable<any> = this.actions$.pipe(
    ofType(CoursesActionTypes.LoadCourses),
    mergeMap((action: LoadCourses) =>
      this.coursesService.getList(action.start, action.count, action.searchText)),
    map((res) => {
      return new LoadCoursesSuccess(res);
    }),
    catchError(err => of(new LoadCoursesError(err))),
  );
  @Effect()
  removeCourse$: Observable<any> = this.actions$.pipe(
    ofType(CoursesActionTypes.RemoveCourse),
    mergeMap((action: RemoveCourse) =>
      this.coursesService.removeCourse(action.id)),
    map((res) => {
      return new RemoveCourseSuccess();
    }),
    catchError(err => of(new RemoveCourseError(err))),
  );
  @Effect()
  addCourse$: Observable<any> = this.actions$.pipe(
    ofType(CoursesActionTypes.AddCourse),
    mergeMap((action: AddCourse) =>
      this.coursesService.createCourse(action.id, action.name, action.authors, action.length, action.description)),
    map((res) => {
      this.router.navigate(['./courses']);
      return new AddCourseSuccess();
    }),
    catchError(err => of(new AddCourseError(err))),
  );
  @Effect()
  editCourse$: Observable<any> = this.actions$.pipe(
    ofType(CoursesActionTypes.EditCourse),
    mergeMap((action: EditCourse) =>
      this.coursesService.updateCourse(action.id, action.updatedCourse)),
    map((res) => {
      this.router.navigate(['./courses']);
      return new EditCourseSuccess();
    }),
    catchError(err => of(new EditCourseError(err))),
  );

  constructor(private actions$: Actions<LoginActions>,
              private coursesService: CoursesService,
              private router: Router,
  ) {
  }

}
