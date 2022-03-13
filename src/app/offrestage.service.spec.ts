import { TestBed } from '@angular/core/testing';

import { OffrestageService } from './offrestage.service';

describe('OffrestageService', () => {
  let service: OffrestageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffrestageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
