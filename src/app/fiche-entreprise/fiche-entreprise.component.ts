import { Component, OnInit, Input } from '@angular/core';
import { Entreprise } from "../dossierDesInterfaces/entreprise"; /* Importation de mon interface - SG */
import { EntrepriseService } from '../dossierDesServices/entreprise.service'; /* Importantion de mon service -SG  */
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fiche-entreprise',
  templateUrl: './fiche-entreprise.component.html',
  styleUrls: ['./fiche-entreprise.component.sass']
})
export class FicheEntrepriseComponent implements OnInit { 

  entreprise : Entreprise = {
    _id: " ",
    name: "",
    description: "",
    imageUrl: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    published: false,
  };  

  selectedEntreprise?: Entreprise; 
  

  constructor(private entrepriseService : EntrepriseService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
   const id = String (this.route.snapshot.params['_id']);
   this.entrepriseService.getEntreprise(id)
    .subscribe(resultat => this.entreprise = resultat);
  }


  deleteEntreprise(entreprise: Entreprise ): void {
    this.entrepriseService.deleteEntreprise(entreprise._id)
      .subscribe(() => this.router.navigate(['/']));
  } 

  onEdit(entrepriseFormEdition: NgForm): void {
    if (entrepriseFormEdition.valid && this.selectedEntreprise!= null) {
      this.entrepriseService.editEntreprise(this.selectedEntreprise)
          .subscribe(() => this.selectedEntreprise = undefined);
    }
  }
}