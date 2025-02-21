import { TestBed } from '@angular/core/testing';

import { DgaurdeGuard } from './dgaurde.guard';

describe('DgaurdeGuard', () => {
  let guard: DgaurdeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DgaurdeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
