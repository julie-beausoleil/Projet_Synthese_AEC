import { Component, OnInit } from '@angular/core';
import { OffrestageService } from '../dossierDesServices/offrestage.service';  /* Importantion de mon service - SG*/
import { OffreStage } from '../dossierDesInterfaces/offre-stage'; /* Importation de mon interface - SG */

@Component({
  selector: 'app-counter-offres-stages',
  templateUrl: './counter-offres-stages.component.html',
  styleUrls: ['./counter-offres-stages.component.sass']
})
export class CounterOffresStagesComponent implements OnInit {

  offrestages : OffreStage[] = [];

  constructor(private offrestageService : OffrestageService) { }

  ngOnInit(): void {
    this.getOffreStages();
  }
  
  getOffreStages(): void {
    this.offrestageService.getOffreStages()
    .subscribe(resultat => this.offrestages = resultat);
  }
}