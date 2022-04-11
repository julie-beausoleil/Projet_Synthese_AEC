import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { OffrestageService } from '../dossierDesServices/offrestage.service';
import { OffreStage } from '../dossierDesInterfaces/offre-stage';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.sass']
})
export class DialogComponent implements OnInit {

  @Input() offrestage?: OffreStage;

  offrestages: OffreStage[] = [];
  selectedOffrestage?: OffreStage;

  title: string;
  message: string;


  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel, private offrestageService: OffrestageService) {
    this.title = data.title;
    this.message = data.message;
  }
  ngOnInit() {
  }

  onSelect(offrestage?: OffreStage): void {
    this.selectedOffrestage = offrestage;
  }

  // onDeleteOffreStage(offrestage: OffreStage): void {
  //   if(offrestage._id){
  //     this.offrestageService.deleteOffreStage(offrestage._id)
  //     .subscribe(result => this.offrestages = this.offrestages.filter(p => p !== this.offrestage));
  //   }
  // }

  //  appel de la fonction pour la suppression

  onCommand(): void {
    // instruction permettant de faire la suppression une fois trouver l'id en question
    if (this.offrestage?._id) {
      this.offrestageService.deleteOffreStage(this.offrestage._id)
        .subscribe(result => this.offrestages = this.offrestages.filter(p => p !== this.offrestage));
    }
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
