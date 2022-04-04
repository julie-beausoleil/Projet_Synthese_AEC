import { Component, OnInit } from '@angular/core';
import { Candidat } from '../dossierDesInterfaces/candidat';/* Importation de mon interface - SG */
import { CandidatService } from '../dossierDesServices/candidat.service'; /* Importantion de mon service -SG  */
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fiche-candidat',
  templateUrl: './fiche-candidat.component.html',
  styleUrls: ['./fiche-candidat.component.sass']
})
export class FicheCandidatComponent implements OnInit {
  
  candidat: Candidat = {
    _id: "",
    name: "",
    description: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    published: false,
  };

  constructor(private candidatService: CandidatService,
              private route: ActivatedRoute, 
              private router: Router) { }

  ngOnInit(): void {
    const id = String (this.route.snapshot.params['_id']);
      this.candidatService.getCandidat(id)
      .subscribe(resultat => this.candidat = resultat);
    }

}


