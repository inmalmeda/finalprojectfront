import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Expert } from 'src/app/models/expert/expert.model';
import { FiltersExpert } from 'src/app/models/expert/filters/filters-expert.model';
import { UtilStateService } from 'src/app/services/expert/state/util-state.service';
import { ExpertUtilService } from 'src/app/services/expert/manage/expert-util.service';
import { StoreService } from 'src/app/services/states/store.service';
import ExpertsState from 'src/app/store/config/expertsState.interface';
import { TypeStates } from 'src/app/models/type-states-enum';
import { UtilsService } from 'src/app/services/states/utils.service';

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

  states = [
    {value: TypeStates[TypeStates['Validado']], viewValue: 'Validado'},
    {value: TypeStates[TypeStates['Pendiente']], viewValue: 'Pendiente'},
    {value: TypeStates[TypeStates['Todos']], viewValue: 'Todos'}
  ];

  @Output() manipulateEventPaginator: EventEmitter<PageEvent> = new EventEmitter<PageEvent>()
  @Output() emitFilters: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor(private storeService: StoreService, private storeUtilsExperts: UtilStateService,
    private expertUtilService: ExpertUtilService, private storeUtils: UtilsService) { }

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

  /**
   * Emit the pagination
   * @param event
   */
  getPaginatorData(event: PageEvent) :void{
    this.manipulateEventPaginator.emit(event)
  }

  /**
   * Emit the change of name filter
   * @param event
   */
  applyFilter(event: Event) {
    this.storeUtilsExperts.changeFilterName((event.target as HTMLInputElement).value)
    this.emitFilters.emit(true);
  }

  /**
   * Emit the change of state filter
   * @param event
   */
  setState(event: string) {
    this.storeUtilsExperts.changeFilterState(event);
    this.emitFilters.emit(true);
  }

  /**
   * Emit the change of score filter
   * @param event
   */
  setScore(event: string) {
    this.storeUtilsExperts.changeFilterScore(event);
    this.emitFilters.emit(true);
  }
}
