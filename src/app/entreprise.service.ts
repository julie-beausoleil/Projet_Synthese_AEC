/*ajout des entetes obligatoires pour le service entreprise par WC*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Entreprise } from './entreprise';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class EntrepriseService {
  entrepriseUrl = 'https://projet-synthese-api.herokuapp.com/api/2096309/enterprise'; /*variable chemin vers l'API de l'entreprise par WC*/

  constructor(private http: HttpClient) { }

  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.entrepriseUrl);  
  }

  addEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.entrepriseUrl, entreprise, httpOptions);
  }

  editEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    return this.http.put<Entreprise>(this.entrepriseUrl + "?id=" + entreprise._id, entreprise, httpOptions);
  }

  deleteEntreprise(_id: String): Observable<Entreprise> {
    return this.http.delete<Entreprise>(this.entrepriseUrl + "?id=" + _id);
  }

}
