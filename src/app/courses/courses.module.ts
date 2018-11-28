import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesPaginationComponent } from './components/courses-pagination/courses-pagination.component';
import { CoursesItemComponent } from './components/courses-item/courses-item.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CoursesPaginationComponent, CoursesItemComponent, CoursesPageComponent],
  exports: [CoursesPageComponent],
})
export class CoursesModule { }
