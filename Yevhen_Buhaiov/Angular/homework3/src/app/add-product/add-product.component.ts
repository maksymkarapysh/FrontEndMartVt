import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  {
  newId = 11;
  newName = '';
  newPrice = 100;
  
  @Output () AddProduct = new EventEmitter<{id: number, name: string, price: number}>();  
   
    
  //constructor() { } 
    addNewProduct() {
    this.AddProduct.emit({
      id: this.newId,
      name: this.newName,
      price: this.newPrice
    });
  

  this.newId = 11;    
  this.newName = '';
  this.newPrice = 100;
 }
}
