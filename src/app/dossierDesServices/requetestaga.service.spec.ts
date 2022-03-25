import { TestBed } from '@angular/core/testing';

import { RequetestagaService } from './requetestaga.service';

describe('RequetestagaService', () => {
  let service: RequetestagaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequetestagaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
