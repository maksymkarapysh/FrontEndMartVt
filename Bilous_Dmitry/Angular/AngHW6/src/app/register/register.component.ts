import { Component, OnInit} from '@angular/core';
import {User} from '../user'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

public errors:object = {
  email: 'Enter email in format Smth@mail.com',
  password: 'Password must contains letters, numbers and special sgns',
  name: 'use latin letters only'
}
;


  model: User = new User( "");

  submitted: boolean = false;

  onSubmit() {
      this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
