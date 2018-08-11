import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { List3Component } from './list3/list3.component';
import { StudentsService } from './students.service';

@NgModule({
  declarations: [
    AppComponent,
    List1Component,
    List2Component,
    List3Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
