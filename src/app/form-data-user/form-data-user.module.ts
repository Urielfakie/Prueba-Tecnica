import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormDataUserPageRoutingModule } from './form-data-user-routing.module';

import { FormDataUserPage } from './form-data-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormDataUserPageRoutingModule
  ],
  declarations: [FormDataUserPage]
})
export class FormDataUserPageModule {}
