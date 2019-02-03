import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesItemComponent } from '../courses-item/courses-item.component';
import { SharedModule } from '../../../shared/shared.module';
import { CoursesPageComponent } from './courses-page.component';
import {CoursesPaginationComponent } from '../courses-pagination/courses-pagination.component';

describe('AuthorizationComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesItemComponent, CoursesPageComponent, CoursesPaginationComponent],
      imports: [
        SharedModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should have correct number of elements', () => {
    const item = fixture.nativeElement.querySelectorAll('app-courses-item');
    expect(item.length).toBe(5);
  });

});
