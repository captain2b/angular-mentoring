import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { SharedModule } from '../../shared/shared.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, LogoComponent],
      imports: [SharedModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should contain logo', () => {
    expect(fixture.nativeElement.querySelector('app-logo')).toBeTruthy();
  });
  it('should contain log off button', () => {
    expect(fixture.nativeElement.querySelector('button').innerText).toEqual('Log off');
  });
});
