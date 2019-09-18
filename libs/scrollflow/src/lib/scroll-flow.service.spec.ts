import { TestBed } from '@angular/core/testing';

import { ScrollFlowService } from './scroll-flow.service';

describe('ScrollFlowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollFlowService = TestBed.get(ScrollFlowService);
    expect(service).toBeTruthy();
  });
});
