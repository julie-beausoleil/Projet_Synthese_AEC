import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormulaireInternshipRequestData, InternshipRequest } from '../dossierDesInterfaces/internshipRequest';
import { InternshipRequestService } from '../dossierDesServices/internship-request.service';


@Component({
  selector: 'app-formulaire-internship-request',
  templateUrl: './formulaire-internship-request.component.html',
  styleUrls: ['./formulaire-internship-request.component.sass']
})
export class FormulaireInternshipRequestComponent implements OnInit {

  @Input() formulaireInternshipRequestData: FormulaireInternshipRequestData = <FormulaireInternshipRequestData>{}; 
  internshipRequest = this.formulaireInternshipRequestData.internshipRequest;
  isDisabled = this.formulaireInternshipRequestData.isDisabled;

  @Output() majTableau = new EventEmitter();

  constructor(private internshipRequestService: InternshipRequestService) { }

  ngOnInit(): void {
    this.internshipRequest = this.formulaireInternshipRequestData.internshipRequest;
    this.isDisabled = this.formulaireInternshipRequestData.isDisabled;
  }

  onSave(internshipRequestForm: NgForm) {
    if (internshipRequestForm.valid) {
      if (this.internshipRequest._id != null && this.internshipRequest._id != '') {
        // Si on a un id, on doit modifier le forfait
        this.internshipRequestService.editInternshipRequest(this.internshipRequest).subscribe(_ => { this.majTableau.emit() });

      } else { 
        // Sinon, on doit ajouter le forfait
        this.internshipRequestService.addInternshipRequest(this.internshipRequest).subscribe(_ => { this.majTableau.emit() });
      }
    }
  }

  onCancel() { 
    this.majTableau.emit();
  }

  updateSkills(event:any) {
    //console.log("------------> updateCaracteristiques: " + event);
    this.internshipRequest.skills = [];
    this.internshipRequest.skills = [...event];
  }

  updatePaid(event:any) {
    //console.log("------------> updateCaracteristiques: " + event);
    this.internshipRequest.paid = [];
    this.internshipRequest.paid = [...event];
  }

}
