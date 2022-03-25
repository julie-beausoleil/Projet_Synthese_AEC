import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../dossierDesServices/entreprise.service'; /* Importantion de mon service */
import { Entreprise } from "../dossierDesInterfaces/entreprise";/* Importation de mon interface */

@Component({
  selector: 'app-liste-entreprises',
  templateUrl: './liste-entreprises.component.html',
  styleUrls: ['./liste-entreprises.component.sass']
})
export class ListeEntreprisesComponent implements OnInit {

  entreprises : Entreprise [] = [];
  selectedEntreprise?: Entreprise;  

  constructor(private entrepriseService : EntrepriseService) { }

  ngOnInit(): void {
    this.getEntreprises();
  }
  
  getEntreprises(): void {
    this.entrepriseService.getEntreprises()
      .subscribe(resultat => this.entreprises = resultat);
  }
}


/* Pour afficher mes cartes de visite de chaque compagnie */