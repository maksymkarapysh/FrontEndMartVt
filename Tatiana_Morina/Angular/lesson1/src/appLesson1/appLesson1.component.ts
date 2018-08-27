import { Component } from '@angular/core';

const values = [
  "Hello World", 
  "Привет Мир",
  "Привіт Світ", 
  "Hola Mundo", 
  "Bonjour le monde", 
  "Hallo Welt", 
  "Ciaomondo", 
  "Witaj świecie", 
  "Hej världen", 
  "Pozdravljen, svet", 
  "Прывітанне Сусвет"
];

@Component({
  selector: 'my-table',
  templateUrl: './appLesson1.component.html',
  styleUrls: ['./appLesson1.component.css']
})

export class AppLesson1Component {
  title = 'lesson1';
  values = values;
}
