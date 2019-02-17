import { Component, OnChanges, OnInit } from '@angular/core';
import { ICourseItem } from '../../models/course-item.model';
import { SearchPipe } from '../../../pipes/search.pipe';
import { CoursesService } from '../../../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.less'],
})
export class CoursesPageComponent implements OnInit {
  courses: ICourseItem[] = [];
  filteredCourses = [];
  coursesCount = 10;
  searchText = '';

  constructor(
    private filterCourses: SearchPipe,
    private coursesService: CoursesService,
    private router: Router,
    ) {
  }

  ngOnInit() {
    this.coursesService.getList(0, this.coursesCount).subscribe((res: ICourseItem[]) => {
      this.courses = res;
      this.filteredCourses = this.courses.slice();
    });
  }
  onSearch(searchText: string): void {
    this.searchText = searchText;
  }
  editCourse(id: number): void {
    this.router.navigate([`courses/${id}`]);
  }
  deleteCourse(id: string): void {
    const conf = window.confirm('Do you really want to delete this course?');
    if (conf) {
      this.coursesService.removeCourse(id).subscribe(
        (res) => {
          console.log(res);
        },
      );
    }
  }
  addCourse() {
    this.router.navigate(['courses/new']);
  }
  loadMore() {
    this.coursesService
      .getList(
        0,
        this.coursesCount,
        this.searchText,
      )
      .subscribe(
        (res: ICourseItem[]) => {
          this.courses = res;
          this.coursesCount += 10;
        },
        err => console.log(err.error),
      );
  }
}
