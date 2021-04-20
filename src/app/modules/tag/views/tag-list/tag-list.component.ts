import { Component, DoCheck, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Tag } from 'src/app/models/tag/tag.model';
import { UtilsService } from 'src/app/services/states/utils.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})

export class TagListComponent implements OnInit, DoCheck {

  @Input()
  tagList: Tag[] = []

  displayedColumns: string[] = ['name', 'creator', 'created_at'];
  dataSource: any

  @Output() manipulateEventPaginator: EventEmitter<PageEvent> = new EventEmitter<PageEvent>()

  constructor(  private storeUtils: UtilsService ) { }
  ngDoCheck(): void {
    this.dataSource = this.tagList;
  }
  ngOnInit(): void {

  }

  public getPaginatorData(event: PageEvent) :void{
    this.manipulateEventPaginator.emit(event)
  }

}
