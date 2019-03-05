import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { authReducer, AuthState } from './auth.reducer';
import {coursesReducer, CoursesState} from "./courses.reducer";

export interface State {
  auth: AuthState;
  courses: CoursesState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  courses: coursesReducer,

};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
