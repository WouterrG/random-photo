import { TestBed } from '@angular/core/testing';

import { PhotofetchService } from './photofetch.service';

describe('PhotofetchService', () => {
  let service: PhotofetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotofetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
