import { TestBed } from '@angular/core/testing';

import { SevenSegService } from './seven-seg.service';

describe('SevenSegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SevenSegService = TestBed.get(SevenSegService);
    expect(service).toBeTruthy();
  });
});
