import { TestBed } from '@angular/core/testing';

import { NotifacationServiceService } from './notifacation-service.service';

describe('NotifacationServiceService', () => {
  let service: NotifacationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifacationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
