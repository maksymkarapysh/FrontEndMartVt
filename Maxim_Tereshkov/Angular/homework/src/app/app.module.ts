import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTableModule, MatGridListModule, MatToolbarModule, MatSortModule, MatPaginatorModule, MatButtonModule} from '@angular/material';
import { MatInputModule, MatAutocompleteModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MyTableComponent } from './my-table/my-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatGridListModule,
    MatToolbarModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
