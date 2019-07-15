import { TestBed } from '@angular/core/testing';

import { HeaderTalkerService } from './header-talker.service';

describe('HeaderTalkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderTalkerService = TestBed.get(HeaderTalkerService);
    expect(service).toBeTruthy();
  });
});
