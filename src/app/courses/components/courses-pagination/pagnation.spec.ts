import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesPaginationComponent } from './courses-pagination.component';
import { SharedModule } from '../../../shared/shared.module';

describe('CoursesPeginationComponent', () => {
  let component: CoursesPaginationComponent;
  let fixture: ComponentFixture<CoursesPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesPaginationComponent],
      imports: [SharedModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(component, 'loadCourses');
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should contain load more button', () => {
    expect(fixture.nativeElement.querySelector('button').innerText).toEqual('Load More');
  });
  it('should call loadCourses when clicking a button', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.loadCourses).toHaveBeenCalled();
    });
  });
});
