import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOnPauseTodayComponent } from './users-on-pause-today.component';

describe('UsersOnPauseTodayComponent', () => {
  let component: UsersOnPauseTodayComponent;
  let fixture: ComponentFixture<UsersOnPauseTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersOnPauseTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersOnPauseTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
