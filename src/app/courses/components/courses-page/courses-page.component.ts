import { Component, OnChanges, OnInit } from '@angular/core';
import { ICourseItem } from '../../models/course-item.model';
import { SearchPipe } from '../../../pipes/search.pipe';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.less'],
})
export class CoursesPageComponent implements OnInit, OnChanges{
  courses: ICourseItem[] = [
    {
      id: 1,
      title: 'Video Course 1',
      creationDate: new Date('2018-01-01'),
      duration: 110,
      topRated: true,
      description: 'dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt,' +
        ' ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis' +
        ' suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
    },
    {
      id: 2,
      title: 'Video Course 2',
      creationDate: new Date('2020-01-12'),
      duration: 20,
      description: 'dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt,' +
        ' ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis' +
        ' suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
    },
    {
      id: 3,
      title: 'Video Course 1',
      creationDate: new Date('2018-01-01'),
      duration: 10,
      description: 'dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt,' +
        ' ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis' +
        ' suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
    },
    {
      id: 4,
      title: 'Video Course 2',
      creationDate: new Date(Date.now()),
      duration: 20,
      description: 'dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt,' +
        ' ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis' +
        ' suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
    },
    {
      id: 5,
      title: 'Video Course 1',
      creationDate: new Date('2018-01-01'),
      duration: 10,
      description: 'dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt,' +
        ' ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis' +
        ' suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
    },
  ];
  filteredCourses = [];
  searchText;

  constructor(
    private filterCourses: SearchPipe,
    ) {
  }

  ngOnInit() {
    this.filteredCourses = this.courses.slice();

  }
  ngOnChanges() {
    console.log(this.searchText);
  }
  onSearch(searchText: string): void {
    this.filteredCourses = this.filterCourses.transform(
    this.courses,
    searchText,
  );
  }

  deleteCourse(id: number): void {
    console.log(id);
  }
}
