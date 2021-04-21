import { Expert } from "src/app/models/expert/expert.model"
import { Action } from "../actions/action"
import { ACTION_CHANGE_EXPERTSELECTED, ACTION_CHANGE_EXPERT_FILTERNAME, ACTION_CHANGE_EXPERT_FILTERSCORE, ACTION_CHANGE_EXPERT_FILTERSTATE, ACTION_CHANGE_EXPERT_FILTERTAG, ACTION_CHANGE_LISTEXPERTS } from "../actions/actions.types"
import ExpertsState from "../config/expertsState.interface"



const initialState: ExpertsState = {
  experts: [],
  expertSelected: new Expert(0,'',new Date(), new Date(),'','','',false,'','','','','','',0,'','','','','','','','','',[]),
  filterName: '',
  filterState: '',
  filterTag: '',
  filterScore: ''
}

export function expertsReducer(state = initialState, action: Action) {

  switch (action.type) {
    case ACTION_CHANGE_LISTEXPERTS:
      return {
        ...state,
        experts: action.payload
      }
    case ACTION_CHANGE_EXPERTSELECTED:
      return {
        ...state,
        expert: action.payload
      }
    case ACTION_CHANGE_EXPERT_FILTERNAME:
        return {
          ...state,
          filterName: action.payload
      }
    case ACTION_CHANGE_EXPERT_FILTERSTATE:
      return {
        ...state,
        filterState: action.payload
      }

    case ACTION_CHANGE_EXPERT_FILTERTAG:
      return {
        ...state,
        filterTag: action.payload
    }
    case ACTION_CHANGE_EXPERT_FILTERSCORE:
      return {
        ...state,
        filterScore: action.payload
      }
    default:
      return state
  }
}
