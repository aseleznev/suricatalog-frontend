import { TestBed } from '@angular/core/testing';

import { CatalogTreeService } from './catalog-tree.service';

describe('CatalogTreeService', () => {
  let service: CatalogTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
