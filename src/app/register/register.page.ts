import { Component } from '@angular/core';
import { AuthService } from '../services/authService';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  toggleChecked: boolean = false;
  showPassword = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  signUp(email: any, password: any, name: any, lastName: any) {
    if (!email.value || !password.value || !name.value || !lastName.value) {
      this.displayError('Error', 'All fields are required.');
      return;
    }
    const passwordRegex = /^(?=.*[A-Z]).+$/;
    if (!passwordRegex.test(password.value)) {
      this.displayError(
        'Error',
        'The password must contain at least one capital letter.'
      );
      return;
    }
    this.authService
      .RegisterUser(email.value, password.value, name.value, lastName.value)
      .then((res) => {
        this.authService.SendVerificationMail();
        this.router.navigate(['verify-email']);
      })
      .catch((error) => {
        this.displayError(
          'Error',
          'Verify that your email and password are correct.'
        );
      });
  }

  async displayError(header: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
