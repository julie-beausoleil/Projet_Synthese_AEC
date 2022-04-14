import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { RequeteStage } from '../dossierDesInterfaces/requete-stage';
import { RequetestagaService } from '../dossierDesServices/requetestaga.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editer-demande-stage',
  templateUrl: './editer-demande-stage.component.html',
  styleUrls: ['./editer-demande-stage.component.sass']
})
export class EditerDemandeStageComponent implements OnInit {
  @Input() titre: String = "Annuler";
  @Input() requeteStage: Omit<RequeteStage, "_id"> = {

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

  constructor(private location: Location,
    private requetestagaService: RequetestagaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  annuler(): void {
    this.location.back();
  }

}
