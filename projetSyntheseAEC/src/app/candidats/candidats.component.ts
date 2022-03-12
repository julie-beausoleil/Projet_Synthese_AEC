import { Component, OnInit } from '@angular/core';
import { Candidat } from '../candidat'; /*ajout l'interface dans le composant candidat par WC*/
import { CandidatService } from '../candidat.service'; /*importer le service candidat pour que le composant candidat*/
                                                       /*puisse l'utiliser*/

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.sass']
})
export class CandidatsComponent implements OnInit {

  candidats: Candidat[] = []; /*declaration d'un tableau de candidat par WC*/

  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.getCandidats(); /* cette instruction fait appel à la methode qui affiche la liste de candidats par WC*/
  }

  getCandidats(): void {
    this.candidatService.getCandidats()
        .subscribe(resultat => this.candidats = resultat);
  }


}
