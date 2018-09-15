import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  addStatus = false;

  categories = [1, 2, 3];

  productId;
  productName = '';
  productPrice;
  productCategory;
  @Output () onAddProduct = new EventEmitter<{id: number, name: string, price: number, category: number}>();
  
  addNewProduct() {
    this.onAddProduct.emit({
      id: this.productId,
      name: this.productName,
      price: this.productPrice,
      category: this.productCategory
    });

    this.addStatus = true;
    this.productId;    
    this.productName = '';
    this.productPrice;
    this.productCategory;
  }
  
  ngOnInit() {
  }
}