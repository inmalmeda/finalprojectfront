import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertRoutingModule } from './expert-routing.module';
import { ExpertDetailPageComponent } from './pages/expert-detail-page/expert-detail-page.component';
import { ExpertListComponent } from './views/expert-list/expert-list.component';


@NgModule({
  declarations: [
    ExpertDetailPageComponent,
    ExpertListComponent
  ],
  imports: [
    CommonModule,
    ExpertRoutingModule
  ]
})
export class ExpertModule { }
