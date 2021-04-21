import { TestBed } from '@angular/core/testing';

import { TagUtilService } from './tag-util.service';

describe('TagUtilService', () => {
  let service: TagUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
