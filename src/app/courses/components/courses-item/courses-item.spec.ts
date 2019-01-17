import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoursesItemComponent } from './courses-item.component';
import { SharedModule } from '../../../shared/shared.module';
import { DurationPipe } from '../../../pipes/duration.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { OrderByPipe } from '../../../pipes/orderBy.pipe';

@Component({
  template: `
    <app-courses-item
      [courseItem]="courseItem"
      (delete)="delete($event)"
    ></app-courses-item>
  `,
})
class TestHostComponent {
  public courseItem = {
    id: 1,
    title: 'Video Course 1',
    creationDate: new Date('01.01.2018'),
    duration: 130,
    description: 'dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt,' +
      ' ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis' +
      ' suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',
  };
  public id: number;
  public delete(id: number) {
    this.id = id;
  }
}

describe('CoursesItemComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let star;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesItemComponent, TestHostComponent, DurationPipe, OrderByPipe],
      imports: [
        SharedModule,
        FontAwesomeModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    star = faStar;
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should be created', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.description').textContent).toContain(
      'dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt,' +
      ' ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis' +
      ' suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur');
  });
  it('should delete course', () => {
    const expectedId = 1;
    const button = fixture.nativeElement.querySelector('.delete');
    button.click(null);
    expect(component.id).toEqual(expectedId);
  });
  it('should format time', () => {
    expect(fixture.nativeElement.querySelector('#duration').textContent).toEqual('2h 10min');
  });

});
