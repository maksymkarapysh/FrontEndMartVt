import { Component, EventEmitter, Output } from '@angular/core';
import { IProduct } from 'src/app/products.interface';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {

  item: IProduct = {id: null, name: null, price: null, category: null};

  @Output() newItem = new EventEmitter<IProduct>();

  saveItem() {
    this.newItem.emit({
      id: this.item.id,
      name : this.item.name,
      price : this.item.price,
      category: this.item.category
    });
  }
}
