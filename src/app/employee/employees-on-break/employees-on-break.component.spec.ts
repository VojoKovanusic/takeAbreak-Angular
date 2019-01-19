import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesOnBreakComponent } from './employees-on-break.component';

describe('EmployeesOnBreakComponent', () => {
  let component: EmployeesOnBreakComponent;
  let fixture: ComponentFixture<EmployeesOnBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesOnBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesOnBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
