import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnPauseComponent } from './user-on-pause.component';

describe('UserOnPauseComponent', () => {
  let component: UserOnPauseComponent;
  let fixture: ComponentFixture<UserOnPauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnPauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnPauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
