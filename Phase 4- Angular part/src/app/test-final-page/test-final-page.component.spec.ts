import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFinalPageComponent } from './test-final-page.component';

describe('TestFinalPageComponent', () => {
  let component: TestFinalPageComponent;
  let fixture: ComponentFixture<TestFinalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFinalPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFinalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
