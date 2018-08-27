import {TemplateRef, ViewChild} from '@angular/core';
import {Component} from '@angular/core';


const products = [
  { id: 1, name: 'product 1', price: 100 },
  { id: 2, name: 'product 2', price: 200 },
  { id: 3, name: 'product 3', price: 300 },
  { id: 4, name: 'product 4', price: 400 },
  { id: 5, name: 'product 5', price: 500 },
  { id: 6, name: 'product 6', price: 600 },
  { id: 7, name: 'product 7', price: 700 },
  { id: 8, name: 'product 8', price: 800 },
  { id: 9, name: 'product 9', price: 900 },
  { id: 10, name: 'product 10', price: 1000}
]; 

const categories = [
  "Category 1", 
  "Category 2", 
  "Category 3"
];

@Component({ 
  selector: 'my-table',
  templateUrl: './appLesson3.component.html',
  styleUrls: ['./appLesson3.component.css']
}) 

export class AppLesson3Component {
  title = 'lesson3';
  products = products;
  categories = categories;
      
  deleteRow(rowIndex) {
    this.products.splice(rowIndex,1);

    console.log("Удалена строка с индексом " + rowIndex);
  }

  updateProductList(product: {id: number, name: string, price: number}) {
    this.products.push(product);

  }
}

