import { Component, OnChanges, OnInit } from '@angular/core';
import { ICourseItem } from '../../models/course-item.model';
import { SearchPipe } from '../../../pipes/search.pipe';
import { CoursesService } from '../../../services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.less'],
})
export class CoursesPageComponent implements OnInit, OnChanges{
  courses: ICourseItem[] = [];
  filteredCourses = [];
  searchText;

  constructor(
    private filterCourses: SearchPipe,
    private coursesService: CoursesService,
    ) {
  }

  ngOnInit() {
    this.courses = this.coursesService.getList();
    this.filteredCourses = this.courses.slice();
  }
  ngOnChanges() {
    this.courses = this.coursesService.getList();
    console.log(this.searchText);
  }
  onSearch(searchText: string): void {
    this.filteredCourses = this.filterCourses.transform(
    this.courses,
    searchText,
  );
  }

  deleteCourse(id: number): void {
    this.coursesService.updateCourse(id, {
      id: 10000,
      title: 'Video Course 2',
      creationDate: new Date(Date.now()),
      duration: 200000,
      description: 'dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt,' +
      ' ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis' +
      ' suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
    });
  }
}
