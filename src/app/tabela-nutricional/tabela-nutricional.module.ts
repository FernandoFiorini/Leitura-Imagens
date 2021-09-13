import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabelaNutricionalPageRoutingModule } from './tabela-nutricional-routing.module';

import { TabelaNutricionalPage } from './tabela-nutricional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabelaNutricionalPageRoutingModule
  ],
  declarations: [TabelaNutricionalPage]
})
export class TabelaNutricionalPageModule {}
