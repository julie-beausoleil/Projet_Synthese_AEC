import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormulaireInternshipRequestComponent } from '../dialog-formulaire-internship-request/dialog-formulaire-internship-request.component';
import { InternshipRequestService } from '../../../services/internship-request.service';
import { InternshipRequest } from '../../../interfaces/internshipRequest';


@Component({
  selector: 'app-table-internship-request',
  templateUrl: './table-internship-request.component.html',
  styleUrls: ['./table-internship-request.component.sass']
})
export class TableInternshipRequestComponent implements OnInit {

  isDisabled:boolean= false;
  internshipRequests: InternshipRequest[] = [];
  selectedInternshipRequest?: InternshipRequest;
  columnsToDisplay = ['profil', 'etablissement', 'dateDebut', 'actions'];

  constructor(private internshipRequestService: InternshipRequestService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getInternshipRequests();
  }

  getInternshipRequests(): void {
    this.internshipRequestService.getInternshipRequests()
      .subscribe(resultat => this.internshipRequests = resultat);
  }

  onDelete(internshipRequest: InternshipRequest): void {
    if(internshipRequest._id){
      this.internshipRequestService.deleteInternshipRequest(internshipRequest._id)
        .subscribe(result => this.internshipRequests = this.internshipRequests.filter(p => p !== internshipRequest));
    }
  }

  onSelect(internshipRequest?: InternshipRequest) {
    if (!internshipRequest) {
      this.selectedInternshipRequest = <InternshipRequest>{
        title: "",
        description: "",
        enterprise: "",
        startDate: new Date(),
        endDate:  new Date(),
        program: "",
        requirements: "",
        stageType: "",
        hoursPerWeek: 0,
        additionalInfo: "",
        skills: [],
        published: false,
        paid: [],
        active: false,
      };
    } else { 
      this.selectedInternshipRequest = internshipRequest;
    }
    this.isDisabled = false;

    let formulaireInternshipRequest = { internshipRequest : this.selectedInternshipRequest, 
                                        isDisabled : this.isDisabled};

    const dialogRef = this.dialog.open(DialogFormulaireInternshipRequestComponent, {
      width: '1000px',
      data: formulaireInternshipRequest,
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.selectedInternshipRequest = undefined;
      this.getInternshipRequests();
    });
  }


  onSelectReadOnly(internshipRequest: InternshipRequest) {
    this.selectedInternshipRequest = internshipRequest;
    this.isDisabled = true;

    let formulaireInternshipRequest = { internshipRequest : this.selectedInternshipRequest, 
                                        isDisabled : this.isDisabled};
    
    const dialogRef = this.dialog.open(DialogFormulaireInternshipRequestComponent, {
      width: '1000px',
      data: formulaireInternshipRequest,
    });

    dialogRef.afterClosed().subscribe(_ => {
      this.selectedInternshipRequest = undefined;
      this.getInternshipRequests();
    });
  }


}// Fin TableInternshipRequestComponent
