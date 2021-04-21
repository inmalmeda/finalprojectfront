import { Tag } from "../tag/tag.model"

export class Expert {
  id: number
  name: string
  created_at: Date
  updated_at: Date
  stateReason: string
  availability:string
  modality:string
  freelance: boolean
  contactPhone:string
  contactEmail:string
  contactTown:string
  contactLinkedin:string
  conditionsPercentage:string
  conditionsPrice:string
  score:number
  nif:string
  credentialsEmail:string
  credentialsEmailPassword:string
  credentialsZoom:string
  filePhoto:string
  fileCv:string
  observations:string
  origin:string
  state:string
  tags: Tag[]

  constructor(id: number, name: string, created_at: Date, updated_at: Date,stateReason: string,
    availability:string, modality:string, freelance: boolean, contactPhone:string, contactEmail:string,
    contactTown:string, contactLinkedin:string, conditionsPercentage:string, conditionsPrice:string,
    score:number,nif:string, credentialsEmail:string, credentialsEmailPassword:string, credentialsZoom:string,
    filePhoto:string, fileCv:string, observations:string, origin:string, state:string,tags: Tag[] ) {
    this.id = id
    this.name = name
    this.created_at = created_at
    this.updated_at = updated_at
    this.stateReason = stateReason
    this.availability = availability
    this.modality = modality
    this.freelance = freelance
    this.contactPhone = contactPhone
    this.contactEmail = contactEmail
    this.contactTown = contactTown
    this.contactLinkedin = contactLinkedin
    this.conditionsPercentage = conditionsPercentage
    this.conditionsPrice = conditionsPrice
    this.score = score
    this.nif = nif
    this.credentialsEmail = credentialsEmail
    this.credentialsEmailPassword = credentialsEmailPassword
    this.credentialsZoom = credentialsZoom
    this.filePhoto = filePhoto
    this.fileCv = fileCv
    this.observations = observations
    this.origin = origin
    this.state = state
    this.tags = tags
















  }
}
