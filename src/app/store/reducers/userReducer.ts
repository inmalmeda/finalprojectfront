import { Action } from "../actions/action";
import { ACTION_CHANGE_USER_EMAIL, ACTION_CHANGE_USER_NAME } from "../actions/actions.types";
import UserState from "../config/userState.interface";

const initialState: UserState = {
  name: 'Inma Jiménez',
  email: 'inmalmeda@hotmail.com'

}

export function userReducer(state = initialState, action: Action) {

  switch (action.type) {
    case ACTION_CHANGE_USER_NAME:
      return {
        ...state,
        name: action.payload
      }
    case ACTION_CHANGE_USER_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    default:
      return state
  }
}
