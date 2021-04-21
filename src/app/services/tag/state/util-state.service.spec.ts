import { TestBed } from '@angular/core/testing';

import { UtilStateService } from './util-state.service';

describe('UtilStateService', () => {
  let service: UtilStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
