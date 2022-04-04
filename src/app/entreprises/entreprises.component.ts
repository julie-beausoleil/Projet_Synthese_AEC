import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from "../dossierDesInterfaces/entreprise"; /* Importation de mon interface */
import { EntrepriseService } from '../dossierDesServices/entreprise.service'; /* Importation de mon service */

@Component({
  selector: 'app-entreprises',
  templateUrl: './entreprises.component.html',
  styleUrls: ['./entreprises.component.sass']
})
export class EntreprisesComponent implements OnInit {

  @Input() entreprise? : Entreprise;    
    entreprises : Entreprise[] = [] ;   
    selectedEntreprise?: Entreprise; 

  constructor(private entrepriseService : EntrepriseService, router: Router) { }

  ngOnInit(): void {
    
  }
 

  onSelect(entreprise: Entreprise): void {
    this.selectedEntreprise = entreprise; 
  }

  getEntreprises(): void {
    this.entrepriseService.getEntreprises()
      .subscribe(resultat => this.entreprises = resultat);
  }

}

