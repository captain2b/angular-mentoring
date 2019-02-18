import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import {ICourseItem} from '../../courses/models/course-item.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public name : string = '';
  public sub$: any;
  constructor(
    private coursesService: CoursesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.sub$ = this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        const path = value.url.split('/');
        const id = path[2];
        if (id && path[1] === 'courses') {
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
    this.sub$.unsubscribe();
  }
}
