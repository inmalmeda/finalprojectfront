import ExpertsState from "./expertsState.interface";
import PaginationState from "./paginationState.interface";
import TagsState from "./tagsState.interface";
import TitleHeaderState from "./titleHeaderState.interface";

export interface AppStore{
  titleHeaderState: TitleHeaderState,
  paginationState: PaginationState,
  tagsState: TagsState,
  expertsState: ExpertsState
}
