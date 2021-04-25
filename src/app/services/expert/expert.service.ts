import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expert } from 'src/app/models/expert/expert.model';
import { FiltersExpert } from 'src/app/models/expert/filters/filters-expert.model';
import { NewExpert } from 'src/app/models/expert/newExpert/new-expert.model';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  url: string = ''

  constructor(private http: HttpClient) { }

  /**
   * GET all expert with filters
   * @param filters
   * @returns
   */
  getAllExperts(filters : FiltersExpert):Observable<any>
  {

    //this.url = 'http://localhost:8080/api/expertos?'
    this.url = 'api/expertos?'

    if (filters.name != '')
      this.url = this.url + `name=${filters.name}&`

    if (filters.state != '')
      this.url = this.url + `state=${filters.state}&`

    this.url = this.url + `score=${filters.score}&`

    if (filters.tag != '')
      this.url = this.url + `tag=${filters.tag}&`

    this.url = this.url + `page=${filters.page}&limit=${filters.limit}`

    return this.http.get(this.url)
  }


  /**
   * Post a new expert
   * @param expert
   * @returns
   */
  createExpert(expert: NewExpert): Observable<any>{
    let body = {
      name: expert.name,
      nif: expert.nif,
      tags: expert.tags,
      availability: expert.availability,
      contactPhone: expert.contactPhone,
      contactEmail: expert.contactEmail,
      contactTown: expert.contactTown,
      contactLinkedin: expert.contactLinkedin,
      state: "Pendiente",
      score:0
    }
    //return this.http.post('http://localhost:8080/api/expertos', body)
    return this.http.post('api/expertos', body)
  }

  /**
   * Update an expert
   * @param expert
   * @returns
   */
  updateExpert(expert: Expert): Observable<any>{
    let body = {
      id: expert.id,
      name: expert.name,
      created_at: expert.created_at,
      updated_at: expert.updated_at,
      stateReason: expert.stateReason,
      availability: expert.availability,
      modality: expert.modality,
      freelance: expert.freelance,
      contactPhone: expert.contactPhone,
      contactEmail: expert.contactEmail,
      contactTown: expert.contactTown,
      contactLinkedin: expert.contactLinkedin,
      conditionsPercentage: expert.conditionsPercentage,
      conditionsPrice: expert.conditionsPrice,
      score: expert.score,
      nif: expert.nif,
      credentialsEmail: expert.credentialsEmail,
      credentialsEmailPassword: expert.credentialsEmailPassword,
      credentialsZoom: expert.credentialsZoom,
      filePhoto: expert.filePhoto,
      fileCv: expert.fileCv,
      observations: expert.observations,
      origin: expert.origin,
      state: expert.state,
      tags: expert.tags
    }
   // return this.http.put('http://localhost:8080/api/expertos', body)
   return this.http.put('api/expertos', body)
  }
}

