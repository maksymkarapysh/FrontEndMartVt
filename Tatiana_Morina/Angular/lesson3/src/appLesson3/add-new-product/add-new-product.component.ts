import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})

export class AddNewProductComponent {

  addStatus = false;

  productId = 11;
  productName = '';
  productPrice = 100;
  @Output () onAddProduct = new EventEmitter<{id: number, name: string, price: number}>();

  addNewProduct() {
    this.onAddProduct.emit({
      id: this.productId,
      name: this.productName,
      price: this.productPrice
    });

    this.addStatus = true;
    this.productId = 11;    
    this.productName = '';
    this.productPrice = 100;


  }
}
