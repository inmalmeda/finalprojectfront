import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ExpertDetailPageComponent } from './pages/expert/expert-detail-page/expert-detail-page.component';
import { ExpertNewPageComponent } from './pages/expert/expert-new-page/expert-new-page.component';
import { ExpertPageComponent } from './pages/expert/expert-page/expert-page.component';
import { TagDetailPageComponent } from './pages/tag/tag-detail-page/tag-detail-page.component';
import { TagNewPageComponent } from './pages/tag/tag-new-page/tag-new-page.component';
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
    path: 'experts/new/expert',
    component: ExpertNewPageComponent
  },
  {
    path: 'tags',
    component: TagPageComponent
  },
  {
    path: 'tags/:id',
    component: TagDetailPageComponent
  },
  {
    path: 'tags/new/tag',
    component: TagNewPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
