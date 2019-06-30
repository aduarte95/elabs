import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCalendarComponent } from './pop-up-calendar.component';

describe('PopUpCalendarComponent', () => {
  let component: PopUpCalendarComponent;
  let fixture: ComponentFixture<PopUpCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
