import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPaginationComponent } from './components/courses-pagination/courses-pagination.component';
import { CoursesItemComponent } from './components/courses-item/courses-item.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { SharedModule } from '../shared/shared.module';
import { BorderColorDirective } from '../directives/border-color.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DurationPipe } from '../pipes/duration.pipe';
import { OrderByPipe } from '../pipes/orderBy.pipe';
import { SearchPipe } from '../pipes/search.pipe';
import { EditCoursePageComponent } from './components/edit-course-page/edit-course-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CoursesPaginationComponent,
    CoursesItemComponent,
    CoursesPageComponent,
    EditCoursePageComponent,
    BorderColorDirective,
    DurationPipe,
    OrderByPipe,
    SearchPipe,
  ],
  providers: [
    SearchPipe,
  ],
  exports: [CoursesPageComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
})
export class CoursesModule { }
