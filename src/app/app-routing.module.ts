import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './courses/components/courses-page/courses-page.component';
import { EditCoursePageComponent } from './courses/components/edit-course-page/edit-course-page.component';

const routes: Routes = [
  { path: 'courses', component: CoursesPageComponent },
  { path: 'editCourse', component: EditCoursePageComponent },
  { path: '**', redirectTo: '/courses' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
