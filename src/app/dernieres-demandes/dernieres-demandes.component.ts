import { Component, OnInit } from '@angular/core';
import { RequeteStage } from '../dossierDesInterfaces/requete-stage';
import { RequetestagaService } from '../dossierDesServices/requetestaga.service';

@Component({
  selector: 'app-dernieres-demandes',
  templateUrl: './dernieres-demandes.component.html',
  styleUrls: ['./dernieres-demandes.component.sass']
})
export class DernieresDemandesComponent implements OnInit {
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
