import { Component, OnInit } from '@angular/core';
import { Catalog } from './catalog';
import { CatalogTreeService } from './catalog-tree.service';

@Component({
  selector: 'app-catalog-tree',
  templateUrl: './catalog-tree.component.html',
  styleUrls: ['./catalog-tree.component.css'],
})
export class CatalogTreeComponent implements OnInit {
  catalogs: Catalog[] = [];

  constructor(private catalogTreeService: CatalogTreeService) {}

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' },
      ],
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [{ id: 7, name: 'subsub' }],
        },
      ],
    },
  ];
  options = {};

  ngOnInit(): void {
    this.catalogTreeService
      .getRoot()
      .subscribe((data) => (this.catalogs = data['root']));
  }
}
