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
  searchText;

  constructor(
    private filterCourses: SearchPipe,
    private coursesService: CoursesService,
    private router: Router,
    ) {
  }

  ngOnInit() {
    this.coursesService.getList().subscribe(res => {
      this.courses = res;
      console.log(this.courses)

    });
    this.filteredCourses = this.courses.slice();
  }
  onSearch(searchText: string): void {
    this.filteredCourses = this.filterCourses.transform(
    this.courses,
    searchText,
  );
  }
  editCourse(id: number): void {
    this.router.navigate([`courses/${id}`]);
  }
  deleteCourse(id: string): void {
    const conf = window.confirm('Do you really want to delete this course?');
    if (conf) {
      this.filteredCourses = this.courses =  this.coursesService.removeCourse(id);
    }
  }
  addCourse() {
    this.router.navigate(['courses/new']);
  }
}
