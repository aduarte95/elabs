import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabAdministratorComponent } from './lab-administrator.component';

describe('LabAdministratorComponent', () => {
  let component: LabAdministratorComponent;
  let fixture: ComponentFixture<LabAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
