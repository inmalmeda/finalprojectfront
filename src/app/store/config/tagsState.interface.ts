import { Tag } from "src/app/models/tag/tag.model";

export default interface TagsState{
  tags: Tag[],
  tagSelected: Tag,
  filterName: string
}
