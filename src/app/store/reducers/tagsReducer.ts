import { Tag } from "src/app/models/tag/tag.model"
import { Action } from "../actions/action"
import { ACTION_CHANGE_LISTTAGS, ACTION_CHANGE_TAGSELECTED, ACTION_CHANGE_TAG_FILTERNAME } from "../actions/actions.types"
import TagsState from "../config/tagsState.interface"

const initialState: TagsState = {
  tags: [],
  tagSelected: new Tag(0, '' , '', new Date(), new Date()),
  filterName: ''
}

export function tagsReducer(state = initialState, action: Action) {

  switch (action.type) {
    case ACTION_CHANGE_LISTTAGS:
      return {
        ...state,
        tags: action.payload
      }
    case ACTION_CHANGE_TAGSELECTED:
      return {
        ...state,
        tagSelected: action.payload
      }
      case ACTION_CHANGE_TAG_FILTERNAME:
        return {
          ...state,
          filterName: action.payload
        }
    default:
      return state
  }
}
