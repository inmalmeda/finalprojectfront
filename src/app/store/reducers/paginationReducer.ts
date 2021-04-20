import { Action } from "../actions/action"
import { ACTION_CHANGE_LIMIT, ACTION_CHANGE_PAGES, ACTION_CHANGE_TOTALRESULT } from "../actions/actions.types"
import PaginationState from "../config/paginationState.interface"

const initialState: PaginationState = {
  pages: 0,
  limit: 5,
  total: 0
}

export function paginationReducer(state = initialState, action: Action) {

  switch (action.type) {
    case ACTION_CHANGE_PAGES:
      return {
        ...state,
        pages: action.payload
      }
    case ACTION_CHANGE_LIMIT:
      return {
        ...state,
        limit: action.payload
      }
      case ACTION_CHANGE_TOTALRESULT:
        return {
          ...state,
          total: action.payload
        }
    default:
      return state
  }
}
