import { Component } from '@angular/core';
import { AuthService } from '../services/authService';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  hidePassword: boolean = true;
  passwordModel: string = '';
  constructor(
    private authService: AuthService,
    public router: Router,
  ) { }


  logIn(email: any, password: any) {
    this.authService.SignIn(email.value, password.value);
  }
  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
