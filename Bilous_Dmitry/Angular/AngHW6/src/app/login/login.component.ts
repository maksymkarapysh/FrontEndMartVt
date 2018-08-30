import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public errors:object = {
    name: 'this field is required',
    password: {
      minLength: 'Must be longer then 8 signs',
      pattern: 'Must contains latin letters, uppercase letters, digits'
    }
  }
  loginForm: FormGroup;
  
  ngOnInit(){
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.pattern('((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')])
    })
  }
  constructor() { }
}
