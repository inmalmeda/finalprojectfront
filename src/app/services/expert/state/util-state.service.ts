import { Injectable } from '@angular/core';
import { Expert } from 'src/app/models/expert/expert.model';
import { ACTION_CHANGE_EXPERTSELECTED, ACTION_CHANGE_EXPERT_FILTERNAME, ACTION_CHANGE_EXPERT_FILTERSCORE, ACTION_CHANGE_EXPERT_FILTERSTATE, ACTION_CHANGE_EXPERT_FILTERTAG, ACTION_CHANGE_LISTEXPERTS } from 'src/app/store/actions/actions.types';
import { StoreService } from '../../states/store.service';

@Injectable({
  providedIn: 'root'
})
export class UtilStateService {

  constructor(private storeService: StoreService) { }

  changeListExperts(experts: Expert[]) {
    this.storeService.updateState({
      type: ACTION_CHANGE_LISTEXPERTS,
      payload: experts
    })
  }

  changeExpertSelected(expert: Expert) {
    this.storeService.updateState({
      type: ACTION_CHANGE_EXPERTSELECTED,
      payload: expert
    })
  }

  changeFilterName(name: string) {
    this.storeService.updateState({
      type: ACTION_CHANGE_EXPERT_FILTERNAME,
      payload: name
    })
  }

  changeFilterState(state: string) {
    this.storeService.updateState({
      type: ACTION_CHANGE_EXPERT_FILTERSTATE,
      payload: state
    })
  }

  changeFilterTag(tag: string) {
    this.storeService.updateState({
      type: ACTION_CHANGE_EXPERT_FILTERTAG,
      payload: tag
    })
  }

  changeFilterScore(score: string) {
    this.storeService.updateState({
      type: ACTION_CHANGE_EXPERT_FILTERSCORE,
      payload: score
    })
  }

}
