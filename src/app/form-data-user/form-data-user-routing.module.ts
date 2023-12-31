import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormDataUserPage } from './form-data-user.page';

const routes: Routes = [
  {
    path: '',
    component: FormDataUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormDataUserPageRoutingModule {}
