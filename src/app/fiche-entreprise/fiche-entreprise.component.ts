import { Component, OnInit, Input } from '@angular/core';
import { Entreprise } from "../dossierDesInterfaces/entreprise"; /* Importation de mon interface - SG */
import { EntrepriseService } from '../dossierDesServices/entreprise.service'; /* Importantion de mon service -SG  */
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide 
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogSuppressionComponent } from '../dialog-suppression/dialog-suppression.component';


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
  columnsToDisplay = ['actions'];
  

  constructor(private entrepriseService : EntrepriseService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,) { }
              
              

  ngOnInit(): void {
   const id = String (this.route.snapshot.params['_id']);
   this.entrepriseService.getEntreprise(id)
    .subscribe(resultat => this.entreprise = resultat);
  }

  onSelect(entreprise: Entreprise): void {
    this.selectedEntreprise = entreprise; 
  }

  
  /* FONCTIONE POUR MON DIALOG DE SUPRESSION ET DE LA SUPRESSION DE MON ENTREPRISE - SG */
  openConfirmationDialog(entreprise : Entreprise) : void { 
    this.entrepriseService.openConfirmDialog()
     .afterClosed(); {      
        this.entrepriseService.deleteEntreprise(entreprise._id) 
        .subscribe();      
        this.router.navigate(['/entreprises']);                   
  }   
} 
  


  onEdit(entrepriseForm: NgForm): void {
    if (entrepriseForm.valid && this.selectedEntreprise!= null) {
      this.entrepriseService.editEntreprise(this.selectedEntreprise)
          .subscribe(() => this.selectedEntreprise = undefined);
          this.router.navigate(['/entreprises'])
    }
  }
  
  onSave(entrepriseForm: NgForm) {
    if (entrepriseForm.valid) {
      if (this.entreprise._id != null && this.entreprise._id != '') {
        // Si on a un id, on doit modifier l'entreprise
        this.entrepriseService.editEntreprise(this.entreprise).subscribe(_ => {});
      }    
    }    
      
 }
}


