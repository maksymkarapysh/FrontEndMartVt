// // import { EventEmitter, Input, Component, Output } from '@angular/core';
// // import { isNgTemplate } from '../../../node_modules/@angular/compiler';

// @Component({
//   selector: 'app-my-table',
//   templateUrl: './app-my-table.component.html',
//   styleUrls: ['./app-my-table.component.css']
// })
// export class AppMyTableComponent {

//   private _rows: number;
//   private products: Array<object>;
//   @Output() onDelete = new EventEmitter<number>();

//   constructor() {
//     this._rows = 10;
//     this.products = [{ id: 1, name : 'product 1', price : 100 },
//                      { id: 2, name : 'product 2', price : 200 },
//                      { id: 3, name : 'product 3', price : 300 },
//                      { id: 4, name : 'product 4', price : 400 },
//                      { id: 5, name : 'product 5', price : 500 },
//                      { id: 6, name : 'product 6', price : 600 },
//                      { id: 7, name : 'product 7', price : 700 },
//                      { id: 8, name : 'product 8', price : 800 },
//                      { id: 9, name : 'product 9', price : 900 },
//                      { id: 10, name : 'product 10', price : 1000 }];
//   }

//   @Input()
//   set rows(rows: string) {
//     const temp: number = parseInt(rows, 10);
//     this._rows = temp;
//   }

//   filterProducts() {
//     return this.products.slice(0, this._rows);
//   }

//   'delete'(itemDel) {
//   delete(itemDel) {
//     this.products = this.products.filter( item => item !== itemDel  );
//     this.onDelete.emit(itemDel.id);
//   }

// }
