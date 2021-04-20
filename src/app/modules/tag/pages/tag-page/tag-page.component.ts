import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { FiltersTag } from 'src/app/models/tag/filters/filters-tag.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { StoreService } from 'src/app/services/states/store.service';
import { UtilsService } from 'src/app/services/states/utils.service';
import { TagService } from 'src/app/services/tag/tag.service';
import PaginationState from 'src/app/store/config/paginationState.interface';


@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss']
})
export class TagPageComponent implements OnInit  {

  listSubscription: Subscription = new Subscription()
  tags: Tag[] = []
  totalTags: number = 0
  messageResponse: string = ''
  responseOK = false
  filterTags: FiltersTag = new FiltersTag('', 0, 0)

  pageSizeOptions: number[] = [5, 10, 20];

  lowValue: number = 0;
  limit: number = 5;

  constructor(private tagService: TagService, private storeService: StoreService,
            private storeUtils: UtilsService) { }

  ngOnInit(): void {

    this.storeService.getState('paginationState').subscribe((state: PaginationState) => {
      this.filterTags.page = state.pages
      this.filterTags.limit = state.limit
      this.totalTags = state.total
    })

    this.listSubscription = this.getAllTags()
  }

  public getPaginatorData(event: PageEvent) :void{
    this.lowValue = event.pageIndex * event.pageSize;
    this.limit = this.lowValue + event.pageSize;
    console.log(this.lowValue)
    console.log(this.limit)
    this.storeUtils.changePagination(this.lowValue, this.limit)
    this.getAllTags()
  }

  private getAllTags() : Subscription {
    return this.tagService.getAllTags(this.filterTags).subscribe(data => {
      this.tags = data.tags
      this.storeUtils.changeTotalResult(data.totalCount)
      this.messageResponse = data.response.response == 'OK' ? '' : data.response.message
      this.responseOK = this.messageResponse == '' ? true : false
    })
  }



}
