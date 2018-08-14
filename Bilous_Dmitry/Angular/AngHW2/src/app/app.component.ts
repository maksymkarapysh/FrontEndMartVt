import { Component, OnInit } from '@angular/core';

interface Prod {
  id: number;
  name: string;
  price: number;
}
  const products: Prod[] = [
    { id: 1, name : 'product 1', price : 100 },
    { id: 2, name : 'product 2', price : 200 },
    { id: 3, name : 'product 3', price : 300 },
    { id: 4, name : 'product 4', price : 400 },
    { id: 5, name : 'product 5', price : 500 },
    { id: 6, name : 'product 6', price : 600 },
    { id: 7, name : 'product 7', price : 700 },
    { id: 8, name : 'product 8', price : 800 },
    { id: 9, name : 'product 9', price : 900 },
    { id: 10, name : 'product 10', price : 1000}];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

    
export class AppComponent implements OnInit {
  title = 'AngHW1';
  products =  products;
 
  
  ngOnInit(){
    var x = document.getElementsByTagName('option');
    for(let i=0; i<x.length; i++){
      x.addEventListener('blur', changeSize )
    }
    console.dir(x)
    let size:number;
    for ( let i = 0; i < x.length; i++){
      if(x[i].selected = true) size = x[i].value;
    }
    console.log('Выбранный размер = ' + size)
    if( size >= 3){
      products.length = size;
    }
    console.dir( products)
  }
  changeSize() {
    
  }
  delItem(i:number){    
     var res = this.products.splice(i,1)
     console.log('Deleted element`s id = ' + res[0].id)
  }

}
