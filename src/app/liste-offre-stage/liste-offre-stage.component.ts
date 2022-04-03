import { Component, OnInit } from '@angular/core';
import { OffrestageService } from '../dossierDesServices/offrestage.service';
import { OffreStage } from '../dossierDesInterfaces/offre-stage';

@Component({
  selector: 'app-liste-offre-stage',
  templateUrl: './liste-offre-stage.component.html',
  styleUrls: ['./liste-offre-stage.component.sass']
})
export class ListeOffreStageComponent implements OnInit {

  offrestages : OffreStage [] = [];
  selectedOffrestage?: OffreStage;  

  constructor(private offrestageservice : OffrestageService) { }

  ngOnInit(): void {
    this.getOffreStages();
  }

  getOffreStages(): void {
    this.offrestageservice.getOffreStages()
      .subscribe(resultat => this.offrestages = resultat);
  }

}

/* permet d'afficher la liste de stage par un boucle */