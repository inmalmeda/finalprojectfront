import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertDetailPageComponent } from './pages/expert-detail-page/expert-detail-page.component';
import { ExpertPageComponent } from './pages/expert-page/expert-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExpertPageComponent
  },
  {
    path: 'experts/:id',
    component: ExpertDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertRoutingModule { }
