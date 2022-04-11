import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../dossierDesServices/entreprise.service'; /* Importantion de mon service */
import { Entreprise } from "../dossierDesInterfaces/entreprise";/* Importation de mon interface */

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.sass']
})
export class CountersComponent implements OnInit {

  entreprises : Entreprise [] = [];

  constructor(private entrepriseService : EntrepriseService) { }

  ngOnInit(): void {
    this.getEntreprises();
  }
  
  getEntreprises(): void {
    this.entrepriseService.getEntreprises()
      .subscribe(resultat => this.entreprises = resultat);
  }

}
