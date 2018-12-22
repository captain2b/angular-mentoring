import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserEntityComponent } from './user-entity.component';

describe('UserEntityComponent', () => {
  let component: UserEntityComponent;
  let fixture: ComponentFixture<UserEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserEntityComponent],
      imports: [FormsModule],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(UserEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
