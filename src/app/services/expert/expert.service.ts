import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FiltersExpert } from 'src/app/models/expert/filters/filters-expert.model';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  url: string = ''

  constructor(private http: HttpClient) { }

  getAllExperts(filters : FiltersExpert):Observable<any>
  {

    this.url = 'http://localhost:8080/api/expertos?'

    if (filters.name != '')
      this.url = this.url + `name=${filters.name}&`

    if (filters.state != '')
      this.url = this.url + `state=${filters.state}&`

    if (filters.score != '')
      this.url = this.url + `score=${filters.score}&`

    if (filters.tag != '')
      this.url = this.url + `tag=${filters.tag}&`

    this.url = this.url + `page=${filters.page}&limit=${filters.limit}`

    console.log(this.url)

    return this.http.get(this.url)
  }
}
