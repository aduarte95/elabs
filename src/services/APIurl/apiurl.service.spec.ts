import { TestBed } from '@angular/core/testing';

import { APIurlService } from './apiurl.service';

describe('APIurlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIurlService = TestBed.get(APIurlService);
    expect(service).toBeTruthy();
  });
});
