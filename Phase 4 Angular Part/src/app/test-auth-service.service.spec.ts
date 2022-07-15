import { TestBed } from '@angular/core/testing';

import { TestAuthServiceService } from './test-auth-service.service';

describe('TestAuthServiceService', () => {
  let service: TestAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
