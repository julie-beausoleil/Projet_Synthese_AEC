import { Component, OnInit } from '@angular/core';
import { RequeteStage } from '../dossierDesInterfaces/requete-stage';
import { RequetestagaService } from '../dossierDesServices/requetestaga.service';

@Component({
  selector: 'app-demandes-de-stages',
  templateUrl: './demandes-de-stages.component.html',
  styleUrls: ['./demandes-de-stages.component.css']
})
export class DemandesDeStagesComponent implements OnInit {
  requetesStages: RequeteStage[] = [];

  constructor(private requetestagaService: RequetestagaService) { }

  ngOnInit(): void {
    this.getReqStage();
  }

  getReqStage(): void {
    this.requetestagaService.getReqStages()
      .subscribe((_result: RequeteStage[]) => (this.requetesStages = _result));
  }

  onDelete(RequetesStages: RequeteStage): void {
    this.requetestagaService.deleteReqStage(RequetesStages._id)
      .subscribe(_result => this.requetesStages = this.requetesStages.filter(p => p !== RequetesStages));
  }

}
