import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICourseItem } from '../../models/course-item.model';
import { CoursesService } from '../../../services/courses.service';
import { Router } from '@angular/router';
import { Store } from "@ngrx/store";
import { State } from "../../../reducers/index";
import {LoadCourses, RemoveCourse} from '../../../actions/courses.actions';

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

  constructor(
              private store: Store<State>,
              private router: Router) {
    store.select(state => state.courses).subscribe((res) => {
      this.courses = res.courses;
      if (this.courses.length && this.courses.length < this.coursesCount) {
        this.canLoad = false;
      }
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadCourses('0', this.coursesCount.toString(), ''));
  }

  onSearch(searchText: string): void {
    this.searchText = searchText;
    this.store.dispatch(new LoadCourses('0',  this.coursesCount.toString(), this.searchText));
  }

  editCourse(id: number): void {
    this.router.navigate([`courses/${id}`]);
  }

  deleteCourse(id: string): void {
    const conf = window.confirm('Do you really want to delete this course?');
    if (conf) {
      this.store.dispatch(new RemoveCourse(id, '0', this.coursesCount.toString(), this.searchText));
      this.store.dispatch(new LoadCourses('0', this.coursesCount.toString(), this.searchText));
    }
  }

  addCourse() {
    this.router.navigate(['courses/new']);
  }

  loadMore() {
    this.coursesCount += 10;
    this.store.dispatch(new LoadCourses(
        '0',
        this.coursesCount.toString(),
        this.searchText));
  }
}
