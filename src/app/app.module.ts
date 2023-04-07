import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DemoNgComponent} from "./demo-ng-template-ref.component";
import {DataTablesModule} from "angular-datatables";
import {DataTableBugComponent} from "./data-table-bug/data-table-bug.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoNgComponent,
    DataTableBugComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
