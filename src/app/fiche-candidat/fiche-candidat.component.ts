import { Component, OnInit } from '@angular/core';
import { Candidat } from '../dossierDesInterfaces/candidat';/* Importation de mon interface - SG */
import { CandidatService } from '../dossierDesServices/candidat.service'; /* Importantion de mon service -SG  */
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide 
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DialogSuppressionComponent } from '../dialog-suppression/dialog-suppression.component';


@Component({
  selector: 'app-fiche-candidat',
  templateUrl: './fiche-candidat.component.html',
  styleUrls: ['./fiche-candidat.component.sass']
})
export class FicheCandidatComponent implements OnInit {
  
  candidat: Candidat = {
    _id: " ",
    name: " ",
    description: " ",
    jobTitle: " ",
    email: " ",
    phone: " ",
    address: " ",
    city: " ",
    province: " ",
    postalCode: " ",
    published: false,
  };

  selectedCandidat?: Candidat; 
  columnsToDisplay = ['actions'];
  

  constructor(private candidatService : CandidatService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog,) { }
              
              

  ngOnInit(): void {
   const id = String (this.route.snapshot.params['_id']);
   this.candidatService.getCandidat(id)
    .subscribe(resultat => this.candidat = resultat);
  }

  onSelect(candidat: Candidat): void {
    this.selectedCandidat = candidat; 
  }

  
  /* FONCTIONE POUR MON DIALOG DE SUPRESSION ET DE LA SUPRESSION DE MON CANDIDAT- SG */
  openConfirmationDialog(candidat: Candidat) : void { 
    this.candidatService.openConfirmDialog()
     .afterClosed(); {      
        this.candidatService.deleteCandidat(candidat._id) 
        .subscribe();      
        this.router.navigate(['/candidats']);                   
  }   
} 


  onEdit(candidatForm: NgForm): void {
    if (candidatForm.valid && this.selectedCandidat!= null) {
      this.candidatService.editCandidat(this.selectedCandidat)
          .subscribe(() => this.selectedCandidat = undefined);
          this.router.navigate(['/entreprises'])
    }
  }
  
  onSave(candidatForm: NgForm) {
    if (candidatForm.valid) {
      if (this.candidat._id != null && this.candidat._id != '') {
        // Si on a un id, on doit modifier l'entreprise
        this.candidatService.editCandidat(this.candidat).subscribe(() => this.router.navigate(['/candidats']));;
      }    
    }    
      
 }
}

