import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TagDetailPageComponent } from './pages/tag-detail-page/tag-detail-page.component';
import { TagPageComponent } from './pages/tag-page/tag-page.component';

const routes: Routes = [
  {
    path: '',
    component: TagPageComponent
  },
  {
    path: 'tags/:id',
    component: TagDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagRoutingModule { }
