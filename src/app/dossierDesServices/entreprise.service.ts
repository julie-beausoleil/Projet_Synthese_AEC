/*ajout des entetes obligatoires pour le service entreprise par WC*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Entreprise } from '../dossierDesInterfaces/entreprise';
import { Observable } from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material/dialog'
import { DialogSuppressionComponent } from '../dialog-suppression/dialog-suppression.component';

const httpOptions = {
  headers: new HttpHeaders({ 'content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class EntrepriseService {
  entrepriseUrl = 'https://projet-synthese-api.herokuapp.com/api/2096430/enterprise'; /*variable chemin vers l'API de l'entreprise par WC*/

  constructor(private http: HttpClient,
              private dialog : MatDialog) { }

  /* POUR AFFICHER TOUS LES ENTREPRISES - SG */
  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.entrepriseUrl);  
  }


/* POUR AFFICHER LA FICHES DE UNE ENTREPRISE - SG */
  getEntreprise(_id:String): Observable<Entreprise> {
    return this.http.get<Entreprise>(this.entrepriseUrl + "/" + _id);
  }

/* POUR AJOUTER UNE ENTREPRISE - SG */
  addEntreprise(entreprise: Omit<Entreprise, "_id">): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.entrepriseUrl, entreprise, httpOptions);
  }

/* POUR ÉDITER UNE ENTREPRISE - SG */
  editEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    const _entreprise: Partial<Entreprise> = {...entreprise};
    delete _entreprise._id; 
    delete _entreprise.__v;
    return this.http.put<Entreprise>(this.entrepriseUrl + "/" + entreprise._id, _entreprise, httpOptions);
  }     

 /* POUR SUPRIMER UNE ENTREPRISE - SG */
  deleteEntreprise(_id: String): Observable<Entreprise> {
    return this.http.delete<Entreprise>(this.entrepriseUrl + "/" + _id);
  }

  /* POUR LE MODAL DE CONFIRMATION DE SUPRESSION - SG */
  openConfirmDialog(){
    return this.dialog.open (DialogSuppressionComponent, {
      panelClass : "confirm-dialog-container",
      disableClose : true,
        
    });
  } 

}
