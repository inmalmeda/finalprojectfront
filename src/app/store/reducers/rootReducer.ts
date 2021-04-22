import { ActionReducerMap } from "@ngrx/store";
import { Action } from "../actions/action";
import { AppStore } from "../config/appStore.interface";
import { expertsReducer } from "./expertsReducer";
import { paginationReducer } from "./paginationReducer";
import { tagsReducer } from "./tagsReducer";
import { titleHeaderReducer } from "./titleHeaderReducer";
import { userReducer } from "./userReducer";


export const RootReducer: ActionReducerMap<AppStore, Action> = {
  titleHeaderState: titleHeaderReducer,
  paginationState: paginationReducer,
  tagsState: tagsReducer,
  expertsState: expertsReducer,
  userState : userReducer
}
