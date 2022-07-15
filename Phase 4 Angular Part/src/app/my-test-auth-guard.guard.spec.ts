import { TestBed } from '@angular/core/testing';

import { MyTestAuthGuardGuard } from './my-test-auth-guard.guard';

describe('MyTestAuthGuardGuard', () => {
  let guard: MyTestAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyTestAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
