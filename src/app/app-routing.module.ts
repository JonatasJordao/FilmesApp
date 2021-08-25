import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'esquadrao-suicida',
    loadChildren: () => import('./filmes/esquadrao-suicida/esquadrao-suicida.module').then( m => m.EsquadraoSuicidaPageModule)
  },
  {
    path: 'viuva-negra',
    loadChildren: () => import('./filmes/viuva-negra/viuva-negra.module').then( m => m.ViuvaNegraPageModule)
  },
  {
    path: 'luca',
    loadChildren: () => import('./filmes/luca/luca.module').then( m => m.LucaPageModule)
  },
  {
    path: 'liga-justica',
    loadChildren: () => import('./filmes/liga-justica/liga-justica.module').then( m => m.LigaJusticaPageModule)
  },
  {
    path: 'kong',
    loadChildren: () => import('./filmes/kong/kong.module').then( m => m.KongPageModule)
  },
  {
    path: 'dados-filme',
    loadChildren: () => import('./dados-filme/dados-filme.module').then( m => m.DadosFilmePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
