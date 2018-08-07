import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson2';

  private history: number[] = [];

  onDelete(id: number) {
    this.history.push(id);
    console.log(`Removed item: ${id}`);
  }
}
