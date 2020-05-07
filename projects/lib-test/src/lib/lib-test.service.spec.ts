import { TestBed } from '@angular/core/testing';

import { LibTestService } from './lib-test.service';

describe('LibTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibTestService = TestBed.get(LibTestService);
    expect(service).toBeTruthy();
  });
});
