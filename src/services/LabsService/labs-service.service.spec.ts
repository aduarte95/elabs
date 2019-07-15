import { TestBed } from '@angular/core/testing';

import { LabsServiceService } from './labs-service.service';

describe('LabsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LabsServiceService = TestBed.get(LabsServiceService);
    expect(service).toBeTruthy();
  });
});
