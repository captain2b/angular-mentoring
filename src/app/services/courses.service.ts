import { Injectable } from '@angular/core';
import { ICourseItem } from '../courses/models/course-item.model';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(
    private http: HttpClient,
    private loaderService: LoaderService,
  ) {
  }

  getList(start = '0', count = '10', textFragment = '') {
    this.loaderService.show();
    return this.http.get('http://localhost:3004/courses',
                         { params: { start, count, textFragment } })
      .pipe(finalize(() => this.loaderService.hide()));
  }

  getItemById(id: string) {
    this.loaderService.show();
    return this.http.get(`http://localhost:3004/courses/${id}`)
      .pipe(finalize(() => this.loaderService.hide()));
  }

  createCourse(id: string, name: string, length?: number, description?: string, topRated?: boolean) {
    this.loaderService.show();
    return this.http.post('http://localhost:3004/courses', {
      id,
      name,
      length,
      description,
      isTopRated: topRated || false,
      date: new Date(Date.now()),
    },
    ).pipe(finalize(() => this.loaderService.hide()));
  }

  updateCourse(id: string, updatedCourse: ICourseItem) {
    this.loaderService.show();
    return this.http.put(`http://localhost:3004/courses/${id}`, updatedCourse)
      .pipe(finalize(() => this.loaderService.hide()));

  }

  removeCourse(id: string) {
    this.loaderService.show();
    return this.http.delete(`http://localhost:3004/courses/${id}`)
      .pipe(finalize(() => this.loaderService.hide()));
  }
}
