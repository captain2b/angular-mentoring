import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './courses/components/courses-page/courses-page.component';
import { EditCoursePageComponent } from './courses/components/edit-course-page/edit-course-page.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { CanActivateGuard } from './guards/can-activate-guard';

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesPageComponent,
    canActivate: [CanActivateGuard],
    data: {
      breadcrumb: 'courses',
    },
  },
  {
    path: 'auth',
    component: AuthorizationComponent,
  },
  {
    path: 'courses/new',
    component: EditCoursePageComponent,
    canActivate: [CanActivateGuard],
    data: {
      breadcrumb: 'courses',
    },
  },
  {
    path: 'courses/:id',
    component: EditCoursePageComponent,
    canActivate: [CanActivateGuard],
    data: {
      breadcrumb: 'courses',
    },
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
