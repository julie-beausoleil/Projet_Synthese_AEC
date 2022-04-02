import { Component, OnInit } from '@angular/core';
import { Candidat } from '../dossierDesInterfaces/candidat';
import { CandidatService } from '../dossierDesServices/candidat.service';

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

  constructor(private candidatService: CandidatService) { }

  ngOnInit(): void {
  }

}
