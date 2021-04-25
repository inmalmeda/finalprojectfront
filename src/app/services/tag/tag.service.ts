import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FiltersTag } from 'src/app/models/tag/filters/filters-tag.model';
import { Tag } from 'src/app/models/tag/tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  url: string = ''

  constructor(private http: HttpClient) { }

  /**
   * Get all tags with filters
   * @param filters
   * @returns
   */
  getAllTags(filters : FiltersTag):Observable<any>
  {

   // this.url = 'http://localhost:8080/api/etiquetas?'
    this.url = 'api/etiquetas?'

    if (filters.name != '')
      this.url = this.url + `name=${filters.name}&`

    this.url = this.url + `page=${filters.page}`

    if (filters.limit != -1)
      this.url = this.url + `&limit=${filters.limit}`

    return this.http.get(this.url)
  }

  /**
   * Delete a tag by id
   * @param id
   * @returns
   */
  deleteTagById(id : number): Observable<any> {

    //this.url = `http://localhost:8080/api/etiquetas/${id}`
    this.url = `api/etiquetas/${id}`
    return this.http.delete(this.url)
  }

  /**
   * Post a new tag
   * @param tag
   * @returns
   */
  createTag(tag: Tag): Observable<any>{
    let body = {
      name: tag.name,
      creator: tag.creator
    }
    //return this.http.post('http://localhost:8080/api/etiquetas', body)
    return this.http.post('api/etiquetas', body)
  }

  /**
   * Update a tag
   * @param tag
   * @returns
   */
  updateTag(tag: Tag): Observable<any>{
    let body = {
      id: tag.id,
      name: tag.name,
      creator: tag.creator,
      created_at: tag.created_at
    }
   // return this.http.put('http://localhost:8080/api/etiquetas', body)
    return this.http.put('api/etiquetas', body)
  }

}
