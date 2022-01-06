import { TestBed } from '@angular/core/testing';

import { DataPipeService } from './data-pipe.service';

describe('DataPipeService', () => {
  let service: DataPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
