import { Injectable } from '@angular/core';
import { FiltersTag } from 'src/app/models/tag/filters/filters-tag.model';
import { Tag } from 'src/app/models/tag/tag.model';
import PaginationState from 'src/app/store/config/paginationState.interface';
import TagsState from 'src/app/store/config/tagsState.interface';
import { StoreService } from '../../states/store.service';
import { UtilsService } from '../../states/utils.service';
import { UtilStateService } from '../state/util-state.service';
import { TagService } from '../tag.service';

@Injectable({
  providedIn: 'root'
})
export class TagUtilService {

  filterTags: FiltersTag = new FiltersTag('', 0, 0)
  totalTags: number = 0
  tags: Tag[] = []

  constructor(private storeService: StoreService, private tagService: TagService,
        private storeUtils: UtilsService, private storeUtilsTags: UtilStateService) { }


  loadStates() {
    this.loadStatePagination()
    this.loadStateTag()
  }

  loadStatePagination(){
    this.storeService.getState('paginationState').subscribe((state: PaginationState) => {
      this.filterTags.page = state.pages
      this.filterTags.limit = state.limit
      this.totalTags = state.total
    })
  }

  loadStateTag(){
    this.storeService.getState('tagsState').subscribe((state: TagsState) => {
        this.tags = state.tags
        this.filterTags.name = state.filterName
    })
  }

  getAllTags() {
   this.tagService.getAllTags(this.filterTags).subscribe(data => {
      this.storeUtilsTags.changeListTags(data.tags)
      this.storeUtils.changeTotalResult(data.totalCount)
    })
  }
}
