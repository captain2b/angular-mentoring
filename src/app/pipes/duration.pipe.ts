import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    if (hours === 0) {
      return `${minutes}min`;
    }
    return `${hours}h ${minutes}min`;
  }
}
