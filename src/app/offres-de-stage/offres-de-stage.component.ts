import { Component, OnInit, Input } from '@angular/core';
import { OffrestageService } from '../dossierDesServices/offrestage.service';
import { OffreStage } from '../dossierDesInterfaces/offre-stage';



@Component({
  selector: 'app-offres-de-stage',
  templateUrl: './offres-de-stage.component.html',
  styleUrls: ['./offres-de-stage.component.sass']
})
export class OffresDeStageComponent implements OnInit {
  @Input() offrestage? : OffreStage; 

  offrestages : OffreStage[] = [];
  selectedOffrestage?: OffreStage;  
 
  constructor(private offrestageService : OffrestageService) { }
    ngOnInit(): void {
  }

 getOffreStages(): void {
   this.offrestageService.getOffreStages()
   .subscribe(resultat => this.offrestages = resultat);
 }
 
  onSelect(offrestage: OffreStage): void {
   this.selectedOffrestage = offrestage; 
 }

}


/* permet d'afficher la liste de stage par un boucle */