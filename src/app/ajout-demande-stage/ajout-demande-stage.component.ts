import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { RequetestagaService } from '../dossierDesServices/requetestaga.service'; /* Importation du service */
import { RequeteStage } from '../dossierDesInterfaces/requete-stage'; /* Importation de l'interface */

@Component({
  selector: 'app-ajout-demande-stage',
  templateUrl: './ajout-demande-stage.component.html',
  styleUrls: ['./ajout-demande-stage.component.sass']
})

export class AjoutDemandeStageComponent implements OnInit {

  
  @Input() requeteStage : Omit<RequeteStage, "_id"> = {
   
    title: " ",
    description: " ",
    enterprise: " ",
    studentName: " ",
    school: " ",
    studentPresentation: " ",
    startDate: new Date(),
    endDate: new Date(),
    program: " ",
    requirements: " ",
    stageType: " ",
    hoursPerWeek: 0,
    additionalInfo: " ",
    paid: [],
    skills: [],
    published: false,
    active: false,
    region: " ",
    activitySector: " ",
    city: " ",
    linkToResume: " "
  }

 

  constructor(private requetestagaService : RequetestagaService,
              private router : Router) { }

  ngOnInit(): void {
  }

  ajoutDemandeStage() : void {
    this.requetestagaService.addReqStage(this.requeteStage)
    .subscribe(resultat => this.requeteStage = resultat);      
    this.router.navigate(["liste-demande-stage"]); /* ici Josée voir à mettre le bon composant */
  } 
  
}


