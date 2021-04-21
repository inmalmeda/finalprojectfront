import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ExpertDetailPageComponent } from './pages/expert/expert-detail-page/expert-detail-page.component';
import { ExpertPageComponent } from './pages/expert/expert-page/expert-page.component';
import { TagDetailPageComponent } from './pages/tag/tag-detail-page/tag-detail-page.component';
import { TagPageComponent } from './pages/tag/tag-page/tag-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'/experts'
  },
  {
    path: 'experts',
    component: ExpertPageComponent
  },
  {
    path: 'experts/:id',
    component: ExpertDetailPageComponent
  },
  {
    path: 'tags',
    component: TagPageComponent
  },
  {
    path: 'tags/:id',
    component: TagDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
