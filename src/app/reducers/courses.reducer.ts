import { Action } from '@ngrx/store';
import { CoursesActions, CoursesActionTypes } from '../actions/courses.actions';
import { ICourseItem } from '../courses/models/course-item.model';

export interface CoursesState {
  courses: ICourseItem[];
}

export const initialState: CoursesState = {
  courses: [],
};

export function coursesReducer(state = initialState, action: CoursesActions): CoursesState {
  switch (action.type) {
    case CoursesActionTypes.LoadCoursesSuccess:
      return {
        ...state,
        courses: action.courses,
      };
    default:
      return state;
  }
}
