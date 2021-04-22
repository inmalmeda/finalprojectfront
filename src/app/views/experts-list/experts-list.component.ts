import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Expert } from 'src/app/models/expert/expert.model';
import { FiltersExpert } from 'src/app/models/expert/filters/filters-expert.model';
import { UtilStateService } from 'src/app/services/expert/state/util-state.service';
import { ExpertUtilService } from 'src/app/services/expert/util/expert-util.service';
import { StoreService } from 'src/app/services/states/store.service';
import ExpertsState from 'src/app/store/config/expertsState.interface';

@Component({
  selector: 'app-experts-list',
  templateUrl: './experts-list.component.html',
  styleUrls: ['./experts-list.component.scss']
})
export class ExpertsListComponent implements OnInit , DoCheck{

  expertList: Expert[] = []
  filterExperts: FiltersExpert = new FiltersExpert('', '','','',0, 0)
  displayedColumns: string[] = ['name', 'state', 'tags','score'];
  dataSource: any

  @Output() manipulateEventPaginator: EventEmitter<PageEvent> = new EventEmitter<PageEvent>()

  constructor(private storeService: StoreService, private storeUtilsExperts: UtilStateService,
    private expertUtilService: ExpertUtilService) { }

  ngDoCheck(): void {
    this.dataSource = this.expertList;
  }

  ngOnInit(): void {
    this.expertUtilService.loadStates()

    this.storeService.getState('expertsState').subscribe((state: ExpertsState) => {
      this.expertList = state.experts
      this.filterExperts.name = state.filterName
      this.filterExperts.state = state.filterState
      this.filterExperts.tag = state.filterTag
      this.filterExperts.score = state.filterScore
    })
  }

  getPaginatorData(event: PageEvent) :void{
    this.manipulateEventPaginator.emit(event)
  }

  applyFilter(event: Event) {
    this.storeUtilsExperts.changeFilterName((event.target as HTMLInputElement).value)
    this.expertUtilService.getAllExperts()
  }
}
