/*ajout des entetes obligatoires pour le service candidat par WC*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Candidat } from './candidat';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  candidatUrl = 'https://projet-synthese-api.herokuapp.com/api/candidate'; /*variable chemin vers l'API candidat par WC*/

  constructor(private http: HttpClient) { }

  getCandidats(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.candidatUrl);  
  }

}
