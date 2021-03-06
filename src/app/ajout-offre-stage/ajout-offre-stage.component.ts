import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { OffreStage } from '../dossierDesInterfaces/offre-stage';
import { OffrestageService } from '../dossierDesServices/offrestage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-offre-stage',
  templateUrl: './ajout-offre-stage.component.html',
  styleUrls: ['./ajout-offre-stage.component.sass']
})
export class AjoutOffreStageComponent implements OnInit {
  @Input() titre: String = "Annuler";

  @Input() offrestage: OffreStage = {
    _id: "",
    title: "",
    description: "",
    enterprise: "",
    startDate: new Date(),
    endDate: new Date(),
    program: "",
    requirements: "",
    stageType: "",
    hoursPerWeek: 0,
    additionalInfo: "",
    paid: [],
    skills: [],
    published: false,
    active: false,
  }

  @Output() majTableau = new EventEmitter();
  constructor(private offrestageService: OffrestageService, private router : Router) { }

  ngOnInit(): void {
  }

  ajoutOffreStage() : void {
    this.offrestageService.addOffreStage(this.offrestage)
    .subscribe(resultat => this.offrestage = resultat);      
    this.router.navigate(["liste-offre-stage"]);
  }
  
}
