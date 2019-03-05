import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { GetUserFailure, GetUserSuccess, LoginActions, LoginActionTypes, LoginFailure, LoginSuccess } from '../actions/login.actions';
import { AuthService } from '../services/auth.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  CoursesActionTypes,
  LoadCourses,
  LoadCoursesError,
  LoadCoursesSuccess,
  RemoveCourseError,
  RemoveCourseSuccess,
} from '../actions/courses.actions';
import { CoursesService } from '../services/courses.service';

@Injectable()
export class CoursesEffects {

  @Effect()
  loadCourses$: Observable<any> = this.actions$.pipe(
    ofType(CoursesActionTypes.LoadCourses),
    mergeMap(action =>
      this.coursesService.getList(action['start'], action['count'], action['searchText']).pipe(
        map((res) => {
          return new LoadCoursesSuccess(res);
        }),
        catchError(err => of(new LoadCoursesError(err))),
      ),
    ),
  );
  @Effect()
  removeCourse$: Observable<any> = this.actions$.pipe(
    ofType(CoursesActionTypes.RemoveCourse),
    mergeMap(action =>
      this.coursesService.removeCourse(action['id']).pipe(
          map((res) => {
            return new RemoveCourseSuccess();
          }),
          catchError(err => of(new RemoveCourseError(err))),
        ),
  ),
  );

  constructor(private actions$: Actions<LoginActions>,
              private coursesService: CoursesService,
              private router: Router,
  ) {
  }

}
