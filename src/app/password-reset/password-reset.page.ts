import { Component } from '@angular/core';
import { AuthService } from '../services/authService';
@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage  {

  constructor(
    public authService: AuthService
  ) { }


  changePassword(email: any) {

    this.authService.PasswordRecover(email.value)

  }
}
