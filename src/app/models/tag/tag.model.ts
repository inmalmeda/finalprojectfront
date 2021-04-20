import { ITag } from "./itag.interface"

export class Tag implements ITag{
  id: number
  name: string
  creator: string
  created_at: Date
  updated_at: Date

  constructor(id: number, name: string, creator:string, created_at: Date, updated_at: Date) {
    this.id = id
    this.name = name
    this.creator = creator
    this.created_at = created_at
    this.updated_at = updated_at
  }
}
