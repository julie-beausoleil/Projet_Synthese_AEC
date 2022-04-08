import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../dossierDesInterfaces/candidat';
import { CandidatService } from '../dossierDesServices/candidat.service'; /*importer le service candidat pour que le composant candidat*/
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-candidat',
  templateUrl: './ajout-candidat.component.html',
  styleUrls: ['./ajout-candidat.component.sass']
})
export class AjoutCandidatComponent implements OnInit {
 /* @Input() candidat?: Candidat; */
 /* candidats: Candidat[] = []; */
  @Input() candidat: Candidat = {
    _id: " ",
    name: " ",
    description: " ",
    jobTitle: " ",
    email: " ",
    phone: " ",
    address: " ",
    city: " ",
    province: " ",
    postalCode: " ",
    published: false,
  };
  @Output() majTableau = new EventEmitter();
  constructor( private candidatService: CandidatService,
  private router : Router) { }

  ngOnInit(): void {
  }
   saveCandidat() : void {
    this.candidatService.addCandidat(this.candidat)
      .subscribe(resultat => this.candidat = resultat);      
    this.router.navigate(["candidats"]);
  }

}
