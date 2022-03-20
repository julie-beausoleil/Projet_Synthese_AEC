import { Component, OnInit, Input } from '@angular/core';
import { Entreprise } from "../dossierDesInterfaces/entreprise"; /* Importation de mon interface */
import { EntrepriseService } from '../dossierDesServices/entreprise.service'; /* Importantion de mon service */
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide

@Component({
  selector: 'app-fiche-entreprise',
  templateUrl: './fiche-entreprise.component.html',
  styleUrls: ['./fiche-entreprise.component.sass']
})
export class FicheEntrepriseComponent implements OnInit {

  entreprises : Entreprise[]= [] ;   
  selectedEntreprise?: Entreprise; 

  constructor(private entrepriseService : EntrepriseService) { }

  ngOnInit(): void {
    this.getEntreprises();
  }

  getEntreprises (): void {
    this.entrepriseService.getEntreprises()
      .subscribe(resultat => this.entreprises = resultat);
  } 
  

  deleteEntreprise(entreprise: Entreprise ): void {
    this.entrepriseService.deleteEntreprise(entreprise._id)
      .subscribe(result => this.entreprises = this.entreprises.filter(p => p !== entreprise));
  } 

  onSelect(entreprise: Entreprise): void {
    this.selectedEntreprise = entreprise; 
  }

  editEntreprise(entrepriseFormEdition: NgForm): void {
    if (entrepriseFormEdition.valid && this.selectedEntreprise!= null) {
      this.entrepriseService.editEntreprise(this.selectedEntreprise)
          .subscribe(() => this.selectedEntreprise = undefined);
    }
  }
}