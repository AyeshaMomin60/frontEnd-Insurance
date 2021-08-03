import { TestBed } from '@angular/core/testing';

import { PolicyAuthenticationService } from './policy-authentication.service';

describe('PolicyAuthenticationService', () => {
  let service: PolicyAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
