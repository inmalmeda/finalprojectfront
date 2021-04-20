import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagRoutingModule } from './tag-routing.module';
import { TagPageComponent } from './pages/tag-page/tag-page.component';
import { TagDetailPageComponent } from './pages/tag-detail-page/tag-detail-page.component';
import { TagComponent } from './components/tag/tag.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TagListComponent } from './views/tag-list/tag-list.component';


@NgModule({
  declarations: [
    TagPageComponent,
    TagDetailPageComponent,
    TagComponent,
    TagListComponent
  ],
  imports: [
    CommonModule,
    TagRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class TagModule { }
