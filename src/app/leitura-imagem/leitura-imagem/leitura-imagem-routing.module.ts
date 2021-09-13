import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeituraImagemPage } from './leitura-imagem.page';

const routes: Routes = [
  {
    path: '',
    component: LeituraImagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeituraImagemPageRoutingModule {}
