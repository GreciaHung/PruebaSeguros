import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { LoginManager } from 'src/app/shared/manager/login-manager.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password = "test";
  typeInput: Boolean = false;
  email = "admintest";
  loading = false;


  constructor(
    private LoginManager:LoginManager,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.LoginManager.isLogin() && this.router.navigate(['list-policy'])
    this.LoginManager.getLoading().subscribe(res=>{
      this.loading = res;
    });
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







