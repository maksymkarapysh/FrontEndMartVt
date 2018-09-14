import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hw2',
  templateUrl: './hw2.component.html',
  styleUrls: ['./hw2.component.css']
})
export class Hw2Component implements OnInit {
  
  delLog(i){
    console.log("delete stroke with index - " + i);
  }

  constructor() { }

  ngOnInit() {

  }

}
