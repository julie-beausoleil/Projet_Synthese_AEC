import { Component, OnInit, Input } from '@angular/core';
import { OffrestageService } from '../dossierDesServices/offrestage.service';
import { OffreStage } from '../dossierDesInterfaces/offre-stage';
import { DialogComponent, DialogModel } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-offres-de-stage',
  templateUrl: './offres-de-stage.component.html',
  styleUrls: ['./offres-de-stage.component.sass']
})
export class OffresDeStageComponent implements OnInit {
  @Input() offrestage? : OffreStage; 

  offrestages : OffreStage[] = [];
  selectedOffrestage?: OffreStage;  
 
  constructor(public dialog: MatDialog, private offrestageService : OffrestageService) { }
    ngOnInit(): void {
  }

 getOffreStages(): void {
   this.offrestageService.getOffreStages()
   .subscribe(resultat => this.offrestages = resultat);
 }
 
  onSelect(offrestage: OffreStage): void {
   this.selectedOffrestage = offrestage; 
 }
 //  ajout d'une methode pour appeler la fenetre de dialogue

 result: string = '';

 Dialog(): void {
   const message = `Voulez vous vraiment faire cette suppression?`;

   const dialogData = new DialogModel("Suppression d'un enregistrement", message);

   const dialogRef = this.dialog.open(DialogComponent, {
     maxWidth: "1000px",
     data: dialogData
   });

   dialogRef.afterClosed().subscribe(dialogResult => {
     this.result = dialogResult;
   });
   //this.deleteOffreStage;
 }

}


/* permet d'afficher la liste de stage par un boucle */