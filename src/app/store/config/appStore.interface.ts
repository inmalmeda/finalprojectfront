import PaginationState from "./paginationState.interface";
import TitleHeaderState from "./titleHeaderState.interface";

export interface AppStore{
  titleHeaderState: TitleHeaderState,
  paginationState: PaginationState
}
