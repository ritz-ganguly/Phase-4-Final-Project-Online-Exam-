import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTestHistoryComponent } from './student-test-history.component';

describe('StudentTestHistoryComponent', () => {
  let component: StudentTestHistoryComponent;
  let fixture: ComponentFixture<StudentTestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTestHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentTestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
