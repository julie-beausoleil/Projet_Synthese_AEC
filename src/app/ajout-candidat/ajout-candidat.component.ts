import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Candidat } from '../dossierDesInterfaces/candidat';
import { CandidatService } from '../dossierDesServices/candidat.service'; /*importer le service candidat pour que le composant candidat*/
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-ajout-candidat',
  templateUrl: './ajout-candidat.component.html',
  styleUrls: ['./ajout-candidat.component.sass']
})
export class AjoutCandidatComponent implements OnInit {

  selectedCandidat?: Candidat;

  @Input() candidat : Omit<Candidat, "_id"> = {    
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
  /* zz */
  saveCandidat(candidatForm: NgForm) : void {
    if (candidatForm.valid) {
      if (this.candidat != null && this.candidat) 
      this.candidatService.addCandidat(this.candidat)
      .subscribe(() => this.router.navigate(["/candidats"]));
    }    
  }
}
