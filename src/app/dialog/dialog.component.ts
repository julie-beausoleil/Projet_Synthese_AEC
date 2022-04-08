import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OffrestageService } from '../dossierDesServices/offrestage.service';
import { OffreStage } from '../dossierDesInterfaces/offre-stage';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {

  @Input() offrestage? : OffreStage; 

  offrestages : OffreStage[] = [];
  selectedOffrestage?: OffreStage;

  title: string;
  message: string;
  constructor(private offrestageService : OffrestageService, public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel) {
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
  }

  onSelect(offrestage?: OffreStage): void {
    this.selectedOffrestage = offrestage; 
  }
  // fonction pour la suppression d'un enregistrement

  onDeleteOffreStage(offrestage: OffreStage): void {
    if(offrestage._id){
      this.offrestageService.deleteOffreStage(offrestage._id)
      .subscribe(result => this.offrestages = this.offrestages.filter(p => p !== this.offrestage));
    }
   }

  onCommand(): void {
    this.onDeleteOffreStage;
    this.dialogRef.close(true);
  }
  onDelete(): void {
    this.dialogRef.close(false);
  }

}
  export class DialogModel {
  constructor(public title: string, public message: string) {
  }

}
