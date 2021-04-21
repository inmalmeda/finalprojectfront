import { Tag } from "../tag/tag.model";

export interface Iexpert {
  id: number,
  name: string,
  created_at: Date,
  updated_at: Date,
  stateReason: string,
  availability:string,
  modality:string,
  freelance: boolean,
  contactPhone:string,
  contactEmail:string,
  contactTown:string,
  contactLinkedin:string,
  conditionsPercentage:string,
  conditionsPrice:string,
  score:number,
  nif:string,
  credentialsEmail:string,
  credentialsEmailPassword:string,
  credentialsZoom:string,
  filePhoto:string,
  fileCv:string,
  observations:string,
  origin:string,
  state:string,
  tags: Tag[]
}
