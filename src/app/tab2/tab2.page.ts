import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertController: AlertController) {}

  ionViewDidEnter() {
   this.mostrarAlerta();
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Esta sección tarda un poco en cargar, esto depende de la velocidad de internet de cada usuario. Por favor, sea paciente.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
