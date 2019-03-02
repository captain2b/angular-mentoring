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

  getList(start = '0', count = '10', textFragment = '') {
    return this.http.get('http://localhost:3004/courses',
                         { params: { start, count, textFragment } });
  }
  getItemById(id: string) {
    return this.http.get(`http://localhost:3004/courses/${id}`);

  }
  createCourse(id: string, name: string, length?: number, description?: string, topRated?: boolean) {
    return this.http.post('http://localhost:3004/courses', {
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
