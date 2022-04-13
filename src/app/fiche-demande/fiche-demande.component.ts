import { Component, OnInit } from '@angular/core';
import { RequeteStage } from '../dossierDesInterfaces/requete-stage';
import { RequetestagaService } from '../dossierDesServices/requetestaga.service';

@Component({
  selector: 'app-fiche-demande',
  templateUrl: './fiche-demande.component.html',
  styleUrls: ['./fiche-demande.component.sass']
})
export class FicheDemandeComponent implements OnInit {
  requetesStages: RequeteStage[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
