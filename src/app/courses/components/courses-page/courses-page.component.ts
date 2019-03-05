import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICourseItem } from '../../models/course-item.model';
import { CoursesService } from '../../../services/courses.service';
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import {State} from "../../../reducers/index";
import {LoadCourses} from "../../../actions/courses.actions";

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.less'],
})
export class CoursesPageComponent implements OnInit {
  courses: ICourseItem[] = [];
  coursesCount = 10;
  searchText = '';
  canLoad = true;

  constructor(private coursesService: CoursesService,
              private store: Store<State>,
              private router: Router) {
    store.select(state => state.courses).subscribe((res: ICourseItem[]) => {
      console.log(res)
      this.courses = res.courses;
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadCourses('0', this.coursesCount.toString(), ''));
    // this.coursesService.getList('0', this.coursesCount.toString()).subscribe((res: ICourseItem[]) => {
    //   this.courses = res;
    //   if (res.length < 10) {
    //     this.canLoad = false;
    //   }
    // });
  }

  onSearch(searchText: string): void {
    this.searchText = searchText;
    this.coursesService
      .getList('0', '10', this.searchText)
      .subscribe(
        (res: ICourseItem[]) => {
          this.courses = res;
          this.coursesCount = 10;
          if (res.length < 10) {
            this.canLoad = false;
          }
        },
        err => console.log(err.error),
      );
  }

  editCourse(id: number): void {
    this.router.navigate([`courses/${id}`]);
  }

  deleteCourse(id: string): void {
    const conf = window.confirm('Do you really want to delete this course?');
    if (conf) {
      this.coursesService.removeCourse(id).subscribe(
        () => {
          this.coursesService
            .getList('0', this.coursesCount.toString(), this.searchText)
            .subscribe(
              (res: ICourseItem[]) => {
                this.courses = res;
              },
              err => console.log(err.error),
            );
        },
        err => console.log(err),
      );
    }
  }

  addCourse() {
    this.router.navigate(['courses/new']);
  }

  loadMore() {
    if (this.canLoad) {
      this.coursesService
        .getList(
          this.coursesCount.toString(),
          '10',
          this.searchText,
        )
        .subscribe(
          (res: ICourseItem[]) => {
            this.courses = [...this.courses, ...res];
            this.coursesCount += 10;
            if (res.length < 10) {
              this.canLoad = false;
            }
          },
          err => console.log(err.error),
        );
    }
  }
}
