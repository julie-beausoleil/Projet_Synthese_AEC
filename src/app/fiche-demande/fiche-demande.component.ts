import { Component, OnInit, Input } from '@angular/core';
import { RequeteStage } from '../dossierDesInterfaces/requete-stage';
import { RequetestagaService } from '../dossierDesServices/requetestaga.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiche-demande',
  templateUrl: './fiche-demande.component.html',
  styleUrls: ['./fiche-demande.component.sass']
})
export class FicheDemandeComponent implements OnInit {

  requeteStages: RequeteStage[] = [];
  

 

  constructor(private requetestagaService: RequetestagaService, private router: Router) { }

  ngOnInit(): void {
    this.getReqStage();
  }
  
  getReqStage(): void {
    this.requetestagaService.getReqStages()
      .subscribe(resultat => this.requeteStages = resultat);
  }
}