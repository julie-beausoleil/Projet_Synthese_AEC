import { Component, OnInit, Input } from '@angular/core';
import { Candidat } from '../dossierDesInterfaces/candidat';
import { CandidatService } from '../dossierDesServices/candidat.service'; /*importer le service candidat pour que le composant candidat*/
import { Location } from '@angular/common';


@Component({
  selector: 'app-ajout-candidat',
  templateUrl: './ajout-candidat.component.html',
  styleUrls: ['./ajout-candidat.component.sass']
})
export class AjoutCandidatComponent implements OnInit {
  @Input() titre: String = "Annuler";
  @Input() candidat?: Candidat;
  candidats: Candidat[] = [];
  
  constructor(private candidatService: CandidatService,
              private Location: Location) { }

  ngOnInit(): void {
  }

  annuler(): void {
    this.Location.back();
  }
}
