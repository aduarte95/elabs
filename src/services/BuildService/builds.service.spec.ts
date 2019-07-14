import { TestBed } from '@angular/core/testing';

import { BuildsService } from './builds.service';

describe('BuildsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildsService = TestBed.get(BuildsService);
    expect(service).toBeTruthy();
  });
});
