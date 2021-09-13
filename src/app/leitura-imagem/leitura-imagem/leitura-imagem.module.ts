import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeituraImagemPageRoutingModule } from './leitura-imagem-routing.module';

import { LeituraImagemPage } from './leitura-imagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeituraImagemPageRoutingModule
  ],
  declarations: [LeituraImagemPage]
})
export class LeituraImagemPageModule {}
