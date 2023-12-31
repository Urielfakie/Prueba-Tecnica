import { Component } from '@angular/core';
import { ServerdbService } from '../services/serverdb';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-form-data-user',
  templateUrl: './form-data-user.page.html',
  styleUrls: ['./form-data-user.page.scss'],
})
export class FormDataUserPage  {
name: string = '';
lastName: string = '';
toggleChecked: boolean = false;
  constructor(
  private serverdbService: ServerdbService,
  private alertCtrl: AlertController
  ) { }




  GuardarCambiosDePerfil() {
    if (this.name.trim() === '' || this.lastName.trim() === '') {
      this.mostrarAlerta('Error', 'Please complete all fields.');
    } else {
      this.serverdbService.updateUserData(this.name, this.lastName);
    }
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}

