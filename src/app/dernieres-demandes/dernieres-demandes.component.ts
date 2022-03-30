import { Component, OnInit } from '@angular/core';
import { RequeteStage } from '../dossierDesInterfaces/requete-stage';
import { RequetestagaService } from '../dossierDesServices/requetestaga.service';
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide

@Component({
  selector: 'app-dernieres-demandes',
  templateUrl: './dernieres-demandes.component.html',
  styleUrls: ['./dernieres-demandes.component.sass']
})
export class DernieresDemandesComponent implements OnInit {
  requetesStage: RequeteStage[] = [];

  constructor(private requetestagaService: RequetestagaService) { }

  ngOnInit(): void {
  
  }


}
