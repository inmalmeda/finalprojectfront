import { TestBed } from '@angular/core/testing';

import { ExpertUtilService } from './expert-util.service';

describe('ExpertUtilService', () => {
  let service: ExpertUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
