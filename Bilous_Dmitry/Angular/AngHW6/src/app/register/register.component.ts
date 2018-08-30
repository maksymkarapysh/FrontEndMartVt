import { Component, OnInit} from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

public errors:object = {
  firstName: 'This field is required',
  email: 'Enter email in format Smth@mail.com',
  password: {
    pattern: 'Password must contains latin letters, numbers and uppercase letters',
    minLength:'8 signs min'
  },

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
