import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const Products = [
  { name: "product1", price: 100, cat: 'cat 1' },
  { name: "product2", price: 200, cat: 'cat 1' },
  { name: "product3", price: 300, cat: 'cat 2' },
  { name: "product4", price: 400, cat: 'cat 2' },
  { name: "product6", price: 600, cat: 'cat 3' },
  { name: "product7", price: 700, cat: 'cat 3' },
]
const cats = ["cat 1", "cat 2", "cat 3"]

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})


export class MyTableComponent implements OnInit {
  products = Products;
  cats = cats;
  name: string = "";
  price: number = null;
  cat: string = "";
  optionSelected = "All cat";
  
  
 
  @Input() rows;
  @Output()
    del: EventEmitter<number> = new EventEmitter();

    constructor() { 

    }
  
    ngOnInit() {
      this.products = this.products.slice(0, this.rows)
    }

    deleteProduct(i){
      this.products.splice(i, 1);
      this.del.emit(i);
    }
    
    addProduct(){
      if(this.price === null || this.name === ""){
        return;
      }
      this.products.push(
        {
          name: this.name,
          price: this.price,
          cat: this.cat
        }
      );
     
    }
    filterProducts(valOfCat){
      this.products = Products;
      this.products = this.products.filter(product => product.cat===valOfCat);
    }
    // filterCategory() {
    //   return [...Array.from(new Set(this.products.map( item => item.cat )))];
    // }

}