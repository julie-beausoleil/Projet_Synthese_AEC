import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { RequeteStage } from '../dossierDesInterfaces/requete-stage';
import { RequetestagaService } from '../dossierDesServices/requetestaga.service';

@Component({
  selector: 'app-editer-demande-stage',
  templateUrl: './editer-demande-stage.component.html',
  styleUrls: ['./editer-demande-stage.component.sass']
})
export class EditerDemandeStageComponent implements OnInit {
  @Input() titre: String = "Annuler";
  
  
  constructor(private location: Location,
   private requetestagaService: RequetestagaService) { }

  ngOnInit(): void {
  }

  annuler(): void {
    this.location.back();
  }

}
