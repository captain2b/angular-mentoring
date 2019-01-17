import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appBorderColor]',
})
export class BorderColorDirective implements OnInit {
  @Input() creationDate: Date;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const currentDate = moment();
    const date = moment(this.creationDate);

    if (date.isBefore(currentDate) && date.isAfter(currentDate.subtract(14, 'days'))) {
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 10px rgba(10, 175, 2, 0.55)');

    } else if (date.isAfter(currentDate)) {
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 10px rgba(10, 175, 226, 0.55)');
    }
  }
}
