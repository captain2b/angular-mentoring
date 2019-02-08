import { Injectable } from '@angular/core';
import { ICourseItem } from '../courses/models/course-item.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(
    private http: HttpClient,
  ) {}
  private courses: ICourseItem[] = [ ];

  getList() {
    return this.http.get('http://localhost:3004/courses');
  }
  getItemById(id: string) {
    return this.courses.find(element => element.id === id);
  }
  createCourse(id: string, title: string, duration?: number, description?: string, topRated?: boolean) {
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
  updateCourse(id: string, updatedCourse: ICourseItem) {
    const index = this.courses.findIndex(element => element.id == id);
    this.courses[index] = updatedCourse;
  }
  removeCourse(id: string) {
    this.courses = this.courses.filter(element => element.id !== id);
    return this.courses;
  }
}
