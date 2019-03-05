import { Action } from '@ngrx/store';

export enum CoursesActionTypes {
  LoadCourses = '[Courses] Load Coursess',
  LoadCoursesError = '[Courses] Load Coursess Error',
  LoadCoursesSuccess = '[Courses] Load Coursess Success',
  RemoveCourse = '[Courses] Remove Course',
  RemoveCourseError = '[Courses] Remove Course Error',
  RemoveCourseSuccess = '[Courses] Remove Course Success',
}

export class LoadCourses implements Action {
  readonly type = CoursesActionTypes.LoadCourses;
  constructor(public  start, public count, public searchText) {}

}
export class LoadCoursesError implements Action {
  readonly type = CoursesActionTypes.LoadCoursesError;
  constructor(public  error: any) {}
}
export class LoadCoursesSuccess implements Action {
  readonly type = CoursesActionTypes.LoadCoursesSuccess;
  constructor(public  courses: any) {}
}
export class RemoveCourse implements Action {
  readonly type = CoursesActionTypes.RemoveCourse;
  constructor(public id, public  start, public count, public searchText) {}

}
export class RemoveCourseError implements Action {
  readonly type = CoursesActionTypes.RemoveCourseError;
  constructor(public  error: any) {}
}
export class RemoveCourseSuccess implements Action {
  readonly type = CoursesActionTypes.RemoveCourseSuccess;
  constructor() {}
}

export type CoursesActions = LoadCourses | LoadCoursesError | LoadCoursesSuccess
  | RemoveCourse | RemoveCourseSuccess | RemoveCourseError;
