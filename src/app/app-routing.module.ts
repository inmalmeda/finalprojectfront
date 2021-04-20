import { NgModule } from '@angular/core';
import { PreloadingStrategy, RouterModule, Routes } from '@angular/router';
import { OnDemand } from './services/load/strategies/on-demand.strategy';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'/experts'
  },
  {
    path: 'experts',
    loadChildren: () => import('./modules/expert/expert.module').then(m => m.ExpertModule),
    data: {
      preload: true
    }
  },
  {
    path: 'tags',
    loadChildren: () => import('./modules/tag/tag.module').then(m => m.TagModule),
    data: {
      preload: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: OnDemand
    }

  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
