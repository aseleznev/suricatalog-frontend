import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TreeModule} from '@circlon/angular-tree-component';
import {CatalogTreeComponent} from './catalog-tree/catalog-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogTreeComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
