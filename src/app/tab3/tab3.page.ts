import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  base: number = 0;
  altura: number = 0;
  constructor(private alertController: AlertController) {}

  calcularArea() {
    if (this.base && this.altura) {
      const area = (this.base * this.altura) / 2;
      this.mostrarAlerta(`The area of the triangle is: ${area}`);
    } else {
      this.mostrarAlerta('Please enter the base and height.');
    }
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Done!',
      message: mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
