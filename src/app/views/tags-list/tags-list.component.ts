import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';
import { FiltersTag } from 'src/app/models/tag/filters/filters-tag.model';
import { Tag } from 'src/app/models/tag/tag.model';
import { StoreService } from 'src/app/services/states/store.service';
import { UtilStateService } from 'src/app/services/tag/state/util-state.service';
import { TagUtilService } from 'src/app/services/tag/manage/tag-util.service';
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
  mouseOver: number = -1
  buttonDelete = false

  @Output() manipulateEventPaginator: EventEmitter<PageEvent> = new EventEmitter<PageEvent>()

  constructor(private storeService: StoreService, private storeUtilsTags: UtilStateService,
              private tagUtilService: TagUtilService, public dialog: MatDialog, private router: Router) { }

  ngDoCheck(): void {
    this.dataSource = this.tagList;
  }

  ngOnInit(): void {

    this.tagUtilService.loadStates()

    this.storeService.getState('tagsState').subscribe((state: TagsState) => {
      this.tagList = state.tags
     // this.filterTags.name = state.filterName
    })
  }

  getPaginatorData(event: PageEvent) :void{
    this.manipulateEventPaginator.emit(event)
  }

  applyFilter(event: Event) {
    this.storeUtilsTags.changeFilterName((event.target as HTMLInputElement).value)
    this.tagUtilService.getAllTags()
  }

  showButton(event: number) {
    this.mouseOver = event
    this.buttonDelete = true
  }

  deleteTag(idTag: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '40%',
      data: this.tagList[idTag]
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.tagUtilService.getAllTags();
    });
  }
}
