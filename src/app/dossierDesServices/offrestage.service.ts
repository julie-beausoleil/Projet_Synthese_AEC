/*ajout des entetes obligatoires pour le service offre-stage par WC*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OffreStage } from '../dossierDesInterfaces/offre-stage';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OffrestageService {
  offrestageUrl = 'https://projet-synthese-api.herokuapp.com/api/2096430/internship-offer'; /*variable chemin vers l'API offre-stage par WC*/
  
  constructor(private http: HttpClient) { }

  getOffreStages(): Observable<OffreStage[]> {
    return this.http.get<OffreStage[]>(this.offrestageUrl);  
  }

  addOffreStage(offrestage: OffreStage): Observable<OffreStage> {
    return this.http.post<OffreStage>(this.offrestageUrl, offrestage, httpOptions);
  }

  editOffreStage(offrestage: OffreStage): Observable<OffreStage> {
    return this.http.put<OffreStage>(this.offrestageUrl + "?id=" + offrestage._id, offrestage, httpOptions);
  }

  deleteOffreStage(id: String): Observable<OffreStage> {
    return this.http.delete<OffreStage>(this.offrestageUrl + "?id=" + id);
  }
  
}
