import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './courses/components/courses-page/courses-page.component';
import { EditCoursePageComponent } from './courses/components/edit-course-page/edit-course-page.component';
import { AuthorizationComponent } from './authorization/authorization.component';

const routes: Routes = [
  { path: 'courses', component: CoursesPageComponent },
  { path: 'auth', component: AuthorizationComponent },
  { path: 'courses/new', component: EditCoursePageComponent },
  { path: 'courses/:id', component: EditCoursePageComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' }, // todo: 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
