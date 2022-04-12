import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../dossierDesServices/candidat.service'; /* importation de mon service - SG*/
import { Candidat } from '../dossierDesInterfaces/candidat'; /* Importation de mon interface - SG*/

@Component({
  selector: 'app-counter-candidats',
  templateUrl: './counter-candidats.component.html',
  styleUrls: ['./counter-candidats.component.sass']
})
export class CounterCandidatsComponent implements OnInit {

  candidats : Candidat [] = [];

  constructor(private candidatService : CandidatService) { }

  ngOnInit(): void {
    this.getCandidats();
  }
  
  getCandidats(): void {
    this.candidatService.getCandidats()
      .subscribe(resultat => this.candidats = resultat);
  }

}
