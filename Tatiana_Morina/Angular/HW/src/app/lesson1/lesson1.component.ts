import { Component, OnInit } from '@angular/core';

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
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})

export class Lesson1Component implements OnInit {

  title = 'lesson1';
  values = values;

  ngOnInit() {
  }
}
