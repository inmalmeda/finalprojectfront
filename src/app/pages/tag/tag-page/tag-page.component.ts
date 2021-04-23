import { Component, OnInit} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FiltersTag } from 'src/app/models/tag/filters/filters-tag.model';
import { StoreService } from 'src/app/services/states/store.service';
import { UtilsService } from 'src/app/services/states/utils.service';
import { TagUtilService } from 'src/app/services/tag/manage/tag-util.service';
import PaginationState from 'src/app/store/config/paginationState.interface';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss']
})
export class TagPageComponent implements OnInit {

  totalTags: number = 0
  filterTags: FiltersTag = new FiltersTag('', 0, 0)

  pageSizeOptions: number[] = [5,10, 15, 20, 50];

  lowValue: number = 0;
  limit: number = 5;

  constructor( private storeService: StoreService, private storeUtils: UtilsService, private tagUtilService: TagUtilService ) { }

  ngOnInit(): void {

    this.tagUtilService.loadStates()
    this.storeUtils.changePagination(this.lowValue, this.limit)

    this.storeService.getState('paginationState').subscribe((state: PaginationState) => {
     /*  this.filterTags.page = state.pages
      this.filterTags.limit = state.limit */
      this.totalTags = state.total
    })
    this.tagUtilService.getAllTags()
  }

  getPaginatorData(event: PageEvent): void{
    this.lowValue = event.pageIndex * event.pageSize;
    this.limit = this.lowValue + event.pageSize;
    this.storeUtils.changePagination(this.lowValue, this.limit)
    this.tagUtilService.getAllTags()
  }

}
