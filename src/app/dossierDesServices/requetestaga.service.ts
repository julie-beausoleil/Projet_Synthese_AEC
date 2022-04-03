/*ajout des entetes obligatoires pour le service region par WC*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequeteStage } from '../dossierDesInterfaces/requete-stage';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RequetestagaService {
  reqstageUrl = 'https://projet-synthese-api.herokuapp.com/api/2096430/internship-request'; /*variable chemin vers l'API RequetStage par WC*/

  constructor(private http: HttpClient) { }
  
  getReqStages(): Observable<RequeteStage[]> {
    return this.http.get<RequeteStage[]>(this.reqstageUrl);  
  }

  addReqStage(reqstage: RequeteStage): Observable<RequeteStage> {
    return this.http.post<RequeteStage>(this.reqstageUrl, reqstage, httpOptions);
  }

  editReqStage(reqstage: RequeteStage): Observable<RequeteStage> {
    return this.http.put<RequeteStage>(this.reqstageUrl + reqstage._id, reqstage, httpOptions);
  }

  deleteReqStage(_id: String): Observable<RequeteStage> {
    return this.http.delete<RequeteStage>(this.reqstageUrl + _id);
  }

  
}
