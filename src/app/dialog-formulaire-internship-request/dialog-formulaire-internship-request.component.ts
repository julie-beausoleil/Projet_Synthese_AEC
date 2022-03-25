import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormulaireInternshipRequestData, InternshipRequest } from '../dossierDesInterfaces/internshipRequest'

@Component({
  selector: 'app-dialog-formulaire-internship-request',
  templateUrl: './dialog-formulaire-internship-request.component.html',
  styleUrls: ['./dialog-formulaire-internship-request.component.sass']
})
export class DialogFormulaireInternshipRequestComponent {

  constructor(public dialogRef: MatDialogRef<DialogFormulaireInternshipRequestComponent>,
              @Inject(MAT_DIALOG_DATA) public data: FormulaireInternshipRequestData) { }

  fermerDialogue(): void {
    this.dialogRef.close();
  }
}
