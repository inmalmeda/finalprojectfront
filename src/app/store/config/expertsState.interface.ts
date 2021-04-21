import { Expert } from "src/app/models/expert/expert.model";

export default interface ExpertsState{
  experts: Expert[],
  expertSelected: Expert,
  filterName: string,
  filterState: string,
  filterTag: string,
  filterScore: string
}
