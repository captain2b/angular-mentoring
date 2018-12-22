import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should equal "test"', () => {
    component.text = 'test';
    fixture.detectChanges();
    const buttonElement: HTMLElement = fixture.nativeElement;
    expect(buttonElement.querySelector('button').innerText).toEqual('test');
  });
});
