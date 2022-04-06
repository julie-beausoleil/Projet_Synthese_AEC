import { Component, OnInit } from '@angular/core';
import { Entreprise } from "../dossierDesInterfaces/entreprise"; /* Importation de mon interface - SG */
import { EntrepriseService } from '../dossierDesServices/entreprise.service'; /* Importantion de mon service -SG  */
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide 
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editer-entreprise',
  templateUrl: './editer-entreprise.component.html',
  styleUrls: ['./editer-entreprise.component.sass']
})
export class EditerEntrepriseComponent implements OnInit {

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
  columnsToDisplay = ['actions'];

 
  constructor(private entrepriseService : EntrepriseService,
    private route: ActivatedRoute,
    private router: Router) { }
    

  ngOnInit(): void {
    const id = String (this.route.snapshot.params['_id']);
   this.entrepriseService.getEntreprise(id)
    .subscribe(resultat => this.entreprise = resultat);
  }


  onDelete(entreprise: Entreprise ): void {
    this.entrepriseService.deleteEntreprise(entreprise._id)
      .subscribe(() => this.router.navigate(['/']));
  } 


  onSelect(entreprise: Entreprise): void {
    this.selectedEntreprise = entreprise; 
  }

  onEdit(entrepriseFormEdition: NgForm): void {
    if (entrepriseFormEdition.valid && this.selectedEntreprise != null) {
      this.entrepriseService.editEntreprise(this.selectedEntreprise)
          .subscribe(() => this.selectedEntreprise = undefined);
    }
  }
}








