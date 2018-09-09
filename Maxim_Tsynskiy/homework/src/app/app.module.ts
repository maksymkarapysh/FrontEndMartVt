import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { hw1Component } from './hw1/hw1.component';
import { RouterModule } from "@angular/router";
import { Hw2Component } from './hw2/hw2.component';
import { TestingComponent } from './testing/testing.component';
import { MyTableComponent } from './hw2/my-table/my-table.component'

@NgModule({
  declarations: [
    AppComponent,
    Hw2Component,
    hw1Component,
    TestingComponent,
    MyTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'hw1', component: hw1Component },
      { path: 'hw2', component: Hw2Component },
      { path: 'testing', component: TestingComponent },
      // { path: '', pathMatch: 'full', redirectTo: 'my-table' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
