import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router"; // модуль для маршрутизации
import { FormsModule }   from '@angular/forms';

import { AppComponent } from "./app.component";
import { Lesson1Component } from "./lesson1/lesson1.component";
import { Lesson2Component } from "./lesson2/lesson2.component";
import { Lesson3Component } from "./lesson3/lesson3.component";
import { Lesson4Component } from "./lesson4/lesson4.component";
import { Lesson5Component } from "./lesson5/lesson5.component";
import { Lesson6Component } from "./lesson6/lesson6.component";
import { Lesson7Component } from "./lesson7/lesson7.component";
import { AddProductComponent } from './lesson3/add-product/add-product.component';
import { CategoryFilterPipe } from './lesson3/category-filter.pipe';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([ 
            { path: "lesson1", component: Lesson1Component },
            { path: "lesson2", component: Lesson2Component },
            { path: "lesson3", component: Lesson3Component },
            { path: "lesson4", component: Lesson4Component },
            { path: "lesson5", component: Lesson5Component },
            { path: "lesson6", component: Lesson6Component },
            { path: "lesson7", component: Lesson7Component },           
            { path: "", redirectTo: "lesson1", pathMatch: "full"}
        ])
    ],
    declarations: [
        AppComponent, 
        Lesson1Component, 
        Lesson2Component, 
        Lesson3Component, 
        Lesson4Component, 
        Lesson5Component, 
        Lesson6Component, 
        Lesson7Component,
        AddProductComponent,
        CategoryFilterPipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
