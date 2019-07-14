import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAdministratorComponent } from './inicio-administrator.component';

describe('InicioAdministratorComponent', () => {
  let component: InicioAdministratorComponent;
  let fixture: ComponentFixture<InicioAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
