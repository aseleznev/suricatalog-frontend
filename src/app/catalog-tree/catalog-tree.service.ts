import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalog } from './catalog';

@Injectable({
  providedIn: 'root',
})
export class CatalogTreeService {
  catalog: Catalog;

  constructor(private http: HttpClient) {}

  getRoot() {
    return this.http.get('localhost:3000/catalog/root');
  }
}
