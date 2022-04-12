/*ajout des entetes obligatoires pour le service candidat par WC*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Candidat } from '../dossierDesInterfaces/candidat'; /* IMPORTATION DE MON INTERFACE - SG */
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { DialogSuppressionComponent } from '../dialog-suppression/dialog-suppression.component';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class CandidatService {
  candidatUrl = 'https://projet-synthese-api.herokuapp.com/api/2096430/candidate'; /*variable chemin vers l'API candidat par WC*/

  constructor(private http: HttpClient,
              private dialog : MatDialog) { }

  /* POUR AFFICHER TOUS LES CANDIDATS - SG*/
  getCandidats(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.candidatUrl);  
  }

  /* POUR AFFICHER LA FICHE DE UN CANDIDAT - SG */
  getCandidat(_id:String): Observable<Candidat> {
    return this.http.get<Candidat>(this.candidatUrl + "/" + _id);
  }

 /* POUR AFFICHER UN CANDIDAT - SG */ 
  addCandidat(candidat: Omit<Candidat, "_id">): Observable<Candidat> {
    return this.http.post<Candidat>(this.candidatUrl, candidat, httpOptions);
  }  

/* POUR ÉDITER UN CANDIDAT - SG */
  editCandidat(candidat: Candidat): Observable<Candidat> {
    const _candidat: Partial<Candidat> = {...candidat};
    delete _candidat._id; 
    delete _candidat.__v;
    return this.http.put<Candidat>(this.candidatUrl + "/" + candidat._id, candidat, httpOptions);
  } 

 /* POUR SUPRIMER UN CANDIDAT- SG */
  deleteCandidat(_id: String): Observable<Candidat> {
    return this.http.delete<Candidat>(this.candidatUrl + "/=" + _id);
  }

/* POUR LE MODAL DE CONFIRMATION DE SUPRESSION - SG */
  openConfirmDialog(){
    return this.dialog.open (DialogSuppressionComponent, {
      panelClass : "confirm-dialog-container",
      disableClose : true,          
    });
  }  

}

