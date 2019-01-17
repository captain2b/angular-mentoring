import { Injectable } from '@angular/core';
import { ICourseItem } from '../courses/models/course-item.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}
  private courses: ICourseItem[] = [
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

  getList(): ICourseItem[] {
    return this.courses;
  }
  getItemeById(id: string | number) {
    return this.courses.find(element => element.id === id);
  }
  createCourse(id: string | number, title: string, duration?: number, description?: string, topRated?: boolean) {
    this.courses.push(
      {
        id,
        title,
        duration,
        description,
        topRated : topRated || false,
        creationDate: new Date(Date.now()),
      },
    );
  }
  updateCourse(id: string | number, updatedCourse: ICourseItem) {
    const index = this.courses.findIndex(element => element.id === id);
    this.courses[index] = updatedCourse;
  }
  removeCourse(id: string | number) {
    this.courses = this.courses.filter(element => element.id !== id);
  }
}
