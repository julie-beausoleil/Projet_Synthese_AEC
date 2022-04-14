import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { OffrestageService } from '../dossierDesServices/offrestage.service';
import { OffreStage } from '../dossierDesInterfaces/offre-stage';
import { ActivatedRoute, Router } from '@angular/router';


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
  id = String(this.route.snapshot.params['_id']);

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,
    private offrestageService: OffrestageService, private route: ActivatedRoute, private router: Router) {

    this.title = data.title;
    this.message = data.message;
  }
  ngOnInit() {
  }

  onSelect(offrestage?: OffreStage): void {
    this.selectedOffrestage = offrestage;
  }

  //  appel de la fonction pour la suppression

  deleteOffreStage(id: String): void {
    if (id) {
      this.offrestageService.deleteOffreStage(id)
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
