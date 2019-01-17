import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPipe',
})
export class OrderByPipe implements PipeTransform {
  transform(courses) {
    if (courses) {
      return courses.sort(
      (a, b) => b.creationDate.getTime() - a.creationDate.getTime(),
    );
    }
  }
}
