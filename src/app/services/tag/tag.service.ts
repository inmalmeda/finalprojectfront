import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FiltersTag } from 'src/app/models/tag/filters/filters-tag.model';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  url: string = ''

  constructor(private http: HttpClient) { }

  getAllTags(filters : FiltersTag):Observable<any>
  {

    this.url = 'http://localhost:8080/api/etiquetas?'

    if (filters.name != '')
      this.url = this.url + `name=${filters.name}&`


    this.url = this.url +  `page=${filters.page}&limit=${filters.limit}`

    return this.http.get(this.url)
  }
}
