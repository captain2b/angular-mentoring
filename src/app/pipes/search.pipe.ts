import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipe implements PipeTransform {
  transform(courses, query) {
    if (query) {
      return courses.filter(course => course.name.toLowerCase().search(query.toLowerCase()) !== -1);
    }
    return courses;
  }
}
