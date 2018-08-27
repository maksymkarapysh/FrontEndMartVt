import { Component, OnInit} from '@angular/core';
import {User} from '../user'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

public errors:object = {
  firstName: 'This field is required',
  lastName: '',
  email: 'Enter email in format Smth@mail.com',
  password: 'Password must contains latin letters, numbers and uppercase letters',
  name: 'use latin letters only'
}
;
  model: User = new User( "", "", "", "");
   constructor() { }

  ngOnInit() {
  }
  /*get diagnostic(){
    return JSON.stringify(this.model);
  }*/
}
