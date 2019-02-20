import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

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
    this.sub$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe((value) => {
        if (value.url) {
          const path = value.url.split('/');
          const id = path[2];
          if (id && path[1] === 'courses') {
            this.name = id === 'new' ? id : this.coursesService.getItemById(id).title;
          }
        }
      });
  }
  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
