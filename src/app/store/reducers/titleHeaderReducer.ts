import { Action } from "../actions/action"
import { ACTION_CHANGE_SHOWBUTTONNEW, ACTION_CHANGE_SUBTITLEHEADER, ACTION_CHANGE_TEXTBACK, ACTION_CHANGE_TEXTBUTTONNEW, ACTION_CHANGE_TITLEHEADER } from "../actions/actions.types"
import TitleHeaderState from "../config/titleHeaderState.interface"

const initialState: TitleHeaderState = {
  titleMain: 'Lista de Expertos',
  titleSecondary: 'CANDIDATOS',
  textButtonNew: 'Nuevo Experto',
  showButtonNew: true,
  textBack:'Volver al listado'
}

export function titleHeaderReducer(state = initialState, action: Action) {

  switch (action.type) {
    case ACTION_CHANGE_TITLEHEADER:
      return {
        ...state,
        titleMain: action.payload
      }
    case ACTION_CHANGE_SUBTITLEHEADER:
      return {
        ...state,
        titleSecondary: action.payload
      }
      case ACTION_CHANGE_TEXTBUTTONNEW:
        return {
          ...state,
          textButtonNew: action.payload
      }
    case ACTION_CHANGE_SHOWBUTTONNEW:
      return {
        ...state,
        showButtonNew: action.payload
      }
      case ACTION_CHANGE_TEXTBACK:
      return {
        ...state,
        textBack: action.payload
      }
    default:
      return state
  }
}
