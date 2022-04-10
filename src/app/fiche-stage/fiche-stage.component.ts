import { Component, OnInit, Input } from '@angular/core';
import { OffrestageService } from '../dossierDesServices/offrestage.service';
import { OffreStage } from '../dossierDesInterfaces/offre-stage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-stage',
  templateUrl: './fiche-stage.component.html',
  styleUrls: ['./fiche-stage.component.sass']
})
export class FicheStageComponent implements OnInit {
 
  @Input() offrestage? : OffreStage; 
  offrestages : OffreStage[] = [];
  selectedCandidat?: OffreStage;
 

constructor(private offrestageService : OffrestageService, router: Router) { }

  ngOnInit(): void {
    this.getOffreStages();
  }

  getOffreStages(): void {
    this.offrestageService.getOffreStages()
    .subscribe(resultat => this.offrestages = resultat);
  }

}
