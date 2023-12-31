import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/authService';
import { Router } from "@angular/router";
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage  {
  constructor(
    private alertCtrl: AlertController,
    public authService: AuthService,
    private router: Router,
  ) {}


  async resendMail() {
    await new Promise((resolve) => setTimeout(resolve, 800));

    this.displayMessage("Note", "Forwarded verification email")

  }


  async displayMessage(header: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }

  goToLogin(){
    this.router.navigate(['']);
  }
}
