import { Component, OnInit, Input } from '@angular/core';
import { Candidat } from '../dossierDesInterfaces/candidat';
import { CandidatService } from '../dossierDesServices/candidat.service'; /*importer le service candidat pour que le composant candidat*/


@Component({
  selector: 'app-ajout-candidat',
  templateUrl: './ajout-candidat.component.html',
  styleUrls: ['./ajout-candidat.component.sass']
})
export class AjoutCandidatComponent implements OnInit {
  @Input() candidat?: Candidat;
  candidats: Candidat[] = [];
  
  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
  }

}
