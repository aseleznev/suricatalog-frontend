import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogTreeComponent } from './catalog-tree.component';

describe('CatalogTreeComponent', () => {
  let component: CatalogTreeComponent;
  let fixture: ComponentFixture<CatalogTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
