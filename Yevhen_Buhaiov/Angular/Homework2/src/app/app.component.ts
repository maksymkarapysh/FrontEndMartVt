import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework2';
  consInf(Id) {
    console.log ("Deleted id:"+ Id );
  }

}
