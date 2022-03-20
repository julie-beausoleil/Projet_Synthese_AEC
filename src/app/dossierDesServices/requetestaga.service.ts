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
  reqstageUrl = 'https://projet-synthese-api.herokuapp.com/api/internship-request'; /*variable chemin vers l'API RequetStage par WC*/

  getReqStages(): Observable<RequeteStage[]> {
    return this.http.get<RequeteStage[]>(this.reqstageUrl);  
  }

  addReqStage(reqstage: RequeteStage): Observable<RequeteStage> {
    return this.http.post<RequeteStage>(this.reqstageUrl, reqstage, httpOptions);
  }

  editRegion(reqstage: RequeteStage): Observable<RequeteStage> {
    return this.http.put<RequeteStage>(this.reqstageUrl + "?id=" + reqstage.id, reqstage, httpOptions);
  }

  deleteRegion(id: String): Observable<RequeteStage> {
    return this.http.delete<RequeteStage>(this.reqstageUrl + "?id=" + id);
  }

  constructor(private http: HttpClient) { }
}
