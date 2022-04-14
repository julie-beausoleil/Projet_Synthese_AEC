import { Component, OnInit } from '@angular/core';
import { InternshipRequestService } from '../dossierDesServices/internship-request.service'; /* Importantion de mon service - SG */
import { InternshipRequest } from '../dossierDesInterfaces/internshipRequest'; /* Importation de mon interface - SG */

@Component({
  selector: 'app-counter-demandes-stages',
  templateUrl: './counter-demandes-stages.component.html',
  styleUrls: ['./counter-demandes-stages.component.sass']
})
export class CounterDemandesStagesComponent implements OnInit {

  internshipRequests: InternshipRequest[] = [];

  constructor(private internshipRequestService: InternshipRequestService) { }

  ngOnInit(): void {
    this.getInternshipRequests();
  }
  
  getInternshipRequests(): void {
    this.internshipRequestService.getInternshipRequests()
      .subscribe(resultat => this.internshipRequests = resultat);
  }

}