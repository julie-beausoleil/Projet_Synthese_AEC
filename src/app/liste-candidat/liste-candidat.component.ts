import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../dossierDesServices/candidat.service'; /* importation de mon service */
import { Candidat } from '../dossierDesInterfaces/candidat'; /* Importation de mon interface */
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-candidat',
  templateUrl: './liste-candidat.component.html',
  styleUrls: ['./liste-candidat.component.sass']
})
export class ListeCandidatComponent implements OnInit {

  constructor(private candidatService : CandidatService,
              private router: Router) { }

  candidats : Candidat [] = [];   
  selectedCandidat?: Candidat;  

  ngOnInit(): void {
    this.getCandidats();
  }
  
  getCandidats(): void {
    this.candidatService.getCandidats()
      .subscribe(resultat => this.candidats = resultat);
  }
  
  /* FONCTION QUI VA AFFICHER MA FICHE DE MON ENTREPRISE LORS DU CLICK */
  onClick(candidatId : String){
    this.router.navigate(['/candidats', candidatId])
  }
}
