import { Injectable } from '@angular/core';
import { Expert } from 'src/app/models/expert/expert.model';
import { FiltersExpert } from 'src/app/models/expert/filters/filters-expert.model';
import ExpertsState from 'src/app/store/config/expertsState.interface';
import PaginationState from 'src/app/store/config/paginationState.interface';
import { StoreService } from '../../states/store.service';
import { UtilsService } from '../../states/utils.service';
import { ExpertService } from '../expert.service';
import { UtilStateService } from '../state/util-state.service';

@Injectable({
  providedIn: 'root'
})
export class ExpertUtilService {

  filterExperts: FiltersExpert = new FiltersExpert('','','','', 0, 0)
  totalExperts: number = 0
  experts: Expert[] = []

  constructor(private storeService: StoreService,
    private expertService: ExpertService, private storeUtils: UtilsService, private storeUtilsExperts: UtilStateService) { }


    loadStates() {
      this.loadStatePagination()
      this.loadStateExpert()
    }

  loadStatePagination(){
    this.storeService.getState('paginationState').subscribe((state: PaginationState) => {
      this.filterExperts.page = state.pages
      this.filterExperts.limit = state.limit
      this.totalExperts = state.total
    })
  }

  loadStateExpert(){
    this.storeService.getState('expertsState').subscribe((state: ExpertsState) => {
      this.experts = state.experts
      this.filterExperts.name = state.filterName
      this.filterExperts.state = state.filterState
      this.filterExperts.tag = state.filterTag
      this.filterExperts.score = state.filterScore
    })
  }

  getAllExperts() {
    this.expertService.getAllExperts(this.filterExperts).subscribe(data => {
       this.storeUtilsExperts.changeListExperts(data.experts)
       this.storeUtils.changeTotalResult(data.totalCount)
     })
   }
}
