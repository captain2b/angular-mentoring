import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { NavigationEnd, Router } from '@angular/router';
import { ICourseItem } from '../../courses/models/course-item.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public name : string = '';
  public sub$: any;
  public showBreadcrumbs = false;
  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.sub$ = this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        const path = value.url.split('/');
        const id = path[2];
        if (id && path[1] === 'courses') {
          this.showBreadcrumbs = true;
          if (id === 'new') {
            this.name = id;
          } else {
            this.coursesService.getItemById(id).subscribe((res: ICourseItem) => this.name = res.name);
          }
        }
      }
    });
  }
  ngOnDestroy() {
    if (this.sub$) { this.sub$.unsubscribe(); }
  }
}
