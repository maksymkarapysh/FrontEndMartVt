import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppLesson3Component } from './appLesson3.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppLesson3Component, AddNewProductComponent],
    bootstrap: [AppLesson3Component]

})

export class AppLesson3Module { }