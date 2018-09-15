import { Component, OnInit } from '@angular/core';

const Products: any[] = [
  { id: 1, name: 'product 1', price: 100, category: 3},
  { id: 2, name: 'product 2', price: 200, category: 2},
  { id: 3, name: 'product 3', price: 300, category: 3},
  { id: 4, name: 'product 4', price: 400, category: 3},
  { id: 5, name: 'product 5', price: 500, category: 1},
  { id: 6, name: 'product 6', price: 600, category: 2},
  { id: 7, name: 'product 7', price: 700, category: 3},
  { id: 8, name: 'product 8', price: 800, category: 2},
  { id: 9, name: 'product 9', price: 900, category: 3},
  { id: 10, name: 'product 10', price: 1000, category: 1}
]; 

const categories: number[] = [1, 2, 3];

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.css']
})

export class Lesson3Component implements OnInit {

  title = 'lesson3';
  products = Products;
  categories = categories;
  currentCategory = null;

  selectedCategory(category){
    console.log(category);
        
    this.products = Products;
    this.products = this.products.filter( prod => prod.category == category);
    
  }

  deleteRow(rowIndex) {
    this.products.splice(rowIndex,1);

    console.log("Удалена строка с индексом " + rowIndex);
    console.log(this.products.splice(rowIndex,1));
  }

  updateProductList(product: {id: number, name: string, price: number, category: number}) {
    this.products.push(product);
    console.log(product);
  }

  ngOnInit() {
  }

}
