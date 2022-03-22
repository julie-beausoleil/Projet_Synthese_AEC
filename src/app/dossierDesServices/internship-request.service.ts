import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { InternshipRequest } from '../interfaces/internshipRequest';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class InternshipRequestService {

  InternshipRequestsUrl = 'https://projet-synthese-api.herokuapp.com/api/2096309/internship-request'; // Changer ici

  constructor(private http: HttpClient) { }

  getInternshipRequests(): Observable<InternshipRequest[]> {
    return this.http.get<InternshipRequest[]>(this.InternshipRequestsUrl);
    //return of(FORFAITS);
  }
  
  addInternshipRequest(InternshipRequest: InternshipRequest): Observable<InternshipRequest> {
    return this.http.post<InternshipRequest>(this.InternshipRequestsUrl, InternshipRequest, httpOptions);
  }

  editInternshipRequest(InternshipRequest: InternshipRequest): Observable<InternshipRequest> {
    return this.http.put<InternshipRequest>(this.InternshipRequestsUrl + "/" + InternshipRequest._id, InternshipRequest, httpOptions);
  }

  deleteInternshipRequest(id: string): Observable<InternshipRequest> {
    //console.log("-------> deleteInternshipRequest(): " + this.InternshipRequestsUrl + "/" +  id);
    return this.http.delete<InternshipRequest>(this.InternshipRequestsUrl + "/" +  id);
  } 
}
