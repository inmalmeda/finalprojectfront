import { Tag } from "../../tag/tag.model"
import { InewExpert } from "./inew-expert.interface"

export class NewExpert implements InewExpert{
  name: string
  nif: string
  tags: Tag[]
  availability: string
  contactPhone: string
  contactEmail: string
  contactTown: string
  contactLinkedin: string


  constructor(name: string, nif: string, tags: Tag[], availability: string, contactPhone: string, contactEmail: string,
    contactTown: string, contactLinkedin: string) {

    this.name = name
    this.nif = nif
    this.tags = tags
    this.availability = availability
    this.contactPhone = contactPhone
    this.contactEmail = contactEmail
    this.contactTown = contactTown
    this.contactLinkedin = contactLinkedin
    }


}
