import { Tag } from "../../tag/tag.model";

export interface InewExpert {
  name: string,
  nif: string,
  tags: Tag[],
  availability: string,
  contactPhone: string,
  contactEmail: string,
  contactTown: string,
  contactLinkedin: string
}
