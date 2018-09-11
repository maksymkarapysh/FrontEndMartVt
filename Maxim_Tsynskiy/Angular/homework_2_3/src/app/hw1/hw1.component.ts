import { Component, OnInit } from '@angular/core';

const VALUES = [
  "Hello World", "Привет Мир", "Привіт Світ", "Hola Mundo", "Bonjour le monde", "Hallo Welt", 
  "Ciao mondo","Witaj świecie", "Hej världen", "Pozdravljen, svet", "Прывітанне Сусвет"]; 

@Component({
  selector: 'app-hw1',
  templateUrl: './hw1.component.html',
  styleUrls: ['./hw1.component.css']
})
export class hw1Component implements OnInit {
  VALUES = VALUES;
  title = "homework1";

  constructor() { }

  ngOnInit() {
  }

}
