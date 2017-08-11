import { TestBed, inject } from '@angular/core/testing';

import { SharedFilteringService } from './shared-filtering.service';

describe('SharedFilteringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedFilteringService]
    });
  });

  it('should be created', inject([SharedFilteringService], (service: SharedFilteringService) => {
    expect(service).toBeTruthy();
  }));
});
