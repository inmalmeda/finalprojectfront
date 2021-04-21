import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FiltersTag } from 'src/app/models/tag/filters/filters-tag.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { StoreService } from 'src/app/services/states/store.service';
import { UtilStateService } from 'src/app/services/tag/state/util-state.service';
import { TagUtilService } from 'src/app/services/tag/util/tag-util.service';
import TagsState from 'src/app/store/config/tagsState.interface';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit, DoCheck {

  tagList: Tag[] = []
  filterTags: FiltersTag = new FiltersTag('', 0, 0)
  displayedColumns: string[] = ['name', 'creator', 'created_at'];
  dataSource: any
  mouseOver = false
  mouseLeave = true
  buttonDelete = false


  @Output() manipulateEventPaginator: EventEmitter<PageEvent> = new EventEmitter<PageEvent>()

  constructor(private storeService: StoreService, private storeUtilsTags: UtilStateService,
              private tagUtilService: TagUtilService) { }

  ngDoCheck(): void {
    this.dataSource = this.tagList;
  }

  ngOnInit(): void {

    this.tagUtilService.loadStates()

    this.storeService.getState('tagsState').subscribe((state: TagsState) => {
      this.tagList = state.tags
      this.filterTags.name = state.filterName
    })
  }

  getPaginatorData(event: PageEvent) :void{
    this.manipulateEventPaginator.emit(event)
  }

  applyFilter(event: Event) {
    this.storeUtilsTags.changeFilterName((event.target as HTMLInputElement).value)
    this.tagUtilService.getAllTags()
  }

  showButton(event: Event) {
    this.mouseOver = true
    this.mouseLeave = !this.mouseOver
    this.buttonDelete = true
    console.log(event)
  }

  hideButton(event: Event) {
    this.mouseOver = false
    this.mouseLeave = !this.mouseOver
    this.buttonDelete = false
  }

  deleteTag(event: Event) {
    console.log(event)

  }
}
