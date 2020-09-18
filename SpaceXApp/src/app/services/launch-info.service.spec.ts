import { TestBed } from '@angular/core/testing';

import { LaunchInfoService } from './launch-info.service';

describe('LaunchInfoService', () => {
  let service: LaunchInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
