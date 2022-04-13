import { Component, OnInit } from '@angular/core';
import { RequeteStage } from '../dossierDesInterfaces/requete-stage';
import { RequetestagaService } from '../dossierDesServices/requetestaga.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-demande',
  templateUrl: './fiche-demande.component.html',
  styleUrls: ['./fiche-demande.component.sass']
})
export class FicheDemandeComponent implements OnInit {
 requetesStages: RequeteStage[] = [];

  constructor(private requetestagaService: RequetestagaService, router: Router) { }

  ngOnInit(): void {
    this.getReqStage();
  }
  getReqStage(): void {
    this.requetestagaService.getReqStages()
      .subscribe((_result: RequeteStage[]) => (this.requetesStages = _result));
  }

}
