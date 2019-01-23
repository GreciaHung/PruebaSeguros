import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginManager } from 'src/app/shared/manager/login-manager.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password = '';
  typeInput: Boolean = false;
  email = ""


  constructor(private LoginManager:LoginManager) {
  }

  ngOnInit() {
  }

  getErrorMessage() {
    // return this.email.hasError('required') ? 'Introduzca un email' :
    //   this.email.hasError('email') ? 'Introduzca un email valido' :
    //     '';
  }

  Login(email, password) {
    this.LoginManager.Login(email, password);
  }

}







