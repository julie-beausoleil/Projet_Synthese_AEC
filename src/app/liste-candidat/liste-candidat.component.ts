import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../dossierDesServices/candidat.service'; /* importation de mon service */
import { Candidat } from '../dossierDesInterfaces/candidat'; /* Importation de mon interface */

@Component({
  selector: 'app-liste-candidat',
  templateUrl: './liste-candidat.component.html',
  styleUrls: ['./liste-candidat.component.sass']
})
export class ListeCandidatComponent implements OnInit {

  constructor(private candidatService : CandidatService) { }

  candidats : Candidat [] = [];   

  ngOnInit(): void {
    this.getCandidats();
  }
  
  getCandidats(): void {
    this.candidatService.getCandidats()
      .subscribe(resultat => this.candidats = resultat);
  }
}
