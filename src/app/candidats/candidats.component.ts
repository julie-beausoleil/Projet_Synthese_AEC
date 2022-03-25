<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, Input } from '@angular/core';
>>>>>>> Stashed changes
import { Candidat } from '../dossierDesInterfaces/candidat'; /*ajout l'interface dans le composant candidat par WC*/
import { CandidatService } from '../dossierDesServices/candidat.service'; /*importer le service candidat pour que le composant candidat*/
/*puisse l'utiliser*/

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.sass']
})
<<<<<<< Updated upstream
export class CandidatsComponent implements OnInit {
  name = `Plume Latraverse `;
  description = `UX Designer `;
  email = `plume@latraverse.com `;
  phone = `819-999-9999 `;
=======
export class CandidatsComponent implements OnInit {  
>>>>>>> Stashed changes

  @Input() candidat? : Candidat;    
  candidats : Candidat[]= [] ;   
  selectedCandidat?: Candidat;

  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {    
  }
  
  getCandidats(): void {
    this.candidatService.getCandidats()
      .subscribe(resultat => this.candidats = resultat);
  }

  onSelect(candidat: Candidat): void {
    this.selectedCandidat = candidat; 
  }

}
