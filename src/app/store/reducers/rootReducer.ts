import { ActionReducerMap } from "@ngrx/store";
import { Action } from "../actions/action";
import { AppStore } from "../config/appStore.interface";
import { paginationReducer } from "./paginationReducer";
import { titleHeaderReducer } from "./titleHeaderReducer";


export const RootReducer: ActionReducerMap<AppStore, Action> = {
  titleHeaderState: titleHeaderReducer,
  paginationState: paginationReducer
}
