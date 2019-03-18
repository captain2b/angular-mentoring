import { Action } from '@ngrx/store';

export enum CoursesActionTypes {
  LoadCourses = '[Courses] Load Coursess',
  LoadCoursesError = '[Courses] Load Coursess Error',
  LoadCoursesSuccess = '[Courses] Load Coursess Success',
  RemoveCourse = '[Courses] Remove Course',
  RemoveCourseError = '[Courses] Remove Course Error',
  RemoveCourseSuccess = '[Courses] Remove Course Success',
  AddCourse = '[Courses] Add Course',
  AddCourseError = '[Courses] Add Course Error',
  AddCourseSuccess = '[Courses] Add Course Success',
  EditCourse = '[Courses] Edit Course',
  EditCourseError = '[Courses] Edit Course Error',
  EditCourseSuccess = '[Courses] Edit Course Success',
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
export class AddCourse implements Action {
  readonly type = CoursesActionTypes.AddCourse;
  constructor(public id, public  name, public length, public description, public authors) {}

}
export class AddCourseError implements Action {
  readonly type = CoursesActionTypes.AddCourseError;
  constructor(public  error: any) {}
}
export class AddCourseSuccess implements Action {
  readonly type = CoursesActionTypes.AddCourseSuccess;
  constructor() {}
}
export class EditCourse implements Action {
  readonly type = CoursesActionTypes.EditCourse;
  constructor(public id, public  updatedCourse) {}

}
export class EditCourseError implements Action {
  readonly type = CoursesActionTypes.EditCourseError;
  constructor(public  error: any) {}
}
export class EditCourseSuccess implements Action {
  readonly type = CoursesActionTypes.EditCourseSuccess;
  constructor() {}
}

export type CoursesActions = LoadCourses | LoadCoursesError | LoadCoursesSuccess | RemoveCourse | RemoveCourseSuccess
  | RemoveCourseError | AddCourseSuccess | AddCourse | AddCourseError | EditCourseSuccess | EditCourse | EditCourseError;
