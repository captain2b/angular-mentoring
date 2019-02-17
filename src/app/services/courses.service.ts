import { Injectable } from '@angular/core';
import { ICourseItem } from '../courses/models/course-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(
    private http: HttpClient,
  ) {}

  getList(pageNumber = 0, count = '10', textFragment = '') {
    return this.http.get(`http://localhost:3004/courses?start=${pageNumber}`,
                         { params: { count, textFragment } });
  }
  getItemById(id: string) {
    return this.http.get(`http://localhost:3004/courses/${id}`);

  }
  createCourse(id: string, title: string, duration?: number, description?: string, topRated?: boolean) {
    return this.http.post('http://localhost:3004/courses/new', {
      id,
      name,
      length,
      description,
      isTopRated : topRated || false,
      date: new Date(Date.now()),
    },
    );
  }
  updateCourse(id: string, updatedCourse: ICourseItem) {
    return this.http.put(`http://localhost:3004/courses/${id}`, updatedCourse);

  }
  removeCourse(id: string) {
    return this.http.delete(`http://localhost:3004/courses/${id}`);
  }
}
