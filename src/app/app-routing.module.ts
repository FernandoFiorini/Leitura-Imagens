import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'leitura-imagem',
    loadChildren: () => import('./leitura-imagem/leitura-imagem/leitura-imagem.module').then( m => m.LeituraImagemPageModule)
  },
  {
    path: 'tabela-nutricional',
    loadChildren: () => import('./tabela-nutricional/tabela-nutricional.module').then( m => m.TabelaNutricionalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
