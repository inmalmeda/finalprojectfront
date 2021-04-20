import { IFiltersTag } from "./ifilters-tag.interface"

export class FiltersTag implements IFiltersTag {
  name: string
  page: number
  limit: number

  constructor(name: string, page: number, limit: number) {
    this.name = name
    this.page = page
    this.limit = limit
  }
}
