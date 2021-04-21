export class FiltersExpert {
  name: string
  state: string
  tag: string
  score: string
  page: number
  limit: number

  constructor(name: string,state: string,  tag: string,  score: string,  page: number, limit: number) {
    this.name = name
    this.state = state
    this.tag = tag
    this.score = score
    this.page = page
    this.limit = limit
  }
}
