import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../dossierDesServices/entreprise.service'; /* Importantion de mon service */
import { Entreprise } from "../dossierDesInterfaces/entreprise";/* Importation de mon interface */


@Component({
  selector: 'app-counter-entreprises',
  templateUrl: './counter-entreprises.component.html',
  styleUrls: ['./counter-entreprises.component.sass']
})
export class CounterEntreprisesComponent implements OnInit {

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
