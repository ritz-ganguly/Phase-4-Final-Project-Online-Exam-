import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStudentPasswordComponent } from './change-student-password.component';

describe('ChangeStudentPasswordComponent', () => {
  let component: ChangeStudentPasswordComponent;
  let fixture: ComponentFixture<ChangeStudentPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeStudentPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStudentPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
