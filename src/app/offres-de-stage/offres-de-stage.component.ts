import { Component, OnInit, Input } from '@angular/core';
import { OffrestageService } from '../dossierDesServices/offrestage.service';
import { OffreStage } from '../dossierDesInterfaces/offre-stage';
import { DialogComponent, DialogModel } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offres-de-stage',
  templateUrl: './offres-de-stage.component.html',
  styleUrls: ['./offres-de-stage.component.sass']
})

export class OffresDeStageComponent implements OnInit {

  @Input() offrestage? : OffreStage; 

  offrestages : OffreStage[] = [];
  selectedOffrestage?: OffreStage;  
 
  constructor(public dialog: MatDialog, private offrestageService : OffrestageService, 
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = String (this.route.snapshot.params['_id']);
      this.offrestageService.deleteOffreStage(id)
      .subscribe(resultat => this.offrestage = resultat);
    }

  getOffreStages(): void {
    this.offrestageService.getOffreStages()
    .subscribe(resultat => this.offrestages = resultat);
  }
    
  //   onSelect(offrestage: OffreStage): void {
  //   this.selectedOffrestage = offrestage; 
  // }

  // onDelete(offrestage: OffreStage ): void {
  //   this.offrestageService.deleteOffreStage(offrestage._id)
  //   .subscribe(result => this.offrestages = this.offrestages.filter(p => p !== this.offrestage));
  // } 

 //  ajout d'une methode pour appeler la fenetre de dialogue

 result: string = '';

  Dialog(): void {
    const message = `Voulez-vous vraiment faire cette suppression?`;

    const dialogData = new DialogModel("Suppression d'un enregistrement", message);

    const dialogRef = this.dialog.open(DialogComponent, {
      maxWidth: "1000px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
    });
  }
}


/* permet d'afficher la liste de stage par un boucle */