// Code dans la version de Josée 22-03
/*ajout des entetes obligatoires pour le service candidat par WC*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidat } from '../dossierDesInterfaces/candidat';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CandidatService {
  candidatUrl = 'https://projet-synthese-api.herokuapp.com/api/2096309/candidate'; /*variable chemin vers l'API candidat par WC*/

  constructor(private http: HttpClient) { }

  getCandidats(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.candidatUrl);
  }

  addCandidat(candidat: Candidat): Observable<Candidat> {
    return this.http.post<Candidat>(this.candidatUrl, candidat, httpOptions);
  }

  editCandidat(candidat: Candidat): Observable<Candidat> {
    return this.http.put<Candidat>(this.candidatUrl + "?id=" + candidat._id, candidat, httpOptions);
  }

  deleteCandidat(id: String): Observable<Candidat> {
    return this.http.delete<Candidat>(this.candidatUrl + "?id=" + id);
  }

}


// Ancien service
/*ajout des entetes obligatoires pour le service candidat par WC*/
/* import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidat } from '../dossierDesInterfaces/candidat';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class CandidatService {
  candidatUrl = 'https://projet-synthese-api.herokuapp.com/api/2096309/candidate'; 

  constructor(private http: HttpClient) { }

  getCandidats(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.candidatUrl);  
  }

  addCandidat(candidat: Candidat): Observable<Candidat> {
    return this.http.post<Candidat>(this.candidatUrl, candidat, httpOptions);
  }

  editCandidat(candidat: Candidat): Observable<Candidat> {
    return this.http.put<Candidat>(this.candidatUrl + "?id=" + candidat.id, candidat, httpOptions);
  }

  deleteCandidat(id: String): Observable<Candidat> {
    return this.http.delete<Candidat>(this.candidatUrl + "?id=" + id);
  }

} */
